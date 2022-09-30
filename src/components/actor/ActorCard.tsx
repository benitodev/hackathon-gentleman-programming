import { Character } from '../../generated/graphql'
import ActorModal from './ActorModal';
import { Avatar, Card, CardContent, CardMedia, Divider, Paper, Typography } from '@mui/material';

export type Actor = Pick<Character, 'id' | 'name' | 'species' | 'image' | 'origin' | 'created'>

type ActorCardProps = {
  actor: Actor
}

const ActorCard = ({ actor }: ActorCardProps) => {
  const { id, name, image, species, created, origin } = actor

  const isInCastSince = new Date(String(created)).toLocaleDateString()

  return (
    <Card sx={{ maxWidth: 900, display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'left' }} >
      <Avatar
        alt={name as string}
        src={image as string}
        sx={{ width: '100%', height: '100%', borderRadius: '0' }}

      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Typography gutterBottom variant="h3" m={0} color='primary.light'>
          {name}
        </Typography>


        <Typography variant="h5" mb='4px' mt={2} color="text.secondary">
          Gender:
        </Typography>

        <Typography variant="h5" color="text.primary">
          {species}
        </Typography>


        <Typography variant="h5" mb='4px' mt={2} color="text.secondary">
          From:
        </Typography>

        <Typography variant="h5" color="text.primary">
          {
            origin?.type
              ? `${origin?.type}, ${origin?.name}`
              : origin?.name
          }
        </Typography>

        <Typography variant="h5" mb='4px' mt={2} color="text.secondary">
          In the cast since:
        </Typography>

        <Typography variant="h5" mb={2}>
          {isInCastSince}
        </Typography>

        <ActorModal id={id} />

      </CardContent>

    </Card>
  )
}

export default ActorCard