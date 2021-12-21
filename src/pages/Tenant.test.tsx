import { render, screen } from '@testing-library/react';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { mockTenant } from '../../tests/mocks'
import Tenant from './Tenant';

it("renders location state", () => {
  const history = createMemoryHistory();
  const state = { item: mockTenant };
  history.push("/", state);

  render(
    <Router history={history}>
      <Tenant />
    </Router>
  );

  expect(screen.getByText('Tenant 1')).toBeInTheDocument();
  expect(screen.getByText('Tenant_1')).toBeInTheDocument();
  expect(screen.getByText('not active')).toBeInTheDocument();
});