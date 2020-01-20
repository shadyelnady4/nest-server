import { Column, Entity, ObjectID, ObjectIdColumn, BaseEntity } from 'typeorm';
import { Field, ObjectType , ID, Int } from 'type-graphql';

@Entity()
@ObjectType()
export class Patient extends BaseEntity {
  @ObjectIdColumn()
  @Field(type => ID)
  id: ObjectID;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  gender: string;

  @Column()
  @Field(() => Int)
  age: number;

  @Column()
  @Field()
  creationDate: Date;

}