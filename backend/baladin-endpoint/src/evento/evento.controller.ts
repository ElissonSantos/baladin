import { Controller, Get, Post, Body, Response, HttpStatus, Put, Delete, Query } from '@nestjs/common';

import { EventoService } from './evento.service';

export interface EventoDomain {
  id?: number;
  nome: string;
  balada: number;
  data: string;
  descricao: string;
  estilo: string;
}

export interface EventoReturn {
  id?: number;
  nome: string;
  nomeBalada: string;
  enderecoBalada: string;
  imgBalada: string;
  data: string;
  descricao: string;
  estilo: string;
}

@Controller('eventos')
export class EventoController {

  constructor(private readonly eventoService: EventoService) { }

  @Post()
  inserir(@Body('evento') evento: EventoDomain, @Response() res) {
    evento = {
      nome: 'Inserido',
      balada: 2,
      data: '28/07/2013',
      descricao: 'Tal Tal tAL',
      estilo: 'Sertanejo',
    };
    this.eventoService.inserir(evento)
      .then(data => {
        res.status(HttpStatus.OK).send(data[0]);
      });
  }

  @Put()
  update(@Body('evento') evento, @Response() res) {
    evento = {
      id: 2,
      nome: 'Inserido Atualizado',
      balada: 3,
      data: '238/07/2013',
      descricao: 'Talsa Tal tAL',
      estilo: 'Pagode',
    };
    this.eventoService.update(evento)
      .then(data => {
        res.status(HttpStatus.OK).send(data[0]);
      });
  }

  @Delete()
  delete(@Query('eventoId') eventoId, @Response() res) {
    eventoId = 2;
    this.eventoService.delete(eventoId)
      .then(data => {
        res.status(HttpStatus.OK).send(data[0]);
      });
  }

  @Get()
  listar(@Response() res) {
    this.eventoService.list()
      .then((eventos: any[]) => {
        this.eventoService.convert(eventos)
          .then((lista: EventoReturn[]) => {
            res.status(HttpStatus.OK).send(lista);
          });
      });
  }
}
