import { filterEpisodesVar } from '../../main'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useReactiveVar } from '@apollo/client';

export type Options = { value: string, label: string }

export type SelectFieldProps = {
  fields: { [key: string]: { inputLabel: string, options: Options[] } }
}

const SelectField = ({ fields }: SelectFieldProps) => {
  const reactiveVar = useReactiveVar(filterEpisodesVar)
  console.log(reactiveVar)
  const fieldsArray = Object.keys(fields)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value.startsWith('E')) return

    filterEpisodesVar(value)

    //later to filter with episode number 

    // if(value.startsWith('S')){
    //   setFilter(prev => prev + value)
    //   filterEpisodesVar(filter)
    //   return 
    // }
    // setFilter(value)
  };


  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: 'auto', minWidth: '120px' },
        display: 'flex',
        justifyContent: 'space-evenly',
        marginBottom:'4px'
      }}
      noValidate
      autoComplete="off"
    >
      {
        fieldsArray.length > 0 && fieldsArray.map((field) => (
          <TextField key={field} label={field} name={field} select value={reactiveVar || ''} onChange={handleChange}>
            {
              fields[field].options?.map((option) => {
                return <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              })
            }
          </TextField>
        ))
      }

    </Box>
  );
}

export default SelectField