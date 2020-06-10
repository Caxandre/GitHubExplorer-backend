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

@Entity('pulls')
class Pull {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  repository_id: string;

  @ManyToOne(() => Repository, repository => repository.pulls)
  @JoinColumn({ name: 'repository_id' })
  repository: Repository;

  @Column()
  title: string;

  @Column()
  html_url: string;

  @Column()
  number: number;

  @Column()
  state: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Pull;
