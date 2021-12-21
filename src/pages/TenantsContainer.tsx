import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { getTenants } from '../data/tenants';
import { Tenants } from '../components';
import { TenantType } from '../interfaces';

const styles = {
  loader: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px',
  }
}

interface LocationState {
  list: TenantType[];
}

function TenantsContainer() {
  const location = useLocation();
  const state = location.state as LocationState;
  const [tenantsList, setTenantsList] = useState<TenantType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(state && state.list){
      setTenantsList(state.list);
    } else {
      setIsLoading(true);
      loadTenants();
    }
  }, [state]);

  function loadTenants() {
    getTenants().then(result => {
      setTenantsList(result);
    }).catch((e) => {
      console.error('Load Tenants list error', e);
    }).finally(() => setIsLoading(false));
  }

  if(isLoading) {
    return (
      <Box sx={styles.loader}>Loading ...</Box>
    )
  }

  return (
    <Tenants tenantsList={tenantsList} />
  )
}

export default TenantsContainer;