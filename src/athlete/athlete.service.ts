import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AthleteService {
  constructor(private readonly prisma: PrismaClient) {}

  findAll() {
    return this.prisma.athlete.findMany();
  }

  async findOne(id: string) {
    const athlete = await this.prisma.athlete.findUnique({
      where: { id },
    });

    if (!athlete) {
      throw new HttpException('Athlete not found!', HttpStatus.NOT_FOUND);
    }

    return athlete;
  }
}
