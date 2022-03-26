import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CoachService {
  constructor(private readonly prisma: PrismaClient) {}

  findAll() {
    return this.prisma.coach.findMany();
  }

  async findOne(id: string) {
    const coach = await this.prisma.coach.findUnique({
      where: { id },
    });

    if (!coach) {
      throw new HttpException('Coach not found!', HttpStatus.NOT_FOUND);
    }

    return coach;
  }
}
