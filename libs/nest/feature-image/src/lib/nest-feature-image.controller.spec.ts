import { Test } from '@nestjs/testing';
import { NestFeatureImageController } from './nest-feature-image.controller';
import { NestFeatureImageService } from './nest-feature-image.service';

describe('NestFeatureImageController', () => {
  let controller: NestFeatureImageController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NestFeatureImageService],
      controllers: [NestFeatureImageController],
    }).compile();

    controller = module.get(NestFeatureImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
