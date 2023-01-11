import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dto/message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}
  @Post()
  createMessage(@Body() body: CreateMessageDTO) {
    this.messagesService.create(body.content, body.sender);
  }
  @Get('/:id')
  findMessage(@Param('id') id: string) {
    return this.messagesService.findOne(parseInt(id));
  }
  @Get()
  findMessages() {
    return this.messagesService.find();
  }
}
