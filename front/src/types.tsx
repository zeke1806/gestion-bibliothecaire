export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  "lecteur-stack": undefined;
  "livre-stack": undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
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
