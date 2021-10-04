import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';
import { DmsService } from './dms.service';

@ApiTags('DMS')
@Controller('api/workspaces')
export class DmsController {
  constructor(private readonly dmsService: DmsService) {}

  @ApiOperation({ summary: '워크스페이스 DM 모두 가져오기' })
  @Get(':url/dms')
  async getWorkspaceChannels(@Param('url') url, @User() user) {}

  @ApiOperation({ summary: '워크스페이스 특정 DM 채팅 모두 가져오기' })
  @Get(':url/dms/:id/chats')
  async getWorkspaceDMChats(
    @Param('url') url,
    @Param('id') id: number,
    @Query('perPage') perPage: number,
    @Query('page') page: number,
    @User() user,
  ) {}

  @ApiOperation({ summary: '워크스페이스 특정 DM 채팅 생성하기' })
  @Post(':url/dms/:id/chats')
  async createWorkspaceDMChats(
    @Param('url') url,
    @Param('id') id: number,
    @Body('content') content,
    @User() user,
  ) {}

  @ApiOperation({ summary: '워크스페이스 특정 DM 이미지 업로드하기' })
  @Post(':url/dms/:id/images')
  async createWorkspaceDMImages(
    @Param('url') url,
    @Param('id') id: number,
    @User() user,
  ) {}

  @ApiOperation({ summary: '안 읽은 개수 가져오기' })
  @Get(':url/dms/:id/unreads')
  async getUnreads(
    @Param('url') url,
    @Param('id') id: number,
    @Query('after') after: number,
    @User() user,
  ) {}
}
