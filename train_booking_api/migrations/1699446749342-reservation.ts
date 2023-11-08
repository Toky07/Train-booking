import { MigrationInterface, QueryRunner } from "typeorm";

export class Reservation1699446749342 implements MigrationInterface {
    name = 'Reservation1699446749342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reservation" ("id" SERIAL NOT NULL, "number" character varying NOT NULL DEFAULT '1699446753146', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT true, "user_id" integer, "ticket_id" integer, CONSTRAINT "REL_e219b0a4ff01b85072bfadf3fd" UNIQUE ("user_id"), CONSTRAINT "REL_ff292b7fff22f5f8652750c50c" UNIQUE ("ticket_id"), CONSTRAINT "PK_48b1f9922368359ab88e8bfa525" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "reservation" ADD CONSTRAINT "FK_e219b0a4ff01b85072bfadf3fd7" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservation" ADD CONSTRAINT "FK_ff292b7fff22f5f8652750c50c5" FOREIGN KEY ("ticket_id") REFERENCES "ticket"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservation" DROP CONSTRAINT "FK_ff292b7fff22f5f8652750c50c5"`);
        await queryRunner.query(`ALTER TABLE "reservation" DROP CONSTRAINT "FK_e219b0a4ff01b85072bfadf3fd7"`);
        await queryRunner.query(`DROP TABLE "reservation"`);
    }

}
