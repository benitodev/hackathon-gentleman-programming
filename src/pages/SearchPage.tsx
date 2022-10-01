import { useEffect, useRef, useState } from 'react'
import { useReactiveVar } from '@apollo/client'
import { filterEpisodesVar } from '../main'
import { GET_EPISODES } from '../graphql/Episodes/queries'
import { Box, Divider, Grid } from '@mui/material'
import EpisodeCard from '../components/episode/EpisodeCard'
import ColorTextFields from '../components/field/SearchField'
import BaseGridList, { GenericObject } from '../components/grid/BaseGridList'
import SearchSelectField from '../components/search/SearchSelectField'
import { Episode, useGetEpisodesLazyQuery } from '../generated/graphql'

const Search = () => {
  const [search, setSearch] = useState<Boolean>(false)
  const filterEpisodes = useReactiveVar(filterEpisodesVar)
  const [getEpisodes, { loading, data, error }] = useGetEpisodesLazyQuery({
    query: GET_EPISODES,
    fetchPolicy: 'network-only'
  })

  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!search) return
    if (searchRef && searchRef.current) {
      const name = searchRef.current.value
      getEpisodes({
        variables: {
          filter: {
            name, episode: filterEpisodes
          }
        }
      })
    }
    setSearch(false)
  }, [search, filterEpisodes])

  useEffect(() => {
    if (!filterEpisodes) return
    setSearch(true)
  }, [filterEpisodes])

  const episodesSearch = data?.episodes
  const episodeList = episodesSearch?.results as GenericObject[]
  return (
    <Box component='div' alignItems='center' sx={{
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '40px',
      paddingTop:{md:'4rem'}
    }}>
      <ColorTextFields dispatch={setSearch} inputRef={searchRef}></ColorTextFields>
      <SearchSelectField />
      <Divider />

      <BaseGridList items={episodeList} spacing={6} loading={loading} renderItem={(episode, i) => (
        <Grid key={episode.id} item xs={12} sm={4} >
          <EpisodeCard episode={(episode as Episode)} />
        </Grid>
      )} />
    </Box>
  )
}

export default Search