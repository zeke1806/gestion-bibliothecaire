import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "livre" })
export class LivreEntity {
  @PrimaryGeneratedColumn()
  numLivre: number;

  @Column()
  design: string;

  @Column()
  auteur: string;

  @Column()
  dateEdition: Date

  @Column()
  disponible: boolean
}
