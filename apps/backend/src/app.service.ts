import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return process.env.NODE_ENV === 'production'
      ? '<h1>Backend for <a href="https://cesarczyk.dev" >cesarczyk.dev</a> portfolio up and running 🚀</h1>\
    <p><h3>Docs available at <a href="https://personal-homepage-2024-backend-production.up.railway.app/docs" >https://personal-homepage-2024-backend-production.up.railway.app/docs</a></h3></p>'
      : `<h1>Backend for <a href="https://cesarczyk.dev" >cesarczyk.dev</a> portfolio up and running 🚀</h1>\
    <p><h3>Docs available at <a href="http://localhost:${process.env.PORT}/docs" >http://localhost:${process.env.PORT}/docs</a></h3></p>`;
  }
}
