import { Component, ElementRef, ViewChild } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page, EventData } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";

import { User } from "../../models/user.model";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent {

    isLoggingIn = true;
    user: User;
    confirmPasswordStrign: string;
    processing = false;
    logotipo: string;

    @ViewChild("nome", { static: false }) nome: ElementRef;
    @ViewChild("email", { static: false }) email: ElementRef;
    @ViewChild("password", { static: false }) password: ElementRef;
    @ViewChild("confirmPassword", { static: false }) confirmPassword: ElementRef;

    constructor(
        private page: Page,
        private routerExtensions: RouterExtensions
    ) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.email = "";
        this.user.password = "";
        this.confirmPasswordStrign = "";
        this.logotipo = "~/app/images/logo-baladin.png";
    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    submit() {
        if (!this.user.email || !this.user.password) {
            this.alert("É necessario inserir email e senha.");
            return;
        }

        this.processing = true;
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }

    login() {
        if (this.user.email === "elissonmaycon@gmail.com") {
            this.routerExtensions.navigate(["/baladasAdmin"]);
        } else {
            this.routerExtensions.navigate(["/baladas"]);
        }
    }

    register() {
        this.processing = false;
        this.isLoggingIn = false;
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
            .then(() => {});
    }

    focusEmail() {
        if (!this.isLoggingIn) {
            this.email.nativeElement.focus();
        }
    }

    focusPassword(args: EventData) {
        console.log("email");
        console.log(args);
        console.log(args.object.get("email"));
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
