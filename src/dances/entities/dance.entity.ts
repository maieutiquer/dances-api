import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  region: string;

  @Column({ default: true })
  isActive: boolean;
}
