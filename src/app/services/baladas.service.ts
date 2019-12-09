import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import * as moment from "moment";
import { Balada } from "../models/balada.model";
import { EventoResouce } from "../models/evento.model";

@Injectable({
    providedIn: "root"
})
export class BaladasService {

    private path: string;

    constructor(private http: HttpClient) {
        this.path = "http://localhost:3000/baladas";
    }

    getBaladas(): Array<Balada> {
        return this.baladas;
    }

    getBalada(id: number): Balada {
        return this.baladas.filter((balada) => balada.id === id)[0];
    }

    getEventos(): Array<EventoResouce> {
        return this.eventoRetorno;
    }

    getEvento(id: number): EventoResouce {
        return this.eventoRetorno.filter((evento) => evento.id === id)[0];
    }

    private baladas = new Array<Balada>(
        { id: 1, name: "Balada1", endereco: "Rua Balada1, Curitiba" },
        { id: 2, name: "Balada2", endereco: "Rua Balada2, Curitiba" },
        { id: 3, name: "Balada3", endereco: "Rua Balada3, Curitiba" },
        { id: 4, name: "Balada4", endereco: "Rua Balada4, Curitiba" },
        { id: 5, name: "Balada5", endereco: "Rua Balada5, Curitiba" },
        { id: 6, name: "Balada6", endereco: "Rua Balada6, Curitiba" },
        { id: 7, name: "Balada7", endereco: "Rua Balada7, Curitiba" },
        { id: 8, name: "Balada8", endereco: "Rua Balada8, Curitiba" },
        { id: 9, name: "Balada9", endereco: "Rua Balada9, Curitiba" },
        { id: 10, name: "Balada10", endereco: "Rua Balada10, Curitiba" },
    );

    private eventos = new Array<any>(
        { id: 1, name: "Evento1", data: "25 de novembro", balada: 1, estilo: "Sertanejo", img: "~/app/images/party.jpg" },
        { id: 2, name: "Evento2", data: "25 de novembro", balada: 2, estilo: "Pop", img: "~/app/images/party.jpg" },
        { id: 3, name: "Evento3", data: "25 de novembro", balada: 3, estilo: "Pop", img: "~/app/images/party.jpg" },
        { id: 4, name: "Evento4", data: "25 de novembro", balada: 4, estilo: "Funk", img: "~/app/images/party.jpg" },
        { id: 5, name: "Evento5", data: "26 de novembro", balada: 5, estilo: "Pagode", img: "~/app/images/party.jpg" },
        { id: 6, name: "Evento6", data: "26 de novembro", balada: 6, estilo: "Eletronico", img: "~/app/images/party.jpg" },
        { id: 7, name: "Evento7", data: "26 de novembro", balada: 7, estilo: "Sertanejo", img: "~/app/images/party.jpg" },
        { id: 8, name: "Evento8", data: "27 de novembro", balada: 8, estilo: "Funk", img: "~/app/images/party.jpg" },
        { id: 9, name: "Evento9", data: "27 de novembro", balada: 9, estilo: "Funk", img: "~/app/images/party.jpg" },
        { id: 10, name: "Evento10", data: "27 de novembro", balada: 10, estilo: "Pop", img: "~/app/images/party.jpg" },
    );

    private eventoRetorno = new Array<any>(
        {
            id: 1,
            name: "Festa Sertaneja",
            data: moment("12/06/2019").toDate(),
            dataCerta: "06 de Dezembro",
            nomeBalada: "Balada Renan",
            enderecoBalada: "Rua Balada1, Curitiba - PR",
            estilo: "Sertanejo",
            descricao: `Atrações:
            [+] (Sertanejo)
📍Valores com nome na lista/mural:
    Feminino R$10 até 00h. Apos R$20 ate 01h.
    Masculino R$20 até 00h. Apos R$40 até 01h.`,
            img: "~/app/images/logo-xs.jpg"
        },
        {
            id: 2,
            name: "Rave Nossa",
            data: moment("12/06/2019").toDate(),
            dataCerta: "06 de Dezembro",
            nomeBalada: "Balada Tectec",
            enderecoBalada: "Rua Balada tectec, Curitiba - PR",
            estilo: "Pop",
            descricao: `Atrações:
            [+] (Pagode)
            [+] (Sertanejo)
            [+] (Funk)
📍Valores com nome na lista/mural:
    Feminino R$10 até 00h. Apos R$20 ate 01h.
    Masculino R$20 até 00h. Apos R$40 até 01h.`,
            img: "~/app/images/party.jpg"
        },
        {
            id: 3,
            name: "Evento3",
            data: moment("12/07/2019").toDate(),
            dataCerta: "07 de Dezembro",
            nomeBalada: "Balada3",
            enderecoBalada: "Rua Balada3, Curitiba",
            estilo: "Pop",
            descricao: `Atrações:
            [+] (Pagode)
            [+] (Sertanejo)
            [+] (Funk)
📍Valores com nome na lista/mural:
    Feminino R$10 até 00h. Apos R$20 ate 01h.
    Masculino R$20 até 00h. Apos R$40 até 01h.`,
            img: "~/app/images/party.jpg"
        },
        {
            id: 4,
            name: "Evento4",
            data: moment("12/06/2019").toDate(),
            dataCerta: "06 de Dezembro",
            nomeBalada: "Balada4",
            enderecoBalada: "Rua Balada4, Curitiba",
            estilo: "Funk",
            descricao: `Atrações:
            [+] (Pagode)
            [+] (Sertanejo)
            [+] (Funk)
📍Valores com nome na lista/mural:
    Feminino R$10 até 00h. Apos R$20 ate 01h.
    Masculino R$20 até 00h. Apos R$40 até 01h.`,
            img: "~/app/images/party.jpg"
        },
        {
            id: 5,
            name: "Evento5",
            data: moment("12/07/2019").toDate(),
            dataCerta: "07 de Dezembro",
            nomeBalada: "Balada5",
            enderecoBalada: "Rua Balada5, Curitiba",
            estilo: "Pagode",
            descricao: `Atrações:
            [+] (Pagode)
            [+] (Sertanejo)
            [+] (Funk)
📍Valores com nome na lista/mural:
    Feminino R$10 até 00h. Apos R$20 ate 01h.
    Masculino R$20 até 00h. Apos R$40 até 01h.`,
            img: "~/app/images/party.jpg"
        },
        {
            id: 6,
            name: "Evento6",
            data: moment("12/07/2019").toDate(),
            dataCerta: "07 de Dezembro",
            nomeBalada: "Balada6",
            enderecoBalada: "Rua Balada6, Curitiba",
            estilo: "Eletronico",
            descricao: `Atrações:
            [+] (Pagode)
            [+] (Sertanejo)
            [+] (Funk)
📍Valores com nome na lista/mural:
    Feminino R$10 até 00h. Apos R$20 ate 01h.
    Masculino R$20 até 00h. Apos R$40 até 01h.`,
            img: "~/app/images/party.jpg"
        },
        {
            id: 7,
            name: "Evento7",
            data: moment("12/08/2019").toDate(),
            dataCerta: "08 de Dezembro",
            nomeBalada: "Balada7",
            enderecoBalada: "Rua Balada7, Curitiba",
            estilo: "Sertanejo",
            descricao: `Atrações:
            [+] (Pagode)
            [+] (Sertanejo)
            [+] (Funk)
📍Valores com nome na lista/mural:
    Feminino R$10 até 00h. Apos R$20 ate 01h.
    Masculino R$20 até 00h. Apos R$40 até 01h.`,
            img: "~/app/images/party.jpg"
        },
        {
            id: 8,
            name: "Evento8",
            data: moment("12/08/2019").toDate(),
            dataCerta: "08 de Dezembro",
            nomeBalada: "Balada8",
            enderecoBalada: "Rua Balada8, Curitiba",
            estilo: "Funk",
            descricao: `Atrações:
            [+] (Pagode)
            [+] (Sertanejo)
            [+] (Funk)
📍Valores com nome na lista/mural:
    Feminino R$10 até 00h. Apos R$20 ate 01h.
    Masculino R$20 até 00h. Apos R$40 até 01h.`,
            img: "~/app/images/party.jpg"
        },
        {
            id: 9,
            name: "Evento9",
            data: moment("12/09/2019").toDate(),
            dataCerta: "09 de Dezembro",
            nomeBalada: "Balada Chedy",
            enderecoBalada: "Rua Otavinho, Curitiba - PR",
            estilo: "Funk",
            descricao: `Atrações:
            [+] (Funk)
📍Valores com nome na lista/mural:
    Feminino R$10 até 00h. Apos R$20 ate 01h.
    Masculino R$20 até 00h. Apos R$40 até 01h.`,
            img: "~/app/images/party.jpg"
        },
        {
            id: 10,
            name: "Pagodinho do Zé",
            data: moment("12/09/2019").toDate(),
            dataCerta: "09 de Dezembro",
            nomeBalada: "Balada Trevis",
            enderecoBalada: "Rua Balada Trevis, Curitiba - PR",
            estilo: "Pop",
            descricao: `Atrações:
            [+] (Pop)
📍Valores com nome na lista/mural:
    Feminino R$10 até 00h. Apos R$20 ate 01h.
    Masculino R$20 até 00h. Apos R$40 até 01h.`,
            img: "~/app/images/party.jpg"
        },
    );
}
