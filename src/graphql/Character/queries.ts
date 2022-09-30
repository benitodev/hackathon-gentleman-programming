import { gql } from "@apollo/client"; 

export const GET_ACTORS = gql`
query GetActors($page: Int, $filter: FilterCharacter){
    characters(page: $page, filter: $filter) {
        results {
            id
            name
            species
            image
            created
          	origin {
            	type
          	    name
          	}
        }
        info {
            next
        }
    }
}
`

export const GET_EPISODES_THAT_APPEAR = gql`
query GetEpisodesThatAppearActor($id: ID!) {
    character(id: $id) {
      episode {
        id
        name
        episode
        air_date
      }
    }
  }
`