import { User } from "../../user/model/user";
import { Gist } from "./gist";

export class Note {
    gistId: string;
    gist: Gist;
    description: string;
    subject: string;
    author: User;
    readonly: boolean;

    constructor(
        description: string,
        subject: string,
        author: User,
        files: Object = {},
        readonly: boolean = false,
    ) {
        this.gist = new Gist(description, files);
        this.subject = subject;
        this.author = author;
        this.readonly = readonly;
    }
}
