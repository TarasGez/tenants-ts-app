export interface TenantType {
  id: string | null;
  name: string | null;
  code: string | null;
  description?: string | null;
  status: 'ACTIVE' | 'NOT_ACTIVE';
  type?: string | null;
}