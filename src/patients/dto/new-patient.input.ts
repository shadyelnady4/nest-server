import { 
  IsOptional,
  Length,
  MaxLength
} from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class NewPatientInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  @IsOptional()
  @Length(1, 255)
  gender: string;

  @Field()
  age: number;
}
