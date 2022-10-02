import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  makeVar,
  ReactiveVar,
} from '@apollo/client'
import App from './App'
import theme from './theming/theme'
import './index.css'
import { ThemeProvider, CssBaseline } from '@mui/material'

export const filterEpisodesVar: ReactiveVar<string> = makeVar<string>('')
export const modalOpenVar: ReactiveVar<boolean> = makeVar<boolean>(false)

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </ApolloProvider>
)
