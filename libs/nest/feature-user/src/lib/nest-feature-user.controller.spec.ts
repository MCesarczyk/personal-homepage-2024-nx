import { Test } from '@nestjs/testing';
import { NestDataAccessUserModule } from '@ph24/nest/data-access-user';
import { NestFeatureUserController } from './nest-feature-user.controller';
import { NestFeatureUserService } from './nest-feature-user.service';
import { usersArray } from './fixtures/users-array.fixture';
import { updatedUser } from './fixtures/updated-user.fixture';

describe('NestFeatureUserController', () => {
  let controller: NestFeatureUserController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [NestDataAccessUserModule],
      controllers: [NestFeatureUserController],
      providers: [NestFeatureUserService],
    }).compile();

    controller = module.get(NestFeatureUserController);
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should return added user', async () => {
    const result = usersArray[0];
    jest.spyOn(controller, 'create').mockResolvedValue(result);
    expect(await controller.create(usersArray[0])).toBe(result);
  });

  it('should return an array of users', async () => {
    const result = usersArray;
    jest.spyOn(controller, 'getAll').mockResolvedValue(result);
    expect(await controller.getAll()).toBe(result);
  });

  it('should return a user by id', async () => {
    const result = usersArray[0];
    jest.spyOn(controller, 'getOne').mockResolvedValue(result);
    expect(await controller.getOne('1')).toBe(result);
  });

  it('should return updated user', async () => {
    const result = updatedUser;
    jest.spyOn(controller, 'updateOne').mockResolvedValue(result);
    expect(await controller.updateOne('1', usersArray[0])).toBe(result);
  });

  it('should return deleted user', async () => {
    const result = usersArray[0];
    jest.spyOn(controller, 'deleteOne').mockResolvedValue(result);
    expect(await controller.deleteOne('1')).toBe(result);
  });
});
