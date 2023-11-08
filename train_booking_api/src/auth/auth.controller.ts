import { Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(200)
    @Post('/login')
    @UseGuards(LocalAuthGuard)
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
