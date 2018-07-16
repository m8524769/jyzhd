import { User } from "../../user/model/user";
import { Gist } from "./gist";

export class Note {
    gistId: string;
    gist: Gist;
    subject: string;
    readonly: boolean;

    constructor(
        description: string,
        files: Object,
        subject: string,
        author: User,
        readonly: boolean,
    ) {
        this.gist = new Gist(description, files);
        this.subject = subject;
        this.readonly = readonly;
    }
}
