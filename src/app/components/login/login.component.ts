import { Component, ElementRef, ViewChild } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";

import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent {

    isLoggingIn = true;
    user: User;
    processing = false;
    logotipo: string;

    @ViewChild("email", { static: false }) email: ElementRef;
    @ViewChild("password", { static: false }) password: ElementRef;

    constructor(
        private page: Page,
        private userService: UserService,
        private routerExtensions: RouterExtensions
    ) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.logotipo = "~/app/images/logo-baladin.png";
        // this.executa();
    }

    executa() {
        this.userService.carregaUsers();
    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    submit() {
        // if (!this.user.email || !this.user.password) {
        //     this.alert("É necessario inserir email e senha.");
        //     return;
        // }

        this.processing = true;
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }

    login() {
        this.processing = false;
        this.routerExtensions.navigate(["/baladas"], { clearHistory: true });
        // this.userService.login(this.user)
        //     .then((retorno) => {
        //         if (retorno) {
        //             this.processing = false;
        //             this.routerExtensions.navigate(["/baladas"], { clearHistory: true });
        //         } else {
        //             this.processing = false;
        //             this.alert("Email ou senha está incorreto.");
        //         }
        //     })
        //     .catch(() => {
        //         this.processing = false;
        //         this.alert("Email ou senha está incorreto.");
        //     });
    }

    register() {
        this.isLoggingIn = !this.isLoggingIn;
        // this.userService.register(this.user)
        //     .then(() => {
        //         this.processing = false;
        //         this.alert("Parabens, sua conta já foi criada.");
        //         this.isLoggingIn = true;
        //     })
        //     .catch(() => {
        //         this.processing = false;
        //         this.alert("Infelizmente não conseguimos criar a sua conta.");
        //     });
    }

    forgotPassword() {
        prompt({
            title: "Esqueceu a senha",
            message: "Coloque o email que foi registrado no Baladin para resetar sua senha.",
            inputType: "email",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancelar"
        })
            .then((data) => {
                if (data.result) {
                    this.userService.resetPassword(data.text.trim())
                        .then(() => {
                            this.alert("Sua senha foi resetada co sucesso. Acesse o email para instruções.");
                        })
                        .catch(() => {
                            this.alert("Infelizmente ocorreu um erro ao resetar sua senha.");
                        });
                }
            });
    }

    focusEmail() {
        if (!this.isLoggingIn) {
            this.email.nativeElement.focus();
        }
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }

    alert(message: string) {
        return alert({
            title: "Baladin",
            okButtonText: "OK",
            message: message
        });
    }
}
