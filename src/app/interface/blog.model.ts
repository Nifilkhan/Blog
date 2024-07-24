export class Blog {
    constructor(
        public title: string,
        public description: string,
        public author?: string,
    ) { }

    getAuthorWithSal() {
        return 'Mr' + this.author;
    }
}