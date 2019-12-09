import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";

import { BaladasService } from "../../../services/baladas.service";
import { EventoResouce } from "~/app/models/evento.model";
import { RouterExtensions } from "nativescript-angular/router";
import { registerElement } from "@nativescript/angular/element-registry";

registerElement("DropDown", () => require("nativescript-drop-down").DropDown)

@Component({
    selector: "ns-create",
    templateUrl: "./create-evento.component.html"
})
export class CreateEventoComponent implements OnInit {
    evento: EventoResouce;
    estilos: any[];
    baladas: any;

    constructor(
        private page: Page,
        private baladasService: BaladasService,
        private routerExtensions: RouterExtensions
    ) {
        this.carregaOptions();
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }

    save() {
        this.routerExtensions.navigate(["/baladas"], { clearHistory: true });
    }

    cancel() {
        this.routerExtensions.navigate(["/baladas"], { clearHistory: true });
    }

    onopen() {
        console.log("DropDown open");
    }

    onclose() {
        console.log("DropDown close");
    }

    carregaOptions() {
        this.estilos = ["Sertanejo", "Pop", "Pagode", "Funk", "Eletronica"];
        this.baladas = this.baladasService.getBaladas();
    }
}
