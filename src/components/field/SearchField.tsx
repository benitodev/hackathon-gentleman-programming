import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
type ColorTextFieldsProps = {
  dispatch: React.Dispatch<React.SetStateAction<Boolean>>
  inputRef?: React.RefObject<HTMLInputElement>
}

export default function ColorTextFields({
  dispatch,
  inputRef,
}: ColorTextFieldsProps) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
        display: 'flex',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={() => {
          dispatch(true)
        }}
        inputRef={inputRef}
        label="Outlined secondary"
        color="primary"
        focused
      />
    </Box>
  )
}
