import { Injectable } from '@angular/core';

@Injectable()
export class UrlConfigurationService {

  public static config = { protocol: 'http', host: '127.0.0.1', port: '3000', entry: 'api' }
  public static BASE_URL = `${UrlConfigurationService.config.protocol}://${UrlConfigurationService.config.host}:${UrlConfigurationService.config.port}/${UrlConfigurationService.config.entry}`;

}