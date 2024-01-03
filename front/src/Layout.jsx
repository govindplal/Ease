import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Toolbar, Button } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { grey } from '@mui/material/colors';

const drawerWidth = 180;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: '#1D1F26', boxShadow: 'none', zIndex: (theme) => theme.zIndex.drawer + 1}}>
      <Toolbar >
        <IconButton edge="start" color="inherit" aria-label="Logo" size='small'>
          EASE
        </IconButton>
        <div className='grow'/>
        <Button  variant="contained" color='secondary'size='small' sx= {{textTransform: 'none'}}>Login</Button>

        <IconButton color="inherit">
        <SettingsOutlinedIcon sx={{fontSize: 20}}/>
        </IconButton>
      </Toolbar>
    </AppBar>
      <Drawer variant="permanent" open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#1D1F26",
          color: "white",
        }
      }}
      >
        <DrawerHeader>
        </DrawerHeader>
        <Divider />
        <DrawerHeader>
            {open === false ?
        <IconButton onClick={handleDrawerOpen}>
            <ChevronRightIcon sx={{ color: grey[50] }}/>
          </IconButton> :
          <IconButton onClick={handleDrawerClose}>
           <ChevronLeftIcon sx={{ color: grey[50] }}/>
          </IconButton>
          }
        </DrawerHeader>
        <Divider/>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'flex' }}>
              <div className='min-w-2 bg-fuchsia-600 text-fuchsia-600' >.</div>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 1,
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon sx={{ color: grey[50] }}/> : <MailIcon sx={{ color: grey[50] }}/>}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List >
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'flex' }}>
              <div className='min-w-2 bg-fuchsia-600 text-fuchsia-600' >.</div>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 1,
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon sx={{ color: grey[50] }}/> : <MailIcon sx={{ color: grey[50] }}/>}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      </Box>
  );
}
