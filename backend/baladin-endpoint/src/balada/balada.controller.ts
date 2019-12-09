import { Controller, Get, Response, HttpStatus } from '@nestjs/common';

import { BaladaService } from './balada.service';

export interface Balada {
  id?: number;
  nome: string;
  endereco: string;
  img: string;
}

@Controller('baladas')
export class BaladaController {

  constructor(private readonly baladaService: BaladaService) {}

  @Get()
  list(@Response() res) {
    return this.baladaService.list()
      .then(data => {
        res.status(HttpStatus.OK).send(data);
      });
  }
}
