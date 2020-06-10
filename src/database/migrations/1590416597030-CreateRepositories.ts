import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateRepositories1590416597030
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'repositories',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'full_name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'stargazers_count',
            type: 'integer',
          },
          {
            name: 'forks_count',
            type: 'integer',
          },
          {
            name: 'owner_login',
            type: 'varchar',
          },
          {
            name: 'owner_avatar_url',
            type: 'varchar',
          },
          {
            name: 'open_issues_count',
            type: 'integer',
          },
          {
            name: 'last_update',
            type: 'timestamp with time zone',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('repositories');
  }
}
