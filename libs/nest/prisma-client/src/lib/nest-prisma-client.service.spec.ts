import { Test } from '@nestjs/testing';
import { NestPrismaClientService } from './nest-prisma-client.service';

describe('NestPrismaClientService', () => {
  let service: NestPrismaClientService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NestPrismaClientService],
    }).compile();

    service = module.get(NestPrismaClientService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
