import AddCompanyButton from '@/app/components/add-company-button';
import { headers } from 'next/headers';

export default function Home() {
  console.log(process.env.CRM_SECRET_KEY);
  console.log(headers());
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
    </main>
  );
}
