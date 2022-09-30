import { useCallback, useMemo } from 'react'
import { GET_EPISODES } from '../../graphql/Episodes/queries'
import { Episode, useGetEpisodesQuery } from '../../generated/graphql'
import { Box, CssBaseline, Grid, Typography } from '@mui/material'
import EpisodeCard from './EpisodeCard'
import BaseGridList, { GenericObject } from '../grid/BaseGridList'
import { Waypoint } from 'react-waypoint';

const EpisodeGridList = () => {

  const { data, loading, error, fetchMore } = useGetEpisodesQuery({
    query: GET_EPISODES,
    notifyOnNetworkStatusChange: true,
  })

  const episodes = data?.episodes
  const episodesItems = episodes?.results as GenericObject[]
  const next = episodes?.info?.next

  return (
    <section id='episodesList'>
      <Typography variant='h1' mb='2rem'>Rick and morty</Typography>
      
      <BaseGridList items={episodesItems} spacing={6} loading={loading} renderItem={(episode, i) => (
        <Grid key={episode.id} item xs={12} sm={6} md={4} columnSpacing={{ xs: 1, sm: 2 }} >
          <EpisodeCard episode={(episode as Episode)} />
          {
            (i === episodesItems.length - 5 && next !== null) && <Waypoint onEnter={() => fetchMore({
              variables: { page: next },
              updateQuery: (pv, { fetchMoreResult }) => {
                if (!fetchMoreResult) return pv

                return {
                  __typename: 'Query',
                  episodes: {
                    __typename: 'Episodes',
                    results: [...(pv.episodes?.results as []), ...(fetchMoreResult.episodes?.results as [])],
                    info: {
                      __typename: 'Info',
                      next: fetchMoreResult.episodes?.info?.next
                    }
                  }
                }
              }
            })} />
          }
        </Grid>
      )} />

      <Box mb='100px'></Box>
    </section>
  )
}

export default EpisodeGridList