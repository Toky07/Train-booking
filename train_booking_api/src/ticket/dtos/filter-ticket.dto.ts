import { IsNumber, IsOptional } from "class-validator";
import { UpdateTicketDto } from "./update-ticket.dto";

export class FilterTicket extends UpdateTicketDto{
    @IsOptional()
    @IsNumber()
    id?: number;
}
