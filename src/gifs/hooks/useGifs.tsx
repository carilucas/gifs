import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGisByQuery } from "../actions/get-gifs-by-query.actions";

interface useGifsProps {
  gifs: Gif[];
  previousSearch: string[];
  handleSearch: (query: string) => Promise<void>;
  handleTermClicked: (query: string) => void;
}

// const gifsCached: Record<string, Gif[]> = {};

export const useGifs = (): useGifsProps => {
  const [previousSearch, setPreviousSearch] = useState<string[]>([]);

  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifsCached = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCached.current[term]) {
      setGifs(gifsCached.current[term]);

      return;
    }
    const queryGifs = await getGisByQuery(term);
    setGifs(queryGifs);
  };

  const handleSearch = async (query: string) => {
    if (query.length <= 1) return;
    query = query.toLowerCase().trim();
    if (previousSearch.find((s) => s === query)) return;

    setPreviousSearch([query, ...previousSearch].splice(0, 8));

    const queryGifs = await getGisByQuery(query);
    setGifs(queryGifs);
    gifsCached.current[query] = queryGifs;
  };
  return { gifs, previousSearch, handleSearch, handleTermClicked };
};
