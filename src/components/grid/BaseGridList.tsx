import React from 'react'
import { Maybe } from '../../generated/graphql'
import { CircularProgress, Grid, GridProps, Typography } from '@mui/material'

export type GenericObject = { [key: string]: any }

type BaseGridListProps<GenericObject> = {
  items: Maybe<Array<GenericObject>>
  spacing?: GridProps['spacing']
  loading?: Boolean
  loadingRef?: React.Ref<HTMLDivElement>
  renderItem: (item: GenericObject, index: number) => React.ReactNode
  styles?: Object
}
const defaultItems: any[] = []

const BaseGridList = ({
  items = defaultItems as GenericObject[],
  spacing = 1,
  loading,
  loadingRef,
  renderItem,
  styles,
}: BaseGridListProps<GenericObject>) => {
  return (
    <Grid container justifyContent="center" sx={styles} spacing={spacing}>
      <>
        {items?.length === 0 && !loading && (
          <Typography
            variant="h2"
            color="white"
            sx={{ fontSize: '1.5rem', margin: '80px 0 0 48px' }}
          >
            No data here...
          </Typography>
        )}
        {items?.map((item, index) => renderItem(item, index))}
        {loading && (
          <Grid item xs={12} ref={loadingRef}>
            <CircularProgress size={48} color="secondary"></CircularProgress>
          </Grid>
        )}
      </>
    </Grid>
  )
}

export default BaseGridList
