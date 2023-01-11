import { Repository } from 'typeorm';
import { Message } from './messages.entity';
export declare class MessagesService {
    private repo;
    constructor(repo: Repository<Message>);
    create(content: string, sender: string): Promise<Message>;
    find(): Promise<Message[]>;
    findOne(id: number): Promise<Message>;
}
