// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { User } from "../models/user.model";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { Request } from 'nativescript-background-http';

@Injectable()
export class UserService {

    private userBd: User;

    constructor(private http: HttpClient) {
        this.userBd = {
            nome: "Elisson Santos",
            email: "elissonmaycon@gmail.com",
            password: "senhaapp"
        };
    }

    carregaUsers() {
        console.log('passa por aquui antes do erro')
        const url = 'http://localhost:3000/users';
        const result = this.http.get(url)
        .subscribe(x => {
            console.log(x);
        });
    }

    register(user: User) {
        let retorno: boolean;
        if (user.email && user.password && user.nome) {
            retorno = true;
            return new Promise((resolve, reject) => {
                resolve(retorno);
            });
        } else {
            retorno = false;
            return new Promise((resolve, reject) => {
                resolve(retorno);
            });
        }
        // return this.kinveyUserService.signup({ username: user.email, password: user.password })
        //     .catch(this.handleErrors);
    }

    login(user: User) {
        let retorno: boolean;
        if (user.email === this.userBd.email && user.password === this.userBd.password) {
            retorno = true;
            return new Promise((resolve, reject) => {
                resolve(retorno);
            });
        } else {
            retorno = false;
            return new Promise((resolve, reject) => {
                resolve(retorno);
            });
        }
        // return this.kinveyUserService.login(user.email, user.password)
        //     .catch(this.handleErrors);
    }


    logout() {
        let retorno: boolean;
        retorno = false;
        return new Promise((resolve, reject) => {
            resolve(retorno);
        });
        // return this.kinveyUserService.logout()
        //     .catch(this.handleErrors);
    }

    resetPassword(email) {
        let retorno: boolean;
        retorno = true;
            return new Promise((resolve, reject) => {
                resolve(retorno);
            });
        // return this.kinveyUserService.resetPassword(email)
        //     .catch(this.handleErrors);
    }
}
