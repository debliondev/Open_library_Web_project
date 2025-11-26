"use client";

import React, { useState } from "react";
import styles from "./style.module.css";
import { useRouter, useSearchParams } from "next/navigation";


export default function SearchBar({ explore_page = false }: { explore_page?: boolean }) {
  const searchParams = useSearchParams();

  const [query, setQuery] = useState<string>(searchParams?.get("q") ?? "");
  const router = useRouter();

  const submit_input = (input: React.FormEvent) => {
    input.preventDefault();
    const URLquery = query?.trim();
    if (!URLquery) return;

    // If not already on explore, navigate to /explore?q=…
    if (!explore_page) {
      router.push(`/explore?q=${encodeURIComponent(URLquery)}`);
      return;
    }

    // If on explore page we keep the param in the URL (.replace to avoid history spam)
    router.replace(`/explore?q=${encodeURIComponent(URLquery)}`);
  };

  return (
    <form className={styles.searchBar} onSubmit={submit_input}>
      <input
        type="text"
        value={query}
        placeholder="searching books..."
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search books"
      />
      <button type="submit">
        <svg viewBox="0 0 24 24" className={styles.icon}>
          <circle cx="11" cy="11" r="8" stroke="#5973bf" strokeWidth="2" fill="none" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#5973bf" strokeWidth="2" />
        </svg>
      </button>
    </form>
  );
}
