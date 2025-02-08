import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class FlagService {
  private flagApiBaseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.flagApiBaseUrl = this.configService.get<string>('flagApiBaseUrl');
  }

  async getFlag(country: string): Promise<any> {
    const url = `${this.flagApiBaseUrl}`;

    try {
      const { data } = await lastValueFrom(
        this.httpService.post(url, { country }),
      );

      if (!data?.data?.flag) {
        throw new HttpException(
          'Flag not found for the country',
          HttpStatus.BAD_REQUEST,
        );
      }

      return data.data.flag;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Failed to fetch country flag',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
