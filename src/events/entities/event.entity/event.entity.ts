import { Entity } from 'typeorm';
import { PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  type: string = '';

  @Index()
  @Column()
  name: string = '';

  @Column('json')
  payload: Record<string, any> = {};
}
