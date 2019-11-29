import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { LoginModule } from "./login/login.module";
import { BaladasModule } from "./baladas/baladas.module";

@NgModule({
    imports: [
        NativeScriptModule,
        LoginModule,
        BaladasModule
    ],
    declarations: [],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ComponentsModule { }
