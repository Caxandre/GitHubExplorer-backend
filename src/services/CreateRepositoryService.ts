import { getRepository } from 'typeorm';
import gitHubApi from '../utils/api';
import Repository from '../models/Repository';
import Contributor from '../models/Contributor';
import Pull from '../models/Pull';

import AppError from '../errors/AppError';

interface Request {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner_login: string;
  owner_avatar_url: string;
  last_update: Date;
}

class CreateRepositoryService {
  public async execute({
    full_name,
    description,
    stargazers_count,
    forks_count,
    open_issues_count,
    owner_login,
    owner_avatar_url,
    last_update,
  }: Request): Promise<Repository> {
    const pullsRepository = getRepository(Pull);
    const contributorsRepository = getRepository(Contributor);
    const repoRepository = getRepository(Repository);

    const repositoryExists = await repoRepository.findOne({
      where: { full_name },
    });

    if (repositoryExists) {
      throw new AppError('Repository already saved', 401);
    }

    const pull_requests = await gitHubApi.get(`repos/${full_name}/pulls`);
    const contributors = await gitHubApi.get(`repos/${full_name}/contributors`);

    const filtered_pulls = pull_requests.data
      .filter((pr: Pull) => pr.state === 'open')
      .sort(function (a, b) {
        return b.number - a.number;
      })
      .splice(0, 3);

    const repository = repoRepository.create({
      full_name,
      description,
      stargazers_count,
      forks_count,
      open_issues_count,
      owner_login,
      owner_avatar_url,
      last_update,
    });

    await repoRepository.save(repository);

    const createPull = pullsRepository.create(
      filtered_pulls.map((pull: Pull) => ({
        html_url: pull.html_url,
        state: pull.state,
        title: pull.title,
        number: pull.number,
        repository_id: repository.id,
      })),
    );

    await pullsRepository.save(createPull);

    const createContributor = contributorsRepository.create(
      contributors.data.map((contributor: Contributor) => ({
        login: contributor.login,
        avatar_url: contributor.avatar_url,
        html_url: contributor.html_url,
        repository_id: repository.id,
      })),
    );

    await contributorsRepository.save(createContributor);

    const newRepo = await repoRepository.findOne({
      where: { id: repository.id },
    });

    return newRepo as Repository;
  }
}

export default CreateRepositoryService;
