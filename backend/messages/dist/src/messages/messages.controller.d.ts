import { CreateMessageDTO } from './dto/message.dto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    private messagesService;
    constructor(messagesService: MessagesService);
    createMessage(body: CreateMessageDTO): void;
    findMessage(id: string): Promise<import("./messages.entity").Message>;
    findMessages(): Promise<import("./messages.entity").Message[]>;
}
