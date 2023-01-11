import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './messages.entity';

// connect Message Service and Message Repository (db)
@Injectable()
export class MessagesService {
  constructor(@InjectRepository(Message) private repo: Repository<Message>) {}
  create(content: string, sender: string) {
    const message = this.repo.create({ content, sender });
    return this.repo.save(message);
  }
  find() {
    //run query on Repo
    return this.repo.find();
  }
  findOne(id: number) {
    //run query on Repo
    return this.repo.findOneBy({ id });
  }
}
