import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "livre" })
export class LivreEntity {
  @PrimaryGeneratedColumn({ name: 'num_livre' })
  numLivre: number; 

  @Column({unique: true})
  design: string;

  @Column()
  auteur: string;

  @Column({ name: 'date_edition', type: 'datetime' })
  dateEdition: Date

  @Column()
  disponible: boolean
}
