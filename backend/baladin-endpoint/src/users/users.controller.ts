import { Controller, Get, Put, Post, Body, Response, Query, HttpStatus } from '@nestjs/common';

import { UsersService } from './users.service';
import { log } from 'util';

export interface User {
  id?: number;
  nome: string;
  email: string;
  senha: string;
}

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @Post()
  inserir(@Body('user') user, @Response() res) {
    this.usersService.inserir(user)
      .then(data => {
        res.status(HttpStatus.OK).send(data[0]);
      });
  }

  @Put()
  update(@Body('user') user, @Response() res) {
    this.usersService.update(user)
      .then(data => {
        res.status(HttpStatus.OK).send(data[0]);
      });
  }

  @Get()
  listar(@Query('email') email, @Query('senha') senha, @Response() res) {
    log(email);
    log(senha);
    this.usersService.logar(email, senha)
      .then(data => {
        res.status(HttpStatus.OK).send(data[0]);
      });
  }
}
