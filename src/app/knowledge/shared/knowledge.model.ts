export class Knowledge {
  id: number;
  title: string;
  description: string;
  content: string;
  created: Date;
  author: number;

  constructor(
    title: string,
    description: string,
    content: string,
    author: number,
  ) {
    this.title = title;
    this.description = description;
    this.content = content;
    this.author = author;
  }
}
