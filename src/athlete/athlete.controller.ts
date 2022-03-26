import { Controller, Get, Param } from '@nestjs/common';
import { AthleteService } from './athlete.service';

@Controller('athletes')
export class AthleteController {
  constructor(private readonly service: AthleteService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
