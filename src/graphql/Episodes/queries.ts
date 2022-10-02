import { gql } from '@apollo/client'
import { GetCharactersFromEpisodeDocument } from '../../generated/graphql'
export const GET_EPISODES = gql`
  query GetEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      results {
        id
        name
        episode
        air_date
      }
      info {
        next
      }
    }
  }
`

export const GET_CHARACTERS_FORM_EPISODE = gql`
  query GetCharactersFromEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      episode
      characters {
        id
        name
        species
        gender
        image
      }
    }
  }
`

export const GET_SEASONS_AND_EPISODES = gql`
  query GetSeasonsAndEpisodes($page: Int) {
    episodes(page: $page) {
      results {
        episode
      }
      info {
        count
        pages
        next
      }
    }
  }
`
