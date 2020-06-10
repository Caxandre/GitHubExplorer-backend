import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Repository from '../models/Repository';

interface Request {
  id: string;
}

class DeleteRepositoryService {
  public async execute({ id }: Request): Promise<void> {
    const repositoriesRepository = getRepository(Repository);

    const repository = await repositoriesRepository.findOne(id);

    if (!repository) {
      throw new AppError('Repository not found!', 400);
    }

    await repositoriesRepository.remove(repository);
  }
}

export default DeleteRepositoryService;
