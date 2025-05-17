import { OmitType } from '@nestjs/swagger';

import { Image } from '../entities/image.entity';

export class CreateImageDto extends OmitType(Image, ['id']) { }
