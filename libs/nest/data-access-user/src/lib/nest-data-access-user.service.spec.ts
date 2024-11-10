import { Test } from '@nestjs/testing';
import { NestDataAccessUserService } from './nest-data-access-user.service';

describe('NestDataAccessUserService', () => {
  let service: NestDataAccessUserService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NestDataAccessUserService],
    }).compile();

    service = module.get(NestDataAccessUserService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
