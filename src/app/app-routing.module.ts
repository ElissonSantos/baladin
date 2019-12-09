import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { BaladasComponent } from "./components/baladas/baladas.component";
import { BaladaDetailComponent } from "./components/baladas/balada-detail/balada-detail.component";
import { AlterarCadastroComponent } from "./components/baladas/alterar-cadastro/alterar-cadastro.component";
import { EditEventoComponent } from "./components/baladas/edit-evento/edit-evento.component";
import { CreateEventoComponent } from "./components/baladas/create-evento/create-evento.component";
import { BaladasAdminComponent } from "./components/baladas/baladas.component-admin";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "baladas", component: BaladasComponent },
    { path: "baladasAdmin", component: BaladasAdminComponent },
    { path: "baladas/:id", component: BaladaDetailComponent },
    { path: "alterarCadastro/:id", component: AlterarCadastroComponent },
    { path: "createEvento", component: CreateEventoComponent },
    { path: "editEvento/:id", component: EditEventoComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
