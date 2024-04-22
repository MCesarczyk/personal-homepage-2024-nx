import { Injectable } from '@nestjs/common';

const port = process.env.NODE_ENV === 'production' ? process.env.PRODUCTION_URL : process.env.PORT;

@Injectable()
export class AppService {
  getHello(): string {
    return `<h1>Backend for <a href="https://cesarczyk.dev" >cesarczyk.dev</a> portfolio up and running 🚀</h1>\
    <p><h3>Docs available at <a href="${port}/docs" >${port}/docs</a></h3></p>`
  }
}
