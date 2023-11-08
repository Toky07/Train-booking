import { PartialType } from "@nestjs/mapped-types";
import { CreateReservationDto } from "./create-reservation.dto";
import { IsBoolean, IsOptional } from "class-validator";

export class UpdateReservationDto extends PartialType(CreateReservationDto) {
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}