import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';
import { UndefinedToNullInterceptor } from 'src/interceptors/undefinedToNull.interceptor';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('USERS')
@Controller('api/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({ summary: '내 정보 가져오기' })
  @Get()
  async getProfile(@User() user) {}

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  async login(@User() user) {}

  @ApiOperation({ summary: '회원가입' })
  @Post()
  async join(@Body() data: JoinRequestDto) {}

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  async logout(@Res() res) {}
}
