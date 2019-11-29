import { Injectable } from "@angular/core";

import { Balada } from "../models/balada.model";
import { Evento, EventoReturn } from "../models/evento.model";

@Injectable({
    providedIn: "root"
})
export class BaladasService {
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

    private eventos = new Array<Evento>(
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

    private eventoRetorno = new Array<EventoReturn>(
        {
            id: 1,
            name: "Evento1",
            data: "25 de novembro",
            nomeBalada: "Balada1",
            enderecoBalada: "Rua Balada1, Curitiba",
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
            id: 2,
            name: "Evento2",
            data: "25 de novembro",
            nomeBalada: "Balada2",
            enderecoBalada: "Rua Balada2, Curitiba",
            estilo: "Pop",
            descricao: "Descricao do Evento Descricao do Evento  Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento",
            img: "~/app/images/party.jpg"
        },
        {
            id: 3,
            name: "Evento3",
            data: "25 de novembro",
            nomeBalada: "Balada3",
            enderecoBalada: "Rua Balada3, Curitiba",
            estilo: "Pop",
            descricao: "Descricao do Evento Descricao do Evento  Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento",
            img: "~/app/images/party.jpg"
        },
        {
            id: 4,
            name: "Evento4",
            data: "25 de novembro",
            nomeBalada: "Balada4",
            enderecoBalada: "Rua Balada4, Curitiba",
            estilo: "Funk",
            descricao: "Descricao do Evento Descricao do Evento  Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento",
            img: "~/app/images/party.jpg"
        },
        {
            id: 5,
            name: "Evento5",
            data: "26 de novembro",
            nomeBalada: "Balada5",
            enderecoBalada: "Rua Balada5, Curitiba",
            estilo: "Pagode",
            descricao: "Descricao do Evento Descricao do Evento  Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento",
            img: "~/app/images/party.jpg"
        },
        {
            id: 6,
            name: "Evento6",
            data: "26 de novembro",
            nomeBalada: "Balada6",
            enderecoBalada: "Rua Balada6, Curitiba",
            estilo: "Eletronico",
            descricao: "Descricao do Evento Descricao do Evento  Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento",
            img: "~/app/images/party.jpg"
        },
        {
            id: 7,
            name: "Evento7",
            data: "26 de novembro",
            nomeBalada: "Balada7",
            enderecoBalada: "Rua Balada7, Curitiba",
            estilo: "Sertanejo",
            descricao: "Descricao do Evento Descricao do Evento  Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento",
            img: "~/app/images/party.jpg"
        },
        {
            id: 8,
            name: "Evento8",
            data: "27 de novembro",
            nomeBalada: "Balada8",
            enderecoBalada: "Rua Balada8, Curitiba",
            estilo: "Funk",
            descricao: "Descricao do Evento Descricao do Evento  Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento",
            img: "~/app/images/party.jpg"
        },
        {
            id: 9,
            name: "Evento9",
            data: "27 de novembro",
            nomeBalada: "Balada9",
            enderecoBalada: "Rua Balada9, Curitiba",
            estilo: "Funk",
            descricao: "Descricao do Evento Descricao do Evento  Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento",
            img: "~/app/images/party.jpg"
        },
        {
            id: 10,
            name: "Evento10",
            data: "27 de novembro",
            nomeBalada: "Balada10",
            enderecoBalada: "Rua Balada10, Curitiba",
            estilo: "Pop",
            descricao: "Descricao do Evento Descricao do Evento  Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento Descricao do Evento",
            img: "~/app/images/party.jpg"
        },
    );

    getBaladas(): Array<Balada> {
        return this.baladas;
    }

    getBalada(id: number): Balada {
        return this.baladas.filter((balada) => balada.id === id)[0];
    }

    getEventos(): Array<EventoReturn> {
        return this.eventoRetorno;
    }

    getEvento(id: number): EventoReturn {
        return this.eventoRetorno.filter((evento) => evento.id === id)[0];
    }
}
