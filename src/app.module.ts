import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { PrismaModule } from 'nestjs-prisma';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [TicketsModule, PrismaModule.forRoot({isGlobal: true}), BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
