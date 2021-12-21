import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Button, Card, CardContent, Typography, Chip } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { TenantType } from '../interfaces';

const styles = {
  container: {
    margin: '10px',
  },
  item: {
    margin: '10px',
  },
  code: {
    fontSize: '10px',
    marginBottom: '10px',
  },
  chip: {
    fontSize: '10px',
  }
}

const StatusENAM = {
  'ACTIVE': 'active',
  'NOT_ACTIVE': 'not active',
}

interface LocationState {
  item: TenantType;
}

const defaultTenant: TenantType = {
  id: null,
  name: null,
  code: null,
  description: null,
  status: 'NOT_ACTIVE',
  type: null,
}

export default function Tenant() {
  const history = useHistory();
  const location = useLocation();
  const state = location.state as LocationState;
  const [tenant, setTenant] = useState<TenantType>(defaultTenant);

  useEffect(() => {
    if(state && state.item) {
      setTenant(state.item);
    } else {
      history.push('/');
    }
  }, [history, state]);

  const label = tenant.status && StatusENAM[tenant.status] ? StatusENAM[tenant.status] : '';
  const color = tenant && tenant.status === 'ACTIVE' ? "success" : "primary";

  return (
    <Box sx={styles.container}>
      <Button variant="contained" startIcon={<ArrowBack />} onClick={history.goBack}>Back to Tenants List</Button>
      <Card sx={styles.item}>
        <CardContent>
          <Typography variant="h6" color="inherit" component="div">
            {tenant.name} <Chip sx={styles.chip} label={label} color={color}/>
          </Typography>
          <Typography sx={styles.code} color="text.secondary">
            {tenant.code}
          </Typography>
          <Typography variant="body1" component="div">
            {tenant.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}