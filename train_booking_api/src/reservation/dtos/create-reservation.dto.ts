import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateReservationDto {
    @IsNumber()
    @IsNotEmpty()
    ticket: number;
}
