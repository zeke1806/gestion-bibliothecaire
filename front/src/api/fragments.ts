import { gql } from '@apollo/client';

export const LIVRE_FRAG = gql`
  fragment LivreFrag on Livre {
    id
    design
    auteur
    dateEdition
    disponible
    nbPret
  }
`

export const PRET_FRAG = gql`
  fragment PretFrag on Pret {
    id
    datePret
    livre {
      ...LivreFrag
    }
  }
  ${LIVRE_FRAG}
`

export const LECTEUR_FRAG = gql`
  fragment LecteurFrag on Lecteur {
    id
    nom
    prets {
      ...PretFrag
    }
  }
  ${PRET_FRAG}
`