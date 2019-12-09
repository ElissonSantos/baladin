import { Injectable } from '@nestjs/common';

import { getConnection } from 'typeorm';
import { User } from './users.controller';
import { log } from 'util';

@Injectable()
export class UsersService {

  logar(email: string, senha: string) {
    const connection = getConnection();
    const query = `SELECT * FROM baladin.users WHERE users.email = "${email}" AND users.senha = "${senha}";`;
    log(query);

    return new Promise((resolve, reject) => {
      connection.query(query)
        .then(data => {
          resolve(data);
        });
    });
  }

  inserir(user: User) {
    const connection = getConnection();
    const query = `INSERT INTO baladin.users(nome, email, senha, admin) VALUES ("${user.nome}", "${user.email}", "${user.senha}", false);`;
    log(query);

    return new Promise((resolve, reject) => {
      connection.query(query)
        .then(data => {
          resolve(data);
        });
    });
  }

  update(user: User) {
    const connection = getConnection();
    const query = `UPDATE baladin.users SET users.nome = "${user.nome}", users.senha = "${user.senha}" WHERE users.id = ${user.id};`;
    log(query);

    return new Promise((resolve, reject) => {
      connection.query(query)
        .then(data => {
          resolve(data);
        });
    });
  }
}
