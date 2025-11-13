import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
 
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>

      <div className="mt-4 flex flex-1 flex-col gap-4 md:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-4">
          <p className={`${lusitana.className} text-xl text-gray-800`}>
            Welcome to the Acme Dashboard
          </p>

          <p className="text-sm text-gray-600">
            Start managing your customers, invoices, and more.
          </p>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Go to Dashboard
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
