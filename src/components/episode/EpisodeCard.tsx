import React from 'react'
import { Episode } from '../../generated/graphql'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'
import { Link } from 'react-router-dom'

export type EpisodeCard = Omit<Episode, 'characters'>

interface EpisodeCardProps {
  episode: EpisodeCard
  cardActions?: boolean
  fontSizeTitle?: string
}

const EpisodeCard = ({
  episode,
  cardActions = true,
  fontSizeTitle,
}: EpisodeCardProps) => {
  const airDateWithinComma = episode?.air_date?.replace(',', '')
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://imgs.search.brave.com/tptPl_0p7epM8iOWAk8O8HyJggkqw6FdyX4i-Sx48Uw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9lcy53/ZWIuaW1nMi5hY3N0/YS5uZXQvcGljdHVy/ZXMvMjEvMDMvMzAv/MTYvMTYvMDQ1NTAz/My5qcGc"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          color="primary.light"
          fontSize={fontSizeTitle}
        >
          {episode?.name}
        </Typography>

        <Divider />

        <Typography variant="h5" mt={1} color="text.primary">
          {episode?.episode}
        </Typography>

        <Typography variant="h5" mt={1} color="text.secondary">
          {airDateWithinComma}
        </Typography>
      </CardContent>

      {cardActions ? (
        <Link to={`/characters/${episode?.id}`}>
          <CardActions>
            <Button
              size="medium"
              variant="outlined"
              color="secondary"
              fullWidth
            >
              Show characters
            </Button>
          </CardActions>
        </Link>
      ) : (
        ''
      )}
    </Card>
  )
}
export default EpisodeCard
