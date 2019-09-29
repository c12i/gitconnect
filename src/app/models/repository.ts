export class Repository {
    constructor(public name: string,
                public description: string,
                public url: string,
                public language: string,
                // tslint:disable-next-line: variable-name
                public updated_at: Date) {
    }
}
