import { Test } from '@nestjs/testing';
import { NestDataAccessProjectModule } from '@ph24/nest/data-access-project';
import { NestFeatureProjectController } from './nest-feature-project.controller';
import { NestFeatureProjectService } from './nest-feature-project.service';

describe('NestFeatureProjectController', () => {
  let controller: NestFeatureProjectController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [NestDataAccessProjectModule],
      providers: [NestFeatureProjectService],
      controllers: [NestFeatureProjectController],
    }).compile();

    controller = module.get(NestFeatureProjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
