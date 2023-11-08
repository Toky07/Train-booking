import { IsString } from "class-validator";

export class CreateTicketDto {
    @IsString()
    number: string;

    @IsString()
    date: Date;

    //Lieu de depart
    @IsString()
    departure: string;

    //Lieu d'arrive
    @IsString()
    arrival: string;
}
