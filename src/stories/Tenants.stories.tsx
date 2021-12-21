import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tenants from '../components/Tenants';
import { TenantType } from '../interfaces';

const mockTenants: TenantType[] = [
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
export default {
  title: 'Tenants',
  component: Tenants,
} as ComponentMeta<typeof Tenants>;

const Template: ComponentStory<typeof Tenants> = () => <Tenants tenantsList={mockTenants} />;

export const Default = Template.bind({});