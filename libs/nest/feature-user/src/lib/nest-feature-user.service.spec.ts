import { Test } from '@nestjs/testing';
import { NestDataAccessUserModule } from '@ph24/nest/data-access-user';
import { NestFeatureUserService } from './nest-feature-user.service';
import { usersArray } from './fixtures/users-array.fixture';
import { updatedUser } from './fixtures/updated-user.fixture';
import { NotFoundException } from '@nestjs/common';

describe('NestFeatureUserService', () => {
  let service: NestFeatureUserService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [NestDataAccessUserModule],
      providers: [NestFeatureUserService],
    }).compile();

    service = module.get(NestFeatureUserService);
  });

  it('should create an user', async () => {
    const result = usersArray[0];
    jest.spyOn(service, 'create').mockResolvedValue(result);
    expect(await service.create(usersArray[0])).toStrictEqual(result);
    expect(service.create).toHaveBeenCalledWith(usersArray[0]);
  });

  it('should return users array', async () => {
    const result = usersArray;
    jest.spyOn(service, 'getAll').mockResolvedValue(result);
    expect((await service.getAll()).length).toBe(result.length);
    expect(service.getAll).toHaveBeenCalled();
  });

  it('should return a user by id', async () => {
    const result = usersArray[0];
    jest.spyOn(service, 'getOne').mockResolvedValue(result);
    expect(await service.getOne(usersArray[0].id)).toStrictEqual(result);
    expect(service.getOne).toHaveBeenCalledWith(usersArray[0].id);
  });

  it('should throw and exception when a user id is not found', async () => {
    jest.spyOn(service, 'getOne').mockResolvedValue(null);
    try {
      await service.getOne('8');
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
      expect(service.getOne).toHaveBeenCalledWith('8');
    }
  });

  it('should update an user', async () => {
    const result = updatedUser;
    jest.spyOn(service, 'updateOne').mockResolvedValue(result);
    expect(await service.updateOne('1', updatedUser)).toStrictEqual(result);
    expect(service.updateOne).toHaveBeenCalledWith('1', updatedUser);
  });

  it('should return deleted user', async () => {
    const result = usersArray[0];
    jest.spyOn(service, 'deleteOne').mockResolvedValue(result);
    expect(await service.deleteOne('1')).toStrictEqual(result);
    expect(service.deleteOne).toHaveBeenCalledWith('1');
  });
});
