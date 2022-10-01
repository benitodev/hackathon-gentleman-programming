import { Box, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import CharacterGridList from "../components/character/CharacterGridList"
import BaseGridList, { GenericObject } from "../components/grid/BaseGridList"
import { useGetCharactersFromEpisodeQuery } from "../generated/graphql"
import { GET_CHARACTERS_FORM_EPISODE } from "../graphql/Episodes/queries"

//The Characters from a episode
const CharactersFromEpisode = () => {
  const { episodeId } = useParams()

  const { data, loading, error } = useGetCharactersFromEpisodeQuery({
    query: GET_CHARACTERS_FORM_EPISODE,
    variables: {
      id: String(episodeId)
    }
  })

  const episodeResponse = data?.episode
  const episodeCharacters = episodeResponse?.characters as GenericObject[]
  return (
    <Box component='div' alignItems='center' sx={{
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '40px',
      paddingTop:{md:'4rem'}
    }}>
      {
        typeof episodeResponse === 'object' ?
          <CharacterGridList charactersList={episodeCharacters} episode={{ id: episodeResponse?.id, episode: episodeResponse?.episode, name: episodeResponse?.name }} loading={loading} />
          :
          <Typography>Loading</Typography>
      }
    </Box>
  )
}

export default CharactersFromEpisode