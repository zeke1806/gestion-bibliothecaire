import { gql } from "@apollo/client"
import { apollo } from "./apollo"
import { LECTEUR_FRAG } from "./fragments"
import { Lecteur } from "./types"

interface LecteursData {
  lecteurs: Lecteur[];
}

const LECTEURS = gql`
  query {
    lecteurs {
      ...LecteurFrag
    }
  }
  ${LECTEUR_FRAG}
`

export const lecteurs = async () => {
  return apollo.query<LecteursData>({
    query: LECTEURS
  });
}