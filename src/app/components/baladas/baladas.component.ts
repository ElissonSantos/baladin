import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { isIOS } from "tns-core-modules/platform";
import { RouterExtensions } from "nativescript-angular/router";
import { CardView } from "@nstudio/nativescript-cardview";
import { registerElement } from "@nativescript/angular/element-registry";
import { EventData } from "tns-core-modules/data/observable";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import * as moment from "moment";

import { Balada } from "../../models/balada.model";
import { Evento, EventoReturn } from "../../models/evento.model";
import { BaladasService } from "../../services/baladas.service";
import { User } from "../../models/user.model";
import { prompt, alert } from "tns-core-modules/ui/dialogs/dialogs";

registerElement("CardView", () => CardView);
registerElement("Fab", () => require("@nstudio/nativescript-floatingactionbutton").Fab)

@Component({
    selector: "ns-baladas",
    moduleId: module.id,
    templateUrl: "./baladas.component.html"
})
export class BaladasComponent implements OnInit {

    @ViewChild("rsd", { static: false }) rSideDrawer: ElementRef;
    @ViewChild('sertanejo', { static: false }) sertanejo: ElementRef;
    @ViewChild('pagode', { static: false }) pagode: ElementRef;
    @ViewChild('eletronico', { static: false }) eletronico: ElementRef;
    @ViewChild('funk', { static: false }) funk: ElementRef;
    @ViewChild('pop', { static: false }) pop: ElementRef;

    user: User;
    lastDelY = 0;
    headerCollapsed = false;
    selectedTab = 0;
    selectedTabview = 0;
    allEventos: Array<EventoReturn> = [];
    eventosShow: Array<EventoReturn> = [];
    baladas: Array<Balada> = [];
    datas: Array<string> = [];
    dias: Array<Date> = [];
    diaSelecionado: Date;
    isAdmin: boolean;
    logotipo: string;
    diaDeHoje: Date;
    meses: string[];

    constructor(
        private page: Page,
        private baladasService: BaladasService,
        private routerExtensions: RouterExtensions
    ) {
        this.user = { nome: "Elisson Santos", email: "elissonmaycon@gmail.com", password: "senha" };
        this.page['scrollableContent'] = true;
        this.isAdmin = true;
        this.logotipo = "~/app/images/logo-baladin.png";
    }

    ngOnInit(): void {
        this.allEventos = this.baladasService.getEventos();
        this.baladas = this.baladasService.getBaladas();
        this.init();
    }

    init() {
        this.carregarMeses();

        this.diaDeHoje = moment(new Date()).toDate();
        this.diaDeHoje.setHours(0, 0, 0, 0);
        this.dias.push(new Date(this.diaDeHoje));

        let numberMes = this.diaDeHoje.getMonth();
        let mesatual = this.meses[numberMes];
        let dia = this.diaDeHoje.getDay();
        let diaOrigin: Date = this.diaDeHoje;

        for (let i = 1; i < 20; i++) {
            dia += 1;
            const data: string = dia + mesatual;
            this.datas.push(data)

            diaOrigin.setDate(diaOrigin.getDate() + 1);
            this.dias.push(new Date(diaOrigin));
        }
        console.log(this.dias)
    }

    create() {
        this.routerExtensions.navigate(["/createEvento"], { clearHistory: true });
    }

    edit(eventoId) {
        this.routerExtensions.navigate(["editEvento/" + eventoId]);
    }

    delete(eventoId) {
        prompt({
            title: "Deletar Evento",
            message: "Tem certeza que deseja deletar este evento?",
            defaultText: "",
            okButtonText: "Sim",
            cancelButtonText: "Nao"
        })
            .then((data) => {
                if (data.result) {
                    alert("Sua senha foi resetada com sucesso. Acesse o email para instruções.");
                    this.routerExtensions.navigate(["/baladas"], { clearHistory: true });
                }
            });
    }

    changedCheckBox() {
        this.eventosExibir();
    }

    onSelectedIndexChanged(args?: EventData) {
        const picker = <ListPicker>args.object;
        this.diaSelecionado = this.dias[picker.selectedIndex];
        this.eventosExibir();
    }

    eventosExibir() {
        this.eventosShow = [];
        this.allEventos.forEach(evento => {
            if (evento.data.getDate() === this.diaSelecionado.getDate()) {
                this.eventosShow.push(evento);
            }
        });

        this.verificaEstilo();
    }

    verificaEstilo() {
        const eventosDoDia = this.eventosShow;
        this.eventosShow = [];

        const sertanejo = this.sertanejo.nativeElement.checked;
        const pagode = this.pagode.nativeElement.checked;
        const eletronico = this.eletronico.nativeElement.checked;
        const funk = this.funk.nativeElement.checked;
        const pop = this.pop.nativeElement.checked;

        if (sertanejo || pagode || eletronico || funk || pop) {
            eventosDoDia.forEach(evento => {
                if (sertanejo && (evento.estilo === "Sertanejo")) {
                    this.eventosShow.push(evento);
                }
                if (pagode && (evento.estilo === "Pagode")) {
                    this.eventosShow.push(evento);
                }
                if (eletronico && (evento.estilo === "Eletronico")) {
                    this.eventosShow.push(evento);
                }
                if (funk && (evento.estilo === "Funk")) {
                    this.eventosShow.push(evento);
                }
                if (pop && (evento.estilo === "Pop")) {
                    this.eventosShow.push(evento);
                }
            })
        } else {
            this.eventosShow = eventosDoDia;
        }
    }

    showEvento(eventoId) {
        this.routerExtensions.navigate(["baladas/" + eventoId]);
    }

    // Direcionamento
    logOut() {
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    }

    alterarSenha() {
        this.routerExtensions.navigate(["/alterarCadastro/1"], { clearHistory: true });
    }

    // SideBar
    drawerLoaded(args) {
        let drawer = <RadSideDrawer>args.object;

        if (isIOS) {
            // if your menu is drawn 'below' the hostview, do this:
            //drawer.ios.defaultSideDrawer.style.shadowMode = 1; // TKSideDrawerShadowMode.Hostview;
            drawer.ios.defaultSideDrawer.style.shadowMode = 2; // TKSideDrawerShadowMode.SideDrawer;
            // if you have shadowMode = 2, then you can add a little dim to the lower layer to add some depth. Keep it subtle though:
            drawer.ios.defaultSideDrawer.style.dimOpacity = 0.12;
            // then tweak the shadow to your liking:
            drawer.ios.defaultSideDrawer.style.shadowOpacity = 0.75; // 0-1, higher is darker
            drawer.ios.defaultSideDrawer.style.shadowRadius = 5; // higher is more spread
            // bonus feature: control the menu animation speed (in seconds)
            drawer.ios.defaultSideDrawer.transitionDuration = 0.25;
        }
    }

    onOpenDrawerTap(): void {
        this.rSideDrawer.nativeElement.toggleDrawerState();
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
