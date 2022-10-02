import * as React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { BottomAppBarProps, INITIAL_STATE } from './BottomBar'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import MdOutlineOndemandVideo from '@mui/icons-material/OndemandVideoOutlined'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import SearchOutlinedIcon from '@mui/icons-material/SearchOffOutlined'
import SearchIcon from '@mui/icons-material/Search'

const DesktopBar = () => {
  const { pathname } = useLocation()
  const [outlinedIcons, setOutlinedIcons] =
    React.useState<BottomAppBarProps>(INITIAL_STATE)

  return (
    <AppBar
      position="fixed"
      sx={{
        display: { md: 'block', xs: 'none' },
        top: '0',
        left: '0',
        backgroundColor: '#2d97bc',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-around' }} disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Avatar
              src="/rick-and-morty-logo.webp"
              alt="logo"
              sx={{ width: { md: '70px' }, height: { md: '70px' } }}
            />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-evenly',
            }}
          >
            <NavLink
              to="/home"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : 'rgb(208 208 208)',
              })}
            >
              <IconButton color="inherit">
                {outlinedIcons.home ? (
                  <OndemandVideoIcon sx={{ width: '1.2em', height: '1.2em' }} />
                ) : (
                  <MdOutlineOndemandVideo
                    sx={{ width: '1.2em', height: '1.2em' }}
                  />
                )}
              </IconButton>
            </NavLink>

            <NavLink
              to="/search"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : 'rgb(208 208 208)',
              })}
            >
              <IconButton color="inherit" sx={{ outlineColor: '#fff' }}>
                {outlinedIcons.search ? (
                  <SearchIcon sx={{ width: '1.2em', height: '1.2em' }} />
                ) : (
                  <SearchOutlinedIcon
                    sx={{ width: '1.2em', height: '1.2em' }}
                  />
                )}
              </IconButton>
            </NavLink>

            <NavLink
              to="/actors"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : 'rgb(208 208 208)',
              })}
            >
              <IconButton color="inherit" aria-label="open drawer">
                {outlinedIcons.actors ? (
                  <img
                    src="icons/rick-filled.png"
                    alt="rick-filled"
                    style={{ width: '1.2em', height: '1.2em' }}
                  />
                ) : (
                  <img
                    src="icons/rick-outlined.png"
                    alt="rick-filled"
                    style={{ width: '1.2em', height: '1.2em' }}
                  />
                )}
              </IconButton>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default DesktopBar
