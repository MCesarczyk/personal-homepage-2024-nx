import { Injectable, NotFoundException } from '@nestjs/common';
import { NestDataAccessImageService } from '@ph24/nest/data-access-image';
import { IImage } from '@ph24/shared/domain';

@Injectable()
export class NestFeatureImageService {
  constructor(private imageRepository: NestDataAccessImageService) { }

  async create(data: Omit<IImage, 'id'>): Promise<IImage> {
    return await this.imageRepository.create(data);
  }

  async getAll(): Promise<IImage[]> {
    return await this.imageRepository.findAll();
  }

  async getOne(id: string): Promise<IImage | null> {
    const image = await this.imageRepository.findOne(id);
    if (!image) {
      throw new NotFoundException(`Image with id ${id} not found`);
    }
    return image;
  }

  async updateOne(id: string, data: Partial<IImage>): Promise<IImage | null> {
    const awaitedImage = await this.getOne(id);
    if (!awaitedImage) {
      throw new NotFoundException(`Image with id ${id} not found`);
    }
    return await this.imageRepository.update(id, data);
  }

  async deleteOne(id: string): Promise<IImage | null> {
    const awaitedImage = await this.getOne(id);
    if (!awaitedImage) {
      throw new NotFoundException(`Image with id ${id} not found`);
    }
    return await this.imageRepository.remove(id);
  }
}
