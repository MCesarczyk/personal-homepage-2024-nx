import { Test } from '@nestjs/testing';
import { NestDataAccessProjectService } from './nest-data-access-project.service';

describe('NestDataAccessProjectService', () => {
  let service: NestDataAccessProjectService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NestDataAccessProjectService],
    }).compile();

    service = module.get(NestDataAccessProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
