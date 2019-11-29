import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";

import { BaladasService } from "../../../services/baladas.service";
import { EventoReturn } from "~/app/models/evento.model";
import { RouterExtensions } from "nativescript-angular/router";
import { registerElement } from "@nativescript/angular/element-registry";

registerElement("DropDown", () => require("nativescript-drop-down").DropDown)

@Component({
    selector: "ns-edit",
    templateUrl: "./edit-evento.component.html"
})
export class EditEventoComponent implements OnInit {
    evento: EventoReturn;
    estilos: string[];
    // baladas: string[];

    constructor(
        private page: Page,
        private baladasService: BaladasService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) {
        this.estilos = ["Sertanejo", "Pop", "Pagode", "Funk", "Eletronica"];
        this.page.actionBarHidden = true;
        // this.baladas = baladasService.getBaladas();
    }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.evento = this.baladasService.getEvento(id);
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
}
