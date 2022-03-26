import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AthleteController } from './athlete.controller';
import { AthleteService } from './athlete.service';

@Module({
  imports: [],
  controllers: [AthleteController],
  providers: [AthleteService, PrismaClient],
})
export class AthleteModule {}
