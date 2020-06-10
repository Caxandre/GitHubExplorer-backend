import { Router } from 'express';

import { getRepository } from 'typeorm';

import Repository from '../models/Repository';

import CreateRepositoryService from '../services/CreateRepositoryService';
import DeleteRepositoryService from '../services/DeleteRepositoryService';

const repositoriesRouter = Router();

repositoriesRouter.get('/', async (request, response) => {
  const repositoriesRepository = getRepository(Repository);
  const repositories = await repositoriesRepository.find({
    relations: ['contributors', 'pulls'],
  });

  return response.json(repositories);
});

repositoriesRouter.post('/', async (request, response) => {
  const {
    full_name,
    description,
    stargazers_count,
    forks_count,
    open_issues_count,
    owner_login,
    owner_avatar_url,
    last_update,
  } = request.body;
  const createRepository = new CreateRepositoryService();

  const repository = await createRepository.execute({
    full_name,
    description,
    stargazers_count,
    forks_count,
    open_issues_count,
    owner_login,
    owner_avatar_url,
    last_update,
  });

  return response.json(repository);
});

repositoriesRouter.get('/:id', async (request, response) => {
  const repositoriesRepository = getRepository(Repository);
  const repository = await repositoriesRepository.findOne({
    where: { id: request.params.id },
    relations: ['contributors', 'pulls'],
  });

  return response.json(repository);
});

repositoriesRouter.delete('/:id', async (request, response) => {
  const deleteRepository = new DeleteRepositoryService();
  const repository = await deleteRepository.execute({
    id: request.params.id,
  });

  return response.json(repository);
});

export default repositoriesRouter;
