import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { FlagService } from './flag.service';
import { PopulationService } from './population.service';

@Injectable()
export class CountryService {
  private countryApiBaseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly flagService: FlagService,
    private readonly populationService: PopulationService,
  ) {
    this.countryApiBaseUrl =
      this.configService.get<string>('countryApiBaseUrl');
  }

  async getAvailableCountries(): Promise<any> {
    const url = `${this.countryApiBaseUrl}/AvailableCountries`;

    try {
      const { data } = await lastValueFrom(this.httpService.get(url));

      if (!data) {
        throw new HttpException(
          'No data received from API',
          HttpStatus.BAD_REQUEST,
        );
      }

      return data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Failed to fetch available countries',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getCountryInfo(countryCode: string): Promise<any> {
    const url = `${this.countryApiBaseUrl}/CountryInfo/${countryCode}`;

    try {
      const { data } = await lastValueFrom(this.httpService.get(url));

      if (!data) {
        throw new HttpException(
          'No data received for the country',
          HttpStatus.BAD_REQUEST,
        );
      }

      const countryName = data.commonName;
      const flag = await this.flagService.getFlag(countryName);
      const population =
        await this.populationService.getPopulation(countryName);
      const borders = data.borders || [];

      return {
        countryName,
        borders,
        population,
        flag,
      };
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Failed to fetch country info',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
