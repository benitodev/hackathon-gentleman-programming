import React from 'react'
import { gql } from '@apollo/client'
import { Character } from '../../generated/graphql'
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  Typography,
} from '@mui/material'
type CharacterFromEpisodeProps = Pick<
  Character,
  'id' | 'name' | 'species' | 'image' | 'gender'
>

type CharacterCardProps = {
  character: CharacterFromEpisodeProps
  hasActionArea?: boolean
}

const CharacterCard = ({ character, hasActionArea }: CharacterCardProps) => {
  const { id, name, species, gender, image } = character
  return (
    <Card
      sx={{
        maxWidth: 900,
        display: 'flex',
        flexDirection: 'row-reverse',
        width: '100%',
      }}
    >
      <Avatar
        alt={name as string}
        src={image as string}
        sx={{ width: '90px', height: '100%', margin: 'auto 10px' }}
      />
      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
      >
        <Typography gutterBottom variant="h4" color="primary.light">
          {name}
        </Typography>

        <Paper
          elevation={3}
          sx={{ display: 'inline', margin: '5px', padding: '5px' }}
        >
          <Typography
            component="h5"
            sx={{ fontSize: '1rem', fontWeight: '500' }}
            color="text.primary"
          >
            {species}
          </Typography>
        </Paper>

        <Typography variant="h5" mt={1} color="text.secondary">
          {gender}
        </Typography>
      </CardContent>
    </Card>
  )
}
export default CharacterCard

const characterFragment = gql`
  fragment CharacterCard_character on Character {
    id
    name
    image
    episode {
      id
      air_date
    }
  }
`

// characterFragment.fragments = {
//   character: characterFragment,
//   characterWithSpecs:
// }

// export default CharacterCard
