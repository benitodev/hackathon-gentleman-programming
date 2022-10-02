import React from 'react'
import BaseGridList, { GenericObject } from '../grid/BaseGridList'
import CharacterCard from './CharacterCard'
import { Grid, Typography } from '@mui/material'

export interface CharacterGridListProps {
  episode: {
    id: string | null | undefined
    episode: string | null | undefined
    name: string | null | undefined
  }
  charactersList: GenericObject[]
  loading: boolean
}
const CharacterGridList = ({
  charactersList,
  loading,
  episode,
}: CharacterGridListProps) => {
  const baseGridListCharacterStyles = {
    margin: '0',
    width: '100%',
    gap: '1rem',
  }
  return (
    //change this
    <>
      <Typography variant="h1" sx={{ marginBottom: '2rem', fontWeight: '600' }}>
        {episode.name}
      </Typography>
      <BaseGridList
        items={charactersList}
        loading={loading}
        styles={baseGridListCharacterStyles}
        renderItem={(item) => (
          <Grid key={item.id} item xs={12} sm={4}>
            <CharacterCard character={item} />
          </Grid>
        )}
      />
    </>
  )
}

export default CharacterGridList
