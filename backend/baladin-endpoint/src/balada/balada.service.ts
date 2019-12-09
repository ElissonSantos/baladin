import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { log } from 'util';

import { Balada } from './balada.controller';

@Injectable()
export class BaladaService {

  read(id: number) {
    const connection = getConnection();
    const query = `SELECT * FROM baladin.baladas WHERE baladas.id = ${id};`;
    log(query);
    return new Promise((resolve, reject) => {
      connection.query(query)
        .then(data => {
          const balada: Balada = data[0];
          resolve(balada);
        });
    });
  }

  list() {
    const connection = getConnection();
    const query = `SELECT * FROM baladin.baladas;`;
    log(query);

    return new Promise((resolve, reject) => {
      connection.query(query)
        .then(data => {
          resolve(data);
        });
    });
  }
}
