import { Link } from '@ph24/ui';

export default function NotFound() {
  return (
    <div className="text-center h-full w-full align-middle">
      <h2 className="text-3xl font-bold m-8">Not Found</h2>
      <p className="mb-8">Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
