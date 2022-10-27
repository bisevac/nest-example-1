import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column({ default: 0 })
  isDeleted: number;

  @Column()
  atCreated: Date;

  @Column()
  atUpdated: Date;
}
