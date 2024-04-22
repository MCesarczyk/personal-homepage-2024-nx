import dynamic from 'next/dynamic';
import { Link } from '@ph24/ui';

const Logger = dynamic(() => import('./AppVersionLogger'), { ssr: false });

export default async function Index() {
  return (
    <div id="home">
      <Logger />
      <div className="p-8 text-center w-full">
        <Link variant="PRIMARY" href="/admin">
          Admin
        </Link>
      </div>
    </div>
  );
}
