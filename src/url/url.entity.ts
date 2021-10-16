import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Url {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  redirect: string;

  @Column()
  shortUrl: string;

  @Column({ unique: true })
  urlCode: string;
}
