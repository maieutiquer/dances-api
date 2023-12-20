import { PartialType } from '@nestjs/mapped-types';
import { CreateDanceDto } from './create-dance.dto';

export class UpdateDanceDto extends PartialType(CreateDanceDto) {}
