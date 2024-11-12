import { Test } from '@nestjs/testing';
import { JwtModule } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { randPassword } from '@ngneat/falso';
import { IUser } from '@ph24/shared/domain';
import { NestFeatureUserService } from '@ph24/nest/feature-user';
import { NestFeatureAuthController } from './nest-feature-auth.controller';
import { NestFeatureAuthService } from './nest-feature-auth.service';
import { createMockUser } from '@ph24/shared/util-testing';
import { BadRequestException } from '@nestjs/common';

describe('NestFeatureAuthController', () => {
  let controller: NestFeatureAuthController;
  let mockUser: IUser;
  let mockUserUnhashedPassword: string;

  beforeAll(async () => {
    mockUser = createMockUser();
    mockUserUnhashedPassword = mockUser.password;
    mockUser.password = await bcrypt.hash(mockUserUnhashedPassword, 10);
  });

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: randPassword(),
        }),
      ],
      providers: [
        NestFeatureAuthService,
        {
          provide: NestFeatureUserService,
          useValue: {
            getOneByEmail: jest.fn(async (email) => {
              if (email !== mockUser.email) {
                return null;
              }
              return mockUser;
            }),
          },
        },
      ],
      controllers: [NestFeatureAuthController],
    }).compile();

    controller = module.get(NestFeatureAuthController);
  });

  it('should login a user', async () => {
    const res = await controller.login({
      email: mockUser.email,
      password: mockUserUnhashedPassword,
    });
    expect(res.access_token).toBeDefined();
    expect(typeof res.access_token).toBe('string');
  });

  it('should throw with a bad email', async () => {
    try {
      await controller.login({
        email: '',
        password: '',
      });
    } catch (err) {
      expect(err).toBeInstanceOf(BadRequestException);
    }
  });
});
