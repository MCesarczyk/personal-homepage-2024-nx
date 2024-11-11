import { Test } from '@nestjs/testing';
import { NestDataAccessImageModule } from '@ph24/nest/data-access-image';
import { NestFeatureImageController } from './nest-feature-image.controller';
import { NestFeatureImageService } from './nest-feature-image.service';

describe('NestFeatureImageController', () => {
  let controller: NestFeatureImageController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [NestDataAccessImageModule],
      providers: [NestFeatureImageService],
      controllers: [NestFeatureImageController],
    }).compile();

    controller = module.get(NestFeatureImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
