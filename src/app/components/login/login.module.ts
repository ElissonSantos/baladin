import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { LoginComponent } from "./login.component";
import { UserService } from "../../services/user.service";

@NgModule({
    imports: [
        NativeScriptModule,
    ],
    declarations: [
        LoginComponent,
    ],
    providers: [
        UserService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }
