import { Test } from '@nestjs/testing';
import { BackendFeatureSkillController } from './backend-feature-skill.controller';
import { BackendFeatureSkillService } from './backend-feature-skill.service';

describe('BackendFeatureSkillController', () => {
  let controller: BackendFeatureSkillController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendFeatureSkillService],
      controllers: [BackendFeatureSkillController],
    }).compile();

    controller = module.get(BackendFeatureSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
