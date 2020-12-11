export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export interface ILecteur {
  idLecteur: number;
  nom: string;
}

export type IFormLecteur = Omit<ILecteur, "idLecteur">;

export interface ILivre {
  idLivre: number;
  design: string;
  auteur: string;
  dateEdition: string;
  disponible: boolean;
}

export type IFormLivre = Omit<ILivre, "idLivre">;
