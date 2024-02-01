'use client';
import { usePathname } from 'next/navigation'
import { useState } from 'react';

export default function Page() {
  const pathname = usePathname();
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contect Page</h1>
      <p>You clicked {count} items</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )

}