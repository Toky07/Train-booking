import { IsNumber, IsOptional } from "class-validator";

export class FilterReservation {
    @IsNumber()
    @IsOptional()
    number?: string; 

    @IsNumber()
    @IsOptional()
    id?: number;
}
