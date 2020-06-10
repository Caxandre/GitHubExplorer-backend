import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import Contributor from './Contributor';
import Pull from './Pull';

@Entity('repositories')
class Repository {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  full_name: string;

  @Column()
  description: string;

  @Column()
  stargazers_count: number;

  @Column()
  forks_count: number;

  @Column()
  open_issues_count: number;

  @Column()
  owner_login: string;

  @Column()
  owner_avatar_url: string;

  @OneToMany(() => Contributor, contributor => contributor.repository, {
    eager: true,
  })
  contributors: Contributor[];

  @OneToMany(() => Pull, pull => pull.repository, {
    eager: true,
  })
  pulls: Pull[];

  @Column('timestamp with time zone')
  last_update: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Repository;
