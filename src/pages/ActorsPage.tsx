import { GET_ACTORS } from '../graphql/Character/queries'
import { useGetActorsQuery } from '../generated/graphql'
import { Waypoint } from 'react-waypoint'
import { Box, Grid, Typography } from '@mui/material'
import BaseGridList, { GenericObject } from '../components/grid/BaseGridList'
import ActorCard from '../components/actor/ActorCard'

const Actors = () => {
  const { data, loading, fetchMore } = useGetActorsQuery({
    query: GET_ACTORS,
  })
  const response = data?.characters
  const actors = response?.results as GenericObject[]
  const next = response?.info?.next
  return (
    <Box id="actorsList" sx={{ paddingTop: { md: '4rem' } }}>
      <BaseGridList
        items={actors}
        spacing={6}
        loading={loading}
        renderItem={(actor, i) => (
          <Grid key={actor.id} item xs={12} sm={4}>
            <ActorCard actor={actor}></ActorCard>
            {i === actors.length - 5 && next !== null && (
              <Waypoint
                onEnter={() =>
                  fetchMore({
                    variables: { page: next },
                    updateQuery: (pv, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return pv
                      console.log(pv)

                      return {
                        __typename: 'Query',
                        characters: {
                          __typename: 'Characters',
                          info: {
                            __typename: 'Info',
                            next: fetchMoreResult.characters?.info?.next,
                          },
                          results: [
                            ...(pv.characters?.results as []),
                            ...(fetchMoreResult.characters?.results as []),
                          ],
                        },
                      }
                    },
                  })
                }
              />
            )}
          </Grid>
        )}
      />

      <Box mb="100px"></Box>
    </Box>
  )
}

export default Actors
