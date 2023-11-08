import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    Param, 
    Post,
    Request,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { Reservation } from './entities/reservation.entity';
import { CreateReservationDto } from './dtos/create-reservation.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller('reservation')
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class ReservationController {
    constructor(
        private readonly reservationService: ReservationService
    ) {}

    @Get()
    findAll(): Promise<Reservation[]> {
        return this.reservationService.findBy({});
    }

    @Get(':id')
    findOneById(@Param('id') id: number): Promise<Reservation> {
        return this.reservationService.findOneBy({ id });
    }

    //Prendre une reservation
    @Post()
    create(
        @Body() createReservationDto: CreateReservationDto,
        @Request() request
    ): Promise<Reservation> {
        console.log(request.user)
        return this.reservationService.create(createReservationDto, request.user);
    }

    //Annulation d'une reservation
    @Post('cancel/:id')
    cancel(@Body() id) {
        return this.reservationService.update(id, { isActive: false });
    }
}
