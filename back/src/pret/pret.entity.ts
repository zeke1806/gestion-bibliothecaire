import { Column, Entity, JoinColumn, ManyToOne, RelationId } from "typeorm";
import { LecteurEntity } from "../lecteur/lecteur.entity";
import { LivreEntity } from "../livre/livre.entity";

@Entity({ name: "pret" })
export class PretEntity {
  @ManyToOne(() => LecteurEntity, {primary: true})
  @JoinColumn({name: 'lecteur'})
  lecteur: LecteurEntity;
  @RelationId((pret: PretEntity) => pret.lecteur)
  lecteurId: number;

  @ManyToOne(() => LivreEntity, {primary: true})
  @JoinColumn({name: 'livre'})
  livre: LivreEntity
  @RelationId((pret: PretEntity) => pret.livre)
  livreId: number;

  @Column()
  datePret: Date;
}
