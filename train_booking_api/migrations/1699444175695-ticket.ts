import { MigrationInterface, QueryRunner } from "typeorm";

export class Ticket1699444175695 implements MigrationInterface {
    name = 'Ticket1699444175695'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ticket" ("id" SERIAL NOT NULL, "number" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "time" TIME NOT NULL, "departure" character varying NOT NULL, "arrival" character varying NOT NULL, CONSTRAINT "UQ_a8d5171cdff59b4d6fc2c6d092e" UNIQUE ("number"), CONSTRAINT "PK_d9a0835407701eb86f874474b7c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ticket"`);
    }

}
