import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    number: string;

    @Column()
    date: Date;

    @Column({ type: 'time' })
    time: string;

    @Column()
    departure: string;

    @Column()
    arrival: string;
}
