import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { TNSCheckBoxModule } from "@nstudio/nativescript-checkbox/angular";

import { BaladasComponent } from "./baladas.component";
import { BaladaDetailComponent } from "./balada-detail/balada-detail.component";
import { BaladasService } from "../../services/baladas.service";
import { AlterarCadastroComponent } from "./alterar-cadastro/alterar-cadastro.component";
import { EditEventoComponent } from "./edit-evento/edit-evento.component";
import { CreateEventoComponent } from "./create-evento/create-evento.component";

@NgModule({
    imports: [
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUIGaugeModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        TNSCheckBoxModule
    ],
    declarations: [
        BaladasComponent,
        BaladaDetailComponent,
        AlterarCadastroComponent,
        EditEventoComponent,
        CreateEventoComponent
    ],
    providers: [
        BaladasService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BaladasModule { }
