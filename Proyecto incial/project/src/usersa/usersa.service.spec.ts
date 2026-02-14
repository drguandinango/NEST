import { Test, TestingModule } from '@nestjs/testing';
import { UsersaService } from './usersa.service';

describe('UsersaService', () => {
  let service: UsersaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersaService],
    }).compile();

    service = module.get<UsersaService>(UsersaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
