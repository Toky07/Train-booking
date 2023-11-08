import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    @Exclude() //Ne pas afficher le mot de passe lorsqu'on recupere une ou plusieurs utilisateur
    password: string;
}
