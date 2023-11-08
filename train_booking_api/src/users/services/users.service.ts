import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserFilter } from '../dtos/filter-user.dto';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

@Injectable()
export class UsersService{
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User> 
  ) {}


  findBy(userFilter: UserFilter): Promise<User[]> {
    return this.userRepository.findBy(userFilter);
  }

  async findOneBy(userFilter: UserFilter): Promise<User> {
    const user = await this.userRepository.findOneBy(userFilter);
    if(!user) {
      throw new NotFoundException("User not found");
    }

    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userDto = await this.getDtoWithHashedPassword(createUserDto);
    const user = this.userRepository.create(userDto);
    return this.userRepository.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const userDto = await this.getDtoWithHashedPassword(updateUserDto);
    const user = await this.userRepository.preload({
      id,
      ...userDto
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return this.userRepository.save(user);
  }

  remove(id: number): Promise<any> {
    return this.userRepository.delete(id);
  }

    private async getDtoWithHashedPassword(dto: CreateUserDto|UpdateUserDto): Promise<CreateUserDto|UpdateUserDto> {
      if(dto?.password) {
        dto.password = await bcrypt.hash(
          dto.password,
          saltOrRounds
        );
      }
      return dto;
    }
}
