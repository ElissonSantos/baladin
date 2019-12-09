import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { EventoDomain, EventoReturn } from './evento.controller';
import { log } from 'util';

@Injectable()
export class EventoService {

  list() {
    const connection = getConnection();
    const query = `SELECT * FROM baladin.eventos;`;
    log(query);

    return new Promise((resolve, reject) => {
      connection.query(query)
        .then(data => {
          resolve(data);
        });
    });
  }

  inserir(evento: EventoDomain) {
    const connection = getConnection();

    const query = `INSERT INTO baladin.eventos(nome, balada, data, descricao, estilo) VALUES ("${evento.nome}", ${evento.balada}, "${evento.data}", "${evento.descricao}", "${evento.estilo}");`;
    log(query);

    return new Promise((resolve, reject) => {
      connection.query(query)
        .then(data => {
          resolve(data);
        });
    });
  }

  update(evento: EventoDomain) {
    const connection = getConnection();
    const query = `UPDATE baladin.eventos SET eventos.nome = "${evento.nome}", eventos.balada = ${evento.balada}, eventos.data = "${evento.data}", eventos.descricao = "${evento.descricao}", eventos.estilo = "${evento.estilo}" WHERE eventos.id = ${evento.id};`;
    log(query);

    return new Promise((resolve, reject) => {
      connection.query(query)
        .then(data => {
          resolve(data);
        });
    });
  }

  delete(eventoId) {
    const connection = getConnection();
    const query = `DELETE FROM baladin.eventos WHERE eventos.id = ${eventoId};`;
    log(query);

    return new Promise((resolve, reject) => {
      connection.query(query)
        .then(data => {
          resolve(data);
        });
    });
  }

  async convert(eventos: any[]) {
    const connection = getConnection();
    const query = `SELECT * FROM baladin.baladas`;
    log(query);

    const baladas = await connection.query(query)
      .then(lista => {
        return lista;
      });

    return new Promise((resolve, reject) => {
      const eventosResources: EventoReturn[] = [];
      eventos.forEach((evento: EventoDomain) => {
        const eventoCompleto = {
          id: evento.id,
          nome: evento.nome,
          nomeBalada: baladas[evento.balada].nome,
          enderecoBalada: baladas[0].endereco,
          imgBalada: baladas[0].img,
          data: evento.data,
          descricao: evento.descricao,
          estilo: evento.estilo,
        };
        eventosResources.push(eventoCompleto);
      });
      resolve(eventosResources);
    });
  }
}
