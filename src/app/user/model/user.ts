export class User {
    id: number;
    email: string;
    nickname: string;
    password: string;

    constructor(email: string, nickname: string, password: string) {
        this.email = email;
        this.nickname = nickname;
        this.password = password;
    }
}