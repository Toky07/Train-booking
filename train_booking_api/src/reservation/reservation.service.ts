import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import { FilterReservation } from './dtos/filter-reservation.dto';
import { CreateReservationDto } from './dtos/create-reservation.dto';
import { UsersService } from 'src/users/services/users.service';
import { TicketService } from 'src/ticket/ticket.service';
import { UpdateReservationDto } from './dtos/update-reservation.dto';

@Injectable()
export class ReservationService {
    constructor(
        @InjectRepository(Reservation)
        private readonly reservationRepository: Repository<Reservation>,
        private readonly userService: UsersService,
        private readonly ticketService: TicketService,
    ) {}

    findBy(filter: FilterReservation): Promise<Reservation[]> {
        return this.reservationRepository.find({
            where: filter,
            relations: {
                user: true,
                ticket: true,
            }
        });
    }

    findOneBy(filter: FilterReservation): Promise<Reservation> {
        return this.reservationRepository.findOne({
            where: filter,
            relations: {
                user: true,
                ticket: true,
            }
        })
    }

    async create(createReservationDto: CreateReservationDto, user: any): Promise<Reservation> {
        const currentUser = await this.userService.findOneBy({ id: user.userId });
        const ticket = await this.ticketService.findOneBy({ id: createReservationDto.ticket });
      
        const reservation = this.reservationRepository.create({
          ...createReservationDto,
          user: currentUser,
          ticket,
        });
      
        return this.reservationRepository.save(reservation);
    }
   
    //TODO: change any to UpdateReservationDto
    async update(id: any, updateReservationDto: any): Promise<Reservation> {
        console.log(id);
        const reservation = await this.reservationRepository.preload({
            ...id,
            ...updateReservationDto,
        });

        return this.reservationRepository.save(reservation);
    }
}
