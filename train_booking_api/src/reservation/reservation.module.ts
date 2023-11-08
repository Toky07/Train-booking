import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { UsersModule } from 'src/users/users.module';
import { TicketModule } from 'src/ticket/ticket.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reservation]),
    UsersModule,
    TicketModule,
  ],
  providers: [ReservationService],
  controllers: [ReservationController]
})
export class ReservationModule {}
