import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOneBy({ username });

    if (user) {
      const hashPass = /^\$2y\$/.test(user.password)
        ? '$2a$' + user.password.slice(4)
        : user.password;
      const isMatchingPassword = await bcrypt.compare(password, hashPass);

      if (isMatchingPassword) {
        const { password, ...result } = user;
        return result;
      }
    }

    return null;
  }

  async login(user: any) {
    const payload = { id: user.id, username: user.username, roles: user.roles };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
