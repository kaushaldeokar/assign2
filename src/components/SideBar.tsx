import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import GridViewIcon from '@mui/icons-material/GridView';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Form from './Form';

const drawerWidth = 240;

interface Props {
  
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      
      <List>
        <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GridViewIcon/> 
              </ListItemIcon>
              <ListItemText primary="DashBoard" />
            </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BusinessCenterIcon/> 
              </ListItemIcon>
              <ListItemText primary="Manage Subscription" />
            </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BusinessCenterIcon/> 
              </ListItemIcon>
              <ListItemText primary="Young Brain" />
            </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BusinessCenterIcon/> 
              </ListItemIcon>
              <ListItemText primary="Mid Career" />
            </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BusinessCenterIcon/> 
              </ListItemIcon>
              <ListItemText primary="Vendor" />
            </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BusinessCenterIcon/> 
              </ListItemIcon>
              <ListItemText primary="Consultant" />
            </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GridViewIcon/> 
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExitToAppIcon/> 
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItemButton>
        </ListItem>


      </List>
     </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        
        <Form/>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}