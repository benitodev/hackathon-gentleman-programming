import { useState, useEffect } from 'react'
import { GET_EPISODES_THAT_APPEAR } from '../../graphql/Character/queries'
import {
  Episode,
  Maybe,
  useGetEpisodesThatAppearActorLazyQuery,
} from '../../generated/graphql'
import { GenericObject } from '../grid/BaseGridList'

import EpisodeCard from '../episode/EpisodeCard'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@mui/material'

type BasicModalProps = {
  children?: JSX.Element
  id?: Maybe<string>
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '65vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
}
const ActorModal = ({ id }: BasicModalProps) => {
  const [open, setOpen] = useState(false)
  const [getEpisodes, { data, loading }] =
    useGetEpisodesThatAppearActorLazyQuery({
      query: GET_EPISODES_THAT_APPEAR,
    })
  useEffect(() => {
    if (!open || !id) return
    getEpisodes({
      variables: {
        id,
      },
    })
  }, [open])

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const response = data?.character
  const episodesThatAppear = response?.episode as GenericObject[]
  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ paddingY: '3px', width: '100%', minHeight: '25px' }}
        size="medium"
        variant="outlined"
        color="secondary"
      >
        Show episodes
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" mb={2} component="h2">
            Where appear?
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="h5"
            mb={4}
            color="text.secondary"
          >
            Touch the next and prev icon or slide!
          </Typography>
          <Carousel
            swipe
            autoPlay={false}
            sx={{ marginTop: '1rem' }}
            indicatorIconButtonProps={{
              style: {
                display: 'none',
              },
            }}
          >
            {episodesThatAppear &&
              episodesThatAppear.length > 0 &&
              episodesThatAppear.map((episode, i) => (
                <Grid key={id}>
                  {' '}
                  <EpisodeCard
                    cardActions={false}
                    episode={episode as Episode}
                    fontSizeTitle="1.4rem"
                  />
                </Grid>
              ))}
          </Carousel>
        </Box>
      </Modal>
    </div>
  )
}
export default ActorModal
