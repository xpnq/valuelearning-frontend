export class User {
    username: string;
    password: string;

    constructor(username?: string, password?: string){
        if (username == null){
            this.username = '';
        } else {
            this.username = username;
        }

        if(password == null){ 
            this.password = '';
        }
        else {
            this.password = password;
        }
    }

    toBase64(){
        let username: string;
        let password: string;
        return {
            username: btoa(this.username),
            password: btoa(this.password)
        }
    }

    static fromBase64(user: any){
        return new User(atob(user.username), atob(user.password));
    }
}

export class UserAccess{
    jwtString: string;
    status: number;
}

export class UserDetails {
    email: string;
    password: string;
    firstname: string;
    surname: string;
    middlename: string;
}