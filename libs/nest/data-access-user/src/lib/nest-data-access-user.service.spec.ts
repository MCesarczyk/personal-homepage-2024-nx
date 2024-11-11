import { Test } from '@nestjs/testing';
import { NestPrismaClientModule } from '@ph24/nest/prisma-client';
import { NestDataAccessUserService } from './nest-data-access-user.service';

describe('NestDataAccessUserService', () => {
  let service: NestDataAccessUserService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [NestPrismaClientModule],
      providers: [NestDataAccessUserService],
    }).compile();

    service = module.get(NestDataAccessUserService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
