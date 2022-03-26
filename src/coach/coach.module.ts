import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CoachController } from './coach.controller';
import { CoachService } from './coach.service';

@Module({
  imports: [],
  controllers: [CoachController],
  providers: [CoachService, PrismaClient],
})
export class CoachModule {}
