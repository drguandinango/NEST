import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersaDto } from './create-usersa.dto';

export class UpdateUsersaDto extends PartialType(CreateUsersaDto) {}
