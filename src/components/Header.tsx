import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

const styles = {
  logo: {
    '& a': {
      color: 'white',
      textDecoration: 'none',
    }
  }
}
function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" component="div" sx={styles.logo}>
          <Link to = '/'>Tenants App</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

export default Header;