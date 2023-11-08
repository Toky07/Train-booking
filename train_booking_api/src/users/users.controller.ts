import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Patch,
    Post,
    UseGuards,
    UseInterceptors
  } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { User } from './entities/user.entity';
import { UserFilter } from './dtos/filter-user.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
  

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findBy({});
    }

    @HttpCode(HttpStatus.OK)
    @Post('search/by')
    findBy(@Body() userFilter: UserFilter): Promise<User[]|null> {
        return this.userService.findBy(userFilter);
    }

    @Get(':id')
    findOneBy(@Param('id') id: number): Promise<User> {
        return this.userService.findOneBy({ id });
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }

    @Patch(':id')
    update(
        @Param('id') id: number,
        @Body() updateUserDto: UpdateUserDto 
    ): Promise<User> {
        return this.userService.update(+id, updateUserDto);
    }

}
  
