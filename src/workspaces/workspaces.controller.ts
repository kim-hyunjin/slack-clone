import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { WorkspacesService } from './workspaces.service';

@ApiTags('WORKSPACES')
@Controller('api/workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @ApiOperation({ summary: '내 워크스페이스 가져오기' })
  @Get()
  async getMyWorkspaces(@User() user) {}

  @ApiOperation({ summary: '워크스페이스 만들기' })
  @Post()
  async createWorkspace(@User() user, @Body() body: CreateWorkspaceDto) {}

  @ApiOperation({ summary: '워크스페이스 멤버 가져오기' })
  @Get(':url/members')
  async getWorkspaceMembers(@Param('url') url: string) {}

  @ApiOperation({ summary: '워크스페이스 멤버 초대하기' })
  @Post(':url/members')
  async createWorkspaceMembers(
    @Param('url') url: string,
    @Body('email') email,
  ) {}

  @ApiOperation({ summary: '워크스페이스 특정멤버 가져오기' })
  @Get(':url/members/:id')
  async getWorkspaceMember(
    @Param('url') url: string,
    @Param('id') id: number,
  ) {}

  @ApiOperation({ summary: '워크스페이스 특정멤버 가져오기' })
  @Get(':url/users/:id')
  async getWorkspaceUser(@Param('url') url: string, @Param('id') id: number) {}
}
