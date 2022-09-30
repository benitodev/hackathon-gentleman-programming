import {createTheme, responsiveFontSizes} from '@mui/material';
import { grey } from '@mui/material/colors';

let theme = createTheme({
    palette: {
        mode: 'dark',   
        primary: {
                main: '#2d97bc',
                light: '#24bff6'
            },
        secondary: {
            main: '#ff0bf4'
        },
        text: {
            secondary: grey[700]
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: '#0fc0ff'
                    }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: '1.2rem'
                    
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontSize: '1.3rem'
                }
            }
        },
        MuiCardContent: {
            styleOverrides:{
                root:{
                    '&:last-child': {
                        paddingBottom:'10px'
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#131212',
                }
                
            }
        },
        MuiTypography:{
          styleOverrides:{
            root:{
                fontWeight:'600'
            }
          }
        },
        MuiPaper: {
            styleOverrides:{
                rounded: {
                   borderRadius: '10px' 
                }
            }
        },
    },
    typography: {
        fontSize: 12,
        h1:{
            color:'#07a9ab',
            fontWeight:600
        },
        h3: {
            fontWeight: 600,     
        },
        fontFamily: [
            'Roboto',
            'sans-serif',
            'RickAndMorty'
        ].join(',')
    }
    
})

theme = responsiveFontSizes(theme)

export default theme