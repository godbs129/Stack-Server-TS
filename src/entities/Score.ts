import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from './User';

@Entity('score')
export default class Score {
  @PrimaryGeneratedColumn()
  idx!: number;

  /**
   * 상벌점
   * 0 -> 상점
   * 1 -> 벌점
   */
  @Column({
    nullable: false,
  })
  type!: number;

  @Column({
    nullable: false,
  })
  score!: number;

  @Column({
    length: 255,
    nullable: false,
  })
  reason!: string;

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