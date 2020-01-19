import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Sample {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  volume: number;
}
