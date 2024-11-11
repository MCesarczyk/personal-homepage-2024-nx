import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateImageDto, Image, NestDataAccessImageService, UpdateImageDto } from '@ph24/nest/data-access-image';

@Injectable()
export class NestFeatureImageService {
  constructor(private imageRepository: NestDataAccessImageService) { }

  async create(data: CreateImageDto): Promise<Image> {
    return await this.imageRepository.create(data);
  }

  async getAll(): Promise<Image[]> {
    return await this.imageRepository.findAll();
  }

  async getOne(id: string): Promise<Image | null> {
    const image = await this.imageRepository.findOne(id);
    if (!image) {
      throw new NotFoundException(`Image with id ${id} not found`);
    }
    return image;
  }

  async updateOne(id: string, data: UpdateImageDto): Promise<Image | null> {
    const awaitedImage = await this.getOne(id);
    if (!awaitedImage) {
      throw new NotFoundException(`Image with id ${id} not found`);
    }
    return await this.imageRepository.update(id, data);
  }

  async deleteOne(id: string): Promise<Image | null> {
    const awaitedImage = await this.getOne(id);
    if (!awaitedImage) {
      throw new NotFoundException(`Image with id ${id} not found`);
    }
    return await this.imageRepository.remove(id);
  }
}
