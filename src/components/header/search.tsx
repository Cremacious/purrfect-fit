'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = query.trim();
    console.debug('Search submit fired, query=', q);
    if (!q) return;

    const target = `/products?search=${encodeURIComponent(q)}`;

    try {
      router.replace(target);

      setTimeout(() => {
        if (
          typeof window !== 'undefined' &&
          window.location.pathname + window.location.search !== target
        ) {
          console.debug(
            'Router.replace did not update location, falling back to window.location'
          );
          window.location.href = target;
        }
      }, 200);
    } catch (err) {
      console.error(
        'router.replace failed, falling back to full navigation',
        err
      );
      if (typeof window !== 'undefined') window.location.href = target;
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex bg-gray-50 border border-gray-300 focus-within:bg-white focus-within:border-gray-500 rounded-full px-4 py-2.5 overflow-hidden w-full max-w-md max-lg:hidden"
    >
      <input
        type="text"
        placeholder="Search something..."
        className="w-full text-sm bg-transparent outline-0 pr-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-transparent border-0 p-0 m-0"
        aria-label="Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192.904 192.904"
          width="16px"
          className="cursor-pointer fill-gray-600"
        >
          <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
        </svg>
      </button>
    </form>
  );
}
