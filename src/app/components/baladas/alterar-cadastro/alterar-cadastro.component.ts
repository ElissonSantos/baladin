import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { User } from "~/app/models/user.model";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-alterarSenha",
    moduleId: module.id,
    templateUrl: "./alterar-cadastro.component.html"
})
export class AlterarCadastroComponent implements OnInit {

    isLoggingIn = true;
    user: User;
    processing = false;
    hintold: string;
    hintnew: string;

    @ViewChild("email", { static: false }) email: ElementRef;
    @ViewChild("oldpassword", { static: false }) oldpassword: ElementRef;
    @ViewChild("newpassword", { static: false }) newpassword: ElementRef;

    constructor(
        private page: Page,
        private routerExtensions: RouterExtensions
    ) {
        this.user = new User();
        this.hintold = "Senha Atual";
        this.hintnew = "Nova Senha";
        this.page.actionBarHidden = true;
    }

    ngOnInit() {
        this.user.nome = "Elisson Santos"
        this.user.email = "user@nativescript.org";
        this.user.password = "password";
    }

    save() {
        this.routerExtensions.navigate(["/baladas"], { clearHistory: true });
    }

    cancel() {
        this.routerExtensions.navigate(["/baladas"], { clearHistory: true });
    }
}
