import { screen, act, waitFor } from '@testing-library/react';
import { renderWithRouter } from '../../tests/utils';
import TenantsContainer from './TenantsContainer';
import { getTenants } from '../data/tenants';

jest.mock('../data/tenants');

afterEach(() => {
  jest.clearAllMocks();
});

describe('Tenants Container', () => {
  it('Should show Loading', async () => {
    renderWithRouter(<TenantsContainer />);

    await act(async () => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

  });

  it('Should fetch data', async () => {
    renderWithRouter(<TenantsContainer />);

    await waitFor(() => {
      expect(getTenants).toBeCalled();
    });
  });
});