import { Controller } from '@nestjs/common';
import { NestFeatureAuthService } from './nest-feature-auth.service';

@Controller('nest-feature-auth')
export class NestFeatureAuthController {
  constructor(private nestFeatureAuthService: NestFeatureAuthService) {}
}
