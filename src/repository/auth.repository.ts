import User from '../entities/User';
import RegisterRequest from '../lib/request/register';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export default class userRepository extends Repository<User>  {
  public getUser = async (id: string): Promise<User | undefined> => {
    return this.createQueryBuilder()
      .where(`id = :id`, { id })
      .getOne();
  }

  public addUser = async (user: RegisterRequest): Promise<User> => {
    return this.save(user);
  }
}