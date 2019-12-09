import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { User } from "../models/user.model";

@Injectable()
export class UserService {

    private path: string;

    constructor( private http: HttpClient ) {
        this.path = "http://localhost:3000/users";
    }

    login(user: User) {
        if (!user.email || !user.password) {
            return;
        }

        const params = new HttpParams;
        params.append('email', user.email);
        params.append('senha', user.password);

        return this.http.get(this.path, { params: params });
    }

    changePassword(user: User, novaSenha: string) {
        return this.http.put(this.path, { body: user});
    }

    register(user: User) {
        return this.http.post(this.path, { body: user});
    }

    resetPassword(email) {
        console.log("ver oq fazer");
    }
}
