import { Test, TestingModule } from '@nestjs/testing';
import { UsersaController } from './usersa.controller';
import { UsersaService } from './usersa.service';

describe('UsersaController', () => {
  let controller: UsersaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersaController],
      providers: [UsersaService],
    }).compile();

    controller = module.get<UsersaController>(UsersaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
