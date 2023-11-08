import { Ticket } from "../../ticket/entities/ticket.entity";
import { User } from "../../users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column({ default: Date.now() })
    number: string;

    @OneToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToOne(() => Ticket)
    @JoinColumn({ name: 'ticket_id' })
    ticket: Ticket;

    @CreateDateColumn({ name: 'created_at' }) 
    createdAt: Date;

    @Column({ default: true })
    isActive: boolean;
}
