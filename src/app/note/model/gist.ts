export class Gist {

    description: string;
    files: Object;
    public: boolean;

    constructor(
        description: string,
        files: Object
    ) {
        this.description = description;
        this.files = files;
        this.public = true;
    }
}
