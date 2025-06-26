import { useState, useRef, useEffect } from "react";
import { searchArticlesByKeyword, searchArticlesByTech } from "@/data/articles";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SearchBar() {
  const [focused, setFocused] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [barWidth, setBarWidth] = useState<number | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<
    {
      title: string;
      description?: string;
      slug: string;
      keywordMatch?: string;
      techMatch?: string;
    }[]
  >([]);
  const router = useRouter();

  const handleFocus = () => {
    setFocused(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (focused) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (focused && barRef.current) {
      setBarWidth(barRef.current.offsetWidth);
    }
  }, [focused]);

  useEffect(() => {
    if (searchTerm.length > 2) {
      const lower = searchTerm.toLowerCase();
      const byKeyword = searchArticlesByKeyword(searchTerm).map((a) => {
        const match = a.keywords.find((k) => k.toLowerCase().includes(lower));
        return { ...a, keywordMatch: match };
      });
      const byTech = searchArticlesByTech(searchTerm).map((a) => {
        // Find the matching tech keyword
        const techMatch = a.tech?.find((t) => t.toLowerCase().includes(lower));
        return { ...a, techMatch };
      });
      // Dedupe by slug, prefer keywordMatch if present
      const deduped: {
        [slug: string]: {
          title: string;
          description?: string;
          slug: string;
          keywordMatch?: string;
          techMatch?: string;
        };
      } = {};
      [...byTech, ...byKeyword].forEach((a) => {
        if (!deduped[a.slug] || (a as any).keywordMatch) {
          deduped[a.slug] = {
            title: a.title,
            description: a.description,
            slug: a.slug,
            keywordMatch: (a as any).keywordMatch,
            techMatch: (a as any).techMatch,
          };
        }
      });
      setResults(Object.values(deduped));
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    // Focus and set search term if 's' param is present in the URL
    if (router && typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const s = params.get("s");
      if (s && s.length > 0) {
        setSearchTerm(s);
        setFocused(true);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      }
    }
  }, [router]);

  useEffect(() => {
    // Listen for popstate to handle tech link clicks updating the query param
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const s = params.get("s");
      if (s && s.length > 0) {
        setSearchTerm(s);
        setFocused(true);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      }
    };
    window.addEventListener("popstate", handlePopState);
    // Also run once on mount (for direct loads)
    handlePopState();
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <>
      {focused && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-200 ease-in-out"
          aria-hidden="true"
          onClick={() => setFocused(false)}
        />
      )}
      <div className="w-full flex justify-center">
        <div
          ref={barRef}
          className={`bg-gradient-to-r from-amber-400 via-emerald-400 to-blue-400 p-[2px] rounded-xl w-full  z-50 transition-all duration-200 relative`}
        >
          <div className="bg-stone-50 rounded-[10px] p-4" onClick={handleFocus}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent outline-none font-['IBM_Plex_Mono',monospace] text-base md:text-lg text-gray-800 placeholder-gray-400"
              onFocus={handleFocus}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setFocused(false);
                }
              }}
            />
          </div>
          {focused && (
            <div
              className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-stone-200 z-50 p-4 min-h-[48px]"
              style={barWidth ? { width: barWidth, minWidth: barWidth } : {}}
            >
              {searchTerm.length > 2 ? (
                results.length > 0 ? (
                  <ul>
                    {results.map((r, i) => (
                      <li key={i} className="mb-2">
                        <Link
                          href={`/${r.slug}`}
                          className="block cursor-pointer hover:bg-stone-100 rounded px-2 py-1"
                          tabIndex={0}
                          onClick={() => {
                            setFocused(false);
                            setSearchTerm("");
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              setFocused(false);
                              setSearchTerm("");
                              (e.target as HTMLElement).click();
                            }
                          }}
                        >
                          <div className="text-gray-800 font-['IBM_Plex_Mono',monospace] text-base">
                            {r.title}
                          </div>
                          {r.description && (
                            <div className="text-gray-500 font-['IBM_Plex_Mono',monospace] text-xs mt-0.5">
                              {r.description}
                            </div>
                          )}
                          {r.keywordMatch && (
                            <div className="font-['IBM_Plex_Mono',monospace] text-[11px] mt-0.5">
                              <span
                                style={{ color: "rgb(var(--foreground-rgb))" }}
                              >
                                Keyword:{" "}
                              </span>
                              <span style={{ color: "rgb(var(--highlight))" }}>
                                {r.keywordMatch}
                              </span>
                            </div>
                          )}
                          {r.techMatch && (
                            <div className="font-['IBM_Plex_Mono',monospace] text-[11px] mt-0.5">
                              <span
                                style={{ color: "rgb(var(--foreground-rgb))" }}
                              >
                                Tech:{" "}
                              </span>
                              <span
                                style={{ color: "rgb(var(--highlight-2))" }}
                              >
                                {r.techMatch}
                              </span>
                            </div>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-gray-400 font-['IBM_Plex_Mono',monospace] text-sm">
                    No results
                  </span>
                )
              ) : (
                <span className="text-gray-400 font-['IBM_Plex_Mono',monospace] text-sm">
                  Type at least 3 characters…
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
