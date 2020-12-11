import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "lecteur" })
export class LecteurEntity {
  @PrimaryGeneratedColumn({name: 'num_lecteur'})
  numLecteur: number;

  @Column()
  nom: string;
}
