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
    eventoData: string;
    isAdmin: boolean;
    logotipo: string;
    meses: string[];

    constructor(
        private page: Page,
        private baladasService: BaladasService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.evento = this.baladasService.getEvento(id);
        this.dataFormat();
        this.isAdmin = true;
        this.logotipo = "~/app/images/logo-baladin.png";
    }

    dataFormat() {
        const dia = this.evento.data.getDay();
        const mes = this.evento.data.getMonth();
        console.log(this.meses)
        const data = `${dia} ${this.meses[mes]}`;
        this.eventoData = data;
    }

    voltar() {
        this.routerExtensions.navigate(["/baladas"], { clearHistory: true });
    }

    carregarMeses() {
        this.meses = [
            " de Janeiro",
            " de Fevereiro",
            " de Março",
            " de Abril",
            " de Maio",
            " de Junho",
            " de Julho",
            " de Agosto",
            " de Setembro",
            " de Outubro",
            " de Novembro",
            " de Dezembro",
        ]
    }
}
