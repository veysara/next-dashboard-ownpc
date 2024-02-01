'use client';
import { usePathname } from 'next/navigation';


export default function Page() {
    const pathname = usePathname();

  return (
    <div className="slide-container swiper">
      <h1>customer page</h1>
    </div>
  )

}