import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../tests/utils';
import { mockTenant } from '../../tests/mocks'
import TenantItem from './TenantItem';

describe('TenantItem component', () => {
  it('Should show tenant info', () => {
    renderWithRouter(<TenantItem item={mockTenant} />);
    expect(screen.getByText('Tenant 1')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Tenant 1'));
    expect(window.location.pathname).toEqual('/tenant/t1');
  });
});