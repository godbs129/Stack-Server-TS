import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';

@Entity('user')
export default class User {
  @PrimaryColumn({
    length: 255,
    nullable: false,
  })
  id!: string;

  @Column({
    length: 255,
    nullable: false,
  })
  pw!: string;

  @Column({
    length: 10,
    nullable: false,
  })
  name!: string;

  @Column({
    nullable: false,
  })
  number!: number;

  @Column()
  salt!: string;
}