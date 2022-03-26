import { Module } from '@nestjs/common';
import { AthleteModule } from 'athlete/athlete.module';
import { CoachModule } from 'coach/coach.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AthleteModule, CoachModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
