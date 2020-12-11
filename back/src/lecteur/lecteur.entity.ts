import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "lecteur" })
export class LecteurEntity {
  @PrimaryGeneratedColumn()
  numLecteur: number;

  @Column()
  nom: string;
}
