import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class PopulationService {
  private populationApiBaseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.populationApiBaseUrl = this.configService.get<string>(
      'populationApiBaseUrl',
    );
  }

  async getPopulation(country: string): Promise<any> {
    const url = `${this.populationApiBaseUrl}`;

    try {
      const { data } = await lastValueFrom(
        this.httpService.post(url, { country }),
      );

      if (!data?.data?.populationCounts) {
        throw new HttpException(
          'Population data not found for the country',
          HttpStatus.BAD_REQUEST,
        );
      }

      return data.data.populationCounts;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Failed to fetch population data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
