import StatusLabel, { Status } from '@/app/components/status-label';
import AddCompanyButton from '@/app/components/add-company-button';
import { headers } from 'next/headers';
// import ServerComponent from '@/app/components/server-component';
// import ClientComponent from '@/app/components/client-component';
// import ServerComponentCopy from './components/server-component-copy';
import MagicButton from '@/app/components/magic-button';

export default function Home() {
  console.log(process.env.CRM_SECRET_KEY);
  console.log(headers());
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      {/* {new Date().toTimeString()} */}
      <StatusLabel status={Status.Active}>Activ</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Activ</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <AddCompanyButton />
      {/* <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent> */}
      <MagicButton />
    </main>
  );
}
