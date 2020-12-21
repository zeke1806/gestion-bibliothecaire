import { gql } from '@apollo/client';
import { PRET_FRAG } from '../fragments';
import { Pret } from '../types';

// Add pret

export interface AddPretData {
  addPret: Pret;
}

export const ADD_PRET = gql`
  mutation AddPret ($input: PretInput!) {
    addPret (input: $input) {
      ...PretFrag
    }
  }
  ${PRET_FRAG}
`;

// Del pret

export interface DelPretData {
  delPret: Boolean;
}

export const DEL_PRET = gql`
  mutation DelPret ($id: String!) {
    delPret (id: $id)
  }
`;