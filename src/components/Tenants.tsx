import { useEffect, useState, useMemo, SetStateAction } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { Box, Card, Pagination } from '@mui/material';
import { TenantType } from '../interfaces';
import TenantItem from './TenantItem';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '30px 0',
    gap: '20px',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  }
}

const pageSize = 20;

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

interface Props {
  tenantsList: TenantType[] | [];
}

function Tenants({ tenantsList = [] }: Props) {
  const history = useHistory();
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  
  let query = useQuery();

  useEffect(() => {
    if(query.get('page')) {
      setPage(Number(query.get('page')));
    } else {
      setPage(1);
    }
  }, [query]);

   useEffect(() => {
    setCount(normalizeCount(tenantsList))
  }, [tenantsList]);

  function normalizeCount(arr: TenantType[] | []) {
    return arr.length % 20 > 0 ? Math.trunc(arr.length/20) + 1 : Math.trunc(arr.length/20);
  }

  const handleChange = (e: any, value: SetStateAction<number>) => {
    setPage(value);
    history.push(`/?page=${value}`, { list: tenantsList })
  };

  const tenantsListJSX = tenantsList.slice((page - 1) * pageSize, page * pageSize).map((item) => 
    <Card key={item.id}>
      <TenantItem item={item} />
    </Card>
  );

  return (
    <Box sx={styles.container as any}>
      <Box sx={styles.list as any}>{tenantsListJSX}</Box>
      <Pagination count={count} page={page} onChange={handleChange} data-testid='tenantsList:pagination' />
    </Box>
  )
}

export default Tenants;