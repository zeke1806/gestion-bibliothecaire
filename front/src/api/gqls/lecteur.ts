import { gql } from "@apollo/client"
import { LECTEUR_FRAG } from "../fragments"
import { Lecteur } from "../types"

// Lecteurs

export interface LecteursData {
  lecteurs: Lecteur[];
}

export const LECTEURS = gql`
  query {
    lecteurs {
      ...LecteurFrag
    }
  }
  ${LECTEUR_FRAG}
`;

// Add lecteur

export interface AddLecteurData {
  addLecteur: Lecteur;
}

export const ADD_LECTEUR = gql`
  mutation AddLecteur($nom: String!) {
    addLecteur(nom: $nom) {
      ...LecteurFrag
    }
  }
  ${LECTEUR_FRAG}
`;

// Del lecteur

export interface DelLecteurData {
  delLecteur: boolean;
}

export const DEL_LECTEUR = gql`
  mutation DelLecteur($id: String!) {
    delLecteur(id: $id)
  }
`;

// Update lecteur

export interface UpdateLecteurData {
  updateLecteur: Lecteur;
}

export const UPDATE_LECTEUR = gql`
  mutation UpdateLecteur($id: String!, $nom: String!) {
    updateLecteur(id: $id, nom: $nom) {
      ...LecteurFrag
    }
  }
  ${LECTEUR_FRAG}
`;