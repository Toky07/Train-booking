import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Ticket } from './entities/ticket.entity';
import { CreateTicketDto } from './dtos/create-ticket.dto';
import { UpdateTicketDto } from './dtos/update-ticket.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller('ticket')
@UseGuards(JwtAuthGuard)
export class TicketController {
    constructor(
        private readonly ticketService: TicketService
    ){}

    @Get()
    findAll(): Promise<Ticket[]> {
        return this.ticketService.findBy({});
    }

    @Get(':id')
    findOneById(@Param('id') id: number): Promise<Ticket> {
        return this.ticketService.findOneBy({ id });
    }

    @Post()
    create(@Body() createTicketDto: CreateTicketDto): Promise<Ticket> {
        return this.ticketService.create(createTicketDto);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateTicketDto: UpdateTicketDto): Promise<Ticket> {
        return this.ticketService.update(+id, updateTicketDto);
    }
}
