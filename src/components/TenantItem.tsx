import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { TenantType } from '../interfaces';

const styles = {
  container: {
    '& a': {
      display: 'inline-block',
      padding: '10px',
      color: '#444',
      textDecoration: 'none',
    }
  }
};

interface Props {
  item: TenantType;
}

function TenantItem({ item }: Props) {
  return(
    <Box sx={styles.container}>
      <Link to = {{
        pathname: `tenant/${item.id}`,
        state: { item }
      }
      }>{item.name}</Link>
    </Box>
  )
};

export default TenantItem;