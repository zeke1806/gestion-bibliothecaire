import { getRepository, Repository } from "typeorm";
import { LecteurEntity } from "./lecteur.entity";

export class LecteurService {
  private lecteurRepository: Repository<LecteurEntity>;

  constructor() {
    this.lecteurRepository = getRepository(LecteurEntity)
  }

  getById(id: number) {
    return this.lecteurRepository.findOne(id)
  }

  save(lecteur: LecteurEntity) {
    return this.lecteurRepository.save(lecteur)
  }

  getAll() {
    return this.lecteurRepository.find()
  }

  delOne(lecteur: LecteurEntity) {
    return this.lecteurRepository.remove(lecteur)
  }
}