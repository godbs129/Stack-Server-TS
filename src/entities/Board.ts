import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from './User';

@Entity('board')
export default class Board {
  @PrimaryGeneratedColumn()
  idx!: number;

  @Column({
    length: 255,
    nullable: false,
  })
  title!: string;

  @Column({
    length: 255,
    nullable: false,
  })
  content!: string;

  @ManyToOne(type => User, { onDelete: "SET NULL" })
  @JoinColumn({ name: "fk_user_id" })
  user!: User;

  @Column({
    length: 255,
    nullable: true,
  })
  fk_user_id!: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at!: Date;
}