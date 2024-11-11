import { Test } from '@nestjs/testing';
import { NestPrismaClientModule } from '@ph24/nest/prisma-client';
import { NestDataAccessImageService } from './nest-data-access-image.service';

describe('NestDataAccessImageService', () => {
  let service: NestDataAccessImageService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [NestPrismaClientModule],
      providers: [NestDataAccessImageService],
    }).compile();

    service = module.get(NestDataAccessImageService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
