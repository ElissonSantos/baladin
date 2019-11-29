import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Balada } from "../../../models/balada.model";
import { BaladasService } from "../../../services/baladas.service";
import { EventoReturn } from "~/app/models/evento.model";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-details",
    templateUrl: "./balada-detail.component.html"
})
export class BaladaDetailComponent implements OnInit {
    evento: EventoReturn;
    isAdmin: boolean;
    logotipo: string;

    constructor(
        private page: Page,
        private baladasService: BaladasService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.evento = this.baladasService.getEvento(id);
        this.isAdmin = true;
        this.logotipo = "~/app/images/logo-baladin.png";
    }

    voltar() {
        this.routerExtensions.navigate(["/baladas"], { clearHistory: true });
    }
}
