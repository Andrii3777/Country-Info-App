import { Module } from '@nestjs/common';
import { CountryService } from './services/country.service';
import { CountryController } from './country.controller';
import { HttpModule } from '@nestjs/axios';
import { PopulationService } from './services/population.service';
import { FlagService } from './services/flag.service';

@Module({
  imports: [HttpModule],
  providers: [CountryService, PopulationService, FlagService],
  controllers: [CountryController],
})
export class CountryModule {}
