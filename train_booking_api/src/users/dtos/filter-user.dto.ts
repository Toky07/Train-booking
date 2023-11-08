import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
import { IsNumber, IsOptional } from "class-validator";

export class UserFilter extends PartialType(CreateUserDto) {
    @IsNumber()
    @IsOptional()
    id?: number;
}
