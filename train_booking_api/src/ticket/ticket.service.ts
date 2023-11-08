import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Repository } from 'typeorm';
import { FilterTicket } from './dtos/filter-ticket.dto';
import { CreateTicketDto } from './dtos/create-ticket.dto';
import { UpdateTicketDto } from './dtos/update-ticket.dto';

@Injectable()
export class TicketService {
    constructor(
        @InjectRepository(Ticket)
        private readonly ticketRepository: Repository<Ticket>
    ) {}

    findBy(filter: FilterTicket): Promise<Ticket[]> {
        return this.ticketRepository.findBy(filter);
    }

    findOneBy(filter: FilterTicket): Promise<Ticket> {
        return this.ticketRepository.findOneBy(filter);
    }

    create(createTicketDto: CreateTicketDto): Promise<Ticket> {
        const ticket = this.ticketRepository.create(createTicketDto);
        return this.ticketRepository.save(ticket);
    }

    async update(id: number, updateTicketDto: UpdateTicketDto): Promise<Ticket> {
        const ticket = await this.ticketRepository.preload({
            id,
            ...updateTicketDto,
        });

        return this.ticketRepository.save(ticket);
    }
}
