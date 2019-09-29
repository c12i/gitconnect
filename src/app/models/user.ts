export class User {
    constructor(public name: string,
                public login: string,
                // tslint:disable-next-line: variable-name
                public avatar_url: string,
                public followers: number,
                public followig: number,
                // tslint:disable-next-line: variable-name
                public public_repos: number,
                public bio: string,
                public location: string,
                public blog: string,
                public email: string,
                public company: string,
                // tslint:disable-next-line: variable-name
                public created_at: Date,
        ) {

    }
}
