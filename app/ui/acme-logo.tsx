import { CgGirl } from "react-icons/cg";
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <CgGirl className="h-12 w-12" />
      <p className="text-[25px]">Sara Vey</p>
    </div>
  );
}
