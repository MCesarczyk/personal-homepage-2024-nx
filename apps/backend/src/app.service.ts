import { Injectable } from '@nestjs/common';

const frontendPort = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : process.env.FRONTEND_URL;
const backendPort = process.env.NODE_ENV === 'production' ? process.env.PRODUCTION_URL : process.env.DEVELOPMENT_URL;
const withoutProtocol = (url: string) => url?.replace('http://', '')?.replace('https://', '');

@Injectable()
export class AppService {
  getHello(): string {
    return `<h1>Backend for <a href="${frontendPort}" >${withoutProtocol(frontendPort)}</a> portfolio up and running 🚀</h1>\
    <p><h3>Docs available at <a href="${backendPort}/docs" >${withoutProtocol(backendPort)}/docs</a></h3></p>`
  }
}
