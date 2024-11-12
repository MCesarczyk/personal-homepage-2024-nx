import { Test, TestingModule } from '@nestjs/testing';
import { JwtStrategy } from './jwt-strategy.service';
import { ConfigModule } from '@nestjs/config';

describe('JwtStrategyService', () => {
  let service: JwtStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [JwtStrategy],
    }).compile();

    service = module.get<JwtStrategy>(JwtStrategy);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
