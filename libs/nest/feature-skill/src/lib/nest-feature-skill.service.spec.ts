import { Test } from '@nestjs/testing';
import { NestDataAccessSkillModule } from '@ph24/nest/data-access-skill';
import { NestFeatureSkillService } from './nest-feature-skill.service';

describe('NestFeatureSkillService', () => {
  let service: NestFeatureSkillService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [NestDataAccessSkillModule],
      providers: [NestFeatureSkillService],
    }).compile();

    service = module.get(NestFeatureSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
