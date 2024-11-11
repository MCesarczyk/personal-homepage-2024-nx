import { Test } from '@nestjs/testing';
import { NestFeatureUserController } from './nest-feature-user.controller';
import { NestFeatureUserService } from './nest-feature-user.service';

describe('NestFeatureUserController', () => {
  let controller: NestFeatureUserController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NestFeatureUserService],
      controllers: [NestFeatureUserController],
    }).compile();

    controller = module.get(NestFeatureUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
