import React, {useState, useEffect} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import MdOutlineOndemandVideo from '@mui/icons-material/OndemandVideoOutlined'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import SearchOutlinedIcon from '@mui/icons-material/SearchOffOutlined'
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import { appBarStyles } from '../../theming/styles';
import { NavLink, useLocation } from 'react-router-dom';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

type BottomAppBarProps = {
 home?: Boolean
 search?: Boolean
 actors?: Boolean
}

type toggleClickIconProps = {
  name: String, value?: Boolean
}

const INITIAL_STATE = {
  home: false,
  search: false,
  actors: false
}

const BottomAppBar = () => {
  const theme = useTheme()
  const {pathname} = useLocation()
  const [outlinedIcons, setOutlinedIcons] = useState<BottomAppBarProps>(INITIAL_STATE)

  useEffect(()=>{
    if(!pathname) return
    const path = pathname.slice(1)
    setOutlinedIcons(()=> ({...INITIAL_STATE, [path.toString()]: true}))
  }, [pathname])
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color={"primary"}  sx={appBarStyles}>
        <Toolbar sx={{justifyContent: 'space-around', padding: 0}}>
          
          <NavLink to='/home' style={({ isActive }) => ({
            color: isActive ? '#fff' : 'rgb(208 208 208)'
          })}>
          <IconButton color="inherit">
            {
            outlinedIcons.home ? 
            <OndemandVideoIcon sx={{width:'1.2em', height:'1.2em'}}/>
            : 
            <MdOutlineOndemandVideo sx={{width:'1.2em', height:'1.2em'}}/>
            }
          </IconButton>
          </NavLink>


        <NavLink to='/search' style={({ isActive }) => ({
            color: isActive ? '#fff' : 'rgb(208 208 208)'
          })}>
          <IconButton color="inherit" sx={{outlineColor: '#fff'}}>
          {
            outlinedIcons.search ? 
            <SearchIcon sx={{width:'1.2em', height:'1.2em'}} />
            : 
            <SearchOutlinedIcon sx={{width:'1.2em', height:'1.2em'}} />
          }
          </IconButton>
        </NavLink>

          <NavLink to='/actors' style={({ isActive }) => ({
            color: isActive ? '#fff' : 'rgb(208 208 208)'
          })}>
            <IconButton color="inherit" aria-label="open drawer">
             { 
              outlinedIcons.actors ?
              <img src="icons/rick-filled.png" alt="rick-filled" style={{width:'1.2em', height:'1.2em'}}/>
              :
              <img src="icons/rick-outlined.png" alt="rick-filled" style={{width:'1.2em', height:'1.2em'}} />

            }
            </IconButton>
          </NavLink>

        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
export default BottomAppBar