import { TenantType } from '../../src/interfaces';

export const mockTenant: TenantType = {
  id: 't1',
  name: 'Tenant 1',
  code: 'Tenant_1',
  description: 'Test description',
  status: 'NOT_ACTIVE',
  type: 'DEMO',
}

export const mockTenants: TenantType[] = [
  {
    id: 't1',
    name: 'Tenant 1',
    code: 'Tenant_1',
    description: 'Test description',
    status: 'NOT_ACTIVE',
    type: 'DEMO',
  },
  {
    id: 't2',
    name: 'Tenant 2',
    code: 'Tenant_2',
    description: 'Test description 2',
    status: 'ACTIVE',
    type: 'REAL',
  }
];