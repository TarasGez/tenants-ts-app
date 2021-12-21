import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../tests/utils';
import { TenantType } from '../interfaces';
import Tenants from './Tenants';

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

describe('Tenants component', () => {
  it('Should show tenants list', () => {
    renderWithRouter(<Tenants tenantsList={mockTenants} />);

    expect(screen.getByText('Tenant 1')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Tenant 1'));
    expect(window.location.pathname).toEqual('/tenant/t1');

    expect(screen.getByText('Tenant 2')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Tenant 2'));
    expect(window.location.pathname).toEqual('/tenant/t2');
  });

  it('Should show pagination', () => {
    renderWithRouter(<Tenants tenantsList={mockTenants} />);
    expect(screen.getByTestId('tenantsList:pagination')).toBeInTheDocument();
    expect(screen.getByLabelText(/page 1/i)).toBeInTheDocument();
  });
});