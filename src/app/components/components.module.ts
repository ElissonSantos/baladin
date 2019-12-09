import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { LoginModule } from "./login/login.module";
import { BaladasModule } from "./baladas/baladas.module";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        LoginModule,
        BaladasModule
    ],
    declarations: [],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        NativeScriptFormsModule
    ]
})
export class ComponentsModule { }
