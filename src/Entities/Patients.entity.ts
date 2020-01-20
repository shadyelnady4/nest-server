import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Patient {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  age: number;

  @Column()
  creationDate: Date;

}