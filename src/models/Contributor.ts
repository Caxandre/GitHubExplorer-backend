import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import Repository from './Repository';

@Entity('contributors')
class Contributor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  repository_id: string;

  @ManyToOne(() => Repository, repository => repository.contributors)
  @JoinColumn({ name: 'repository_id' })
  repository: Repository;

  @Column()
  login: string;

  @Column()
  avatar_url: string;

  @Column()
  html_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Contributor;
