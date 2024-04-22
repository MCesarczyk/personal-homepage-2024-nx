import { PageTitle } from '@ph24/ui';
import { Navigation } from './Navigation';
import { Topbar } from './Topbar';

export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Topbar />
      <PageTitle>Admin panel</PageTitle>
      <Navigation />
      {children}
    </>
  );
}
