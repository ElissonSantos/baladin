import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";


import { User } from "../models/user.model";

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

    teste() {
        getString("https://us-central1-baladin.cloudfunctions.net/helloWorld")
        .then((r: string) => {
            console.log(r);
            console.log('Printou o retorno do http?');
        }, (e) => {
        });
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
        console.log(user.nome);
        console.log(user.email);
        console.log(user.password);
        return;

        // firebase.login({
        //     type: firebase.LoginType.PASSWORD,
        //     passwordOptions: {
        //         email: user.email,
        //         password: user.password
        //     }
        // })
        // .then(result => {
        //     console.log("VAIO POR AQIUI")
        //     JSON.stringify(result)
        // })
        // .catch(error => console.log(error));
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
