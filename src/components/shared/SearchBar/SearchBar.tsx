"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./style.module.css";

export default function SearchBar({explore_page = false,onSearch,}:{explore_page?: boolean;onSearch?:(q:string) => void;}) {

  const [query, setQuery] = useState("");
  const router = useRouter();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;

    if (!explore_page) {
      // redirect to /explore with query param so the explore page can render BookGrid with searchQuery
      router.push(`/explore?q=${encodeURIComponent(q)}`);
      return;
    }

    // if we're already on explore (explore_page === true), call the handler if provided
    if (typeof onSearch === "function") {
      onSearch(q);
    }
  };

  return (
    <form className={styles.searchBar} onSubmit={submit}>
      <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search books..." aria-label="Search books" />
      <button type="submit">
      <svg viewBox="0 0 24 24" className={styles.icon}><circle cx="11" cy="11" r="8" stroke="#5973bf" strokeWidth="2" fill="none"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#5973bf" strokeWidth="2"/></svg>
      </button>
    </form>
  );
}
