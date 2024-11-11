import { Test } from '@nestjs/testing';
import { NestPrismaClientModule } from '@ph24/nest/prisma-client';
import { NestDataAccessProjectService } from './nest-data-access-project.service';

describe('NestDataAccessProjectService', () => {
  let service: NestDataAccessProjectService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [NestPrismaClientModule],
      providers: [NestDataAccessProjectService],
    }).compile();

    service = module.get(NestDataAccessProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
