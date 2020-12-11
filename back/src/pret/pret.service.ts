import { getRepository, Repository } from "typeorm";
import { LecteurEntity } from "../lecteur/lecteur.entity";
import { LivreEntity } from "../livre/livre.entity";
import { Livre } from "../types";
import { PretEntity } from "./pret.entity";

export class PretService {
  private pretRepository: Repository<PretEntity>;

  constructor() {
    this.pretRepository = getRepository(PretEntity)
  }

  getById(id: number) {
    return this.pretRepository.findOne(id)
  }

  findByLivre(livre: LivreEntity) {
    return this.pretRepository.find({where: { livre }})
  }

  findByLecteur(lecteur: LecteurEntity) {
    return this.pretRepository.find({where: { lecteur }})
  }

  save(pret: PretEntity) {
    return this.pretRepository.save(pret)
  }

  getAll() {
    return this.pretRepository.find()
  }

  delOne(pret: PretEntity) {
    return this.pretRepository.remove(pret)
  }
}