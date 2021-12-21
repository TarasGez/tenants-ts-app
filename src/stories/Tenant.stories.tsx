import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { ComponentMeta } from '@storybook/react';
import Tenant from '../pages/Tenant';
import { TenantType } from '../interfaces';

const mockTenant: TenantType = {
  id: 't1',
  name: 'Tenant 1',
  code: 'Tenant_1',
  description: 'Test description',
  status: 'NOT_ACTIVE',
  type: 'DEMO',
};

const history = createMemoryHistory();
const state = { item: mockTenant };
history.push("/", state);

export default {
  title: 'Tenant',
  component: Tenant,
} as ComponentMeta<typeof Tenant>;

export const Default = () => {
  return (
    <Router history={history}>
      <Tenant />
    </Router>
  )
}