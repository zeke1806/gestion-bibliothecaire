import { getRepository, Repository } from "typeorm";
import { LivreEntity } from "./livre.entity";

export class LivreService {
  private livreRepository: Repository<LivreEntity>;

  constructor() {
    this.livreRepository = getRepository(LivreEntity)
  }

  getById(id: number) {
    return this.livreRepository.findOne(id)
  }

  save(livre: LivreEntity) {
    return this.livreRepository.save(livre)
  }

  getAll() {
    return this.livreRepository.find()
  }

  delOne(livre: LivreEntity) {
    return this.livreRepository.remove(livre)
  }
}