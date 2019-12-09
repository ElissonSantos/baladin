import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BaladaController } from './balada/balada.controller';
import { BaladaService } from './balada/balada.service';
import { EventoController } from './evento/evento.controller';
import { UsersController } from './users/users.controller';
import { EventoService } from './evento/evento.service';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'unicuritiba',
      synchronize: true,
      insecureAuth: true,
    }),
  ],
  controllers: [
    BaladaController,
    EventoController,
    UsersController,
  ],
  providers: [
    BaladaService,
    EventoService,
    UsersService,
  ],
})
export class AppModule {}
