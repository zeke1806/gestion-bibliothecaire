import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { LecteurEntity } from "../lecteur/lecteur.entity";
import { LivreEntity } from "../livre/livre.entity";

@Entity({ name: "pret" })
export class PretEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({name: 'date_pret'})
  datePret: Date;

  @ManyToOne(() => LecteurEntity, { onDelete: 'CASCADE' })
  @JoinColumn({name: 'lecteur'})
  lecteur: LecteurEntity;
  @RelationId((pret: PretEntity) => pret.lecteur)
  lecteurId: number;

  @ManyToOne(() => LivreEntity, { onDelete: 'CASCADE' })
  @JoinColumn({name: 'livre'})
  livre: LivreEntity
  @RelationId((pret: PretEntity) => pret.livre)
  livreId: number;

}
