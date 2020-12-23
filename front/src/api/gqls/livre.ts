import { gql } from "@apollo/client";
import { LIVRE_FRAG } from "../fragments";
import { Livre } from "../types";

// Livres

export interface LivresData {
  livres: Livre[];
}

export const LIVRES = gql`
  query {
    livres {
      ...LivreFrag
    }
  }
  ${LIVRE_FRAG}
`;

// Add livre

export interface AddLivreData {
  addLivre: Livre;
}

export const ADD_LIVRE = gql`
  mutation AddLivre($input: LivreInput!) {
    addLivre(input: $input) {
      ...LivreFrag
    }
  }
  ${LIVRE_FRAG}
`;

// Del livre

export interface DelLivreData {
  delLivre: boolean;
}

export const DEL_LIVRE = gql`
  mutation DelLivre($id: String!) {
    delLivre(id: $id)
  }
`;

// Update Livre

export interface UpdateLivreData {
  updateLivre: Livre;
}

export const UPDATE_LIVRE = gql`
  mutation UpdateLivre($id: String!, $input: LivreInput!) {
    updateLivre(id: $id, input: $input) {
      ...LivreFrag
    }
  }
  ${LIVRE_FRAG}
`;
