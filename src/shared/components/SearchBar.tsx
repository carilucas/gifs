import { useEffect, useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export const SearchBar = ({
  placeholder = "Buscar",
  onSearch,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 1500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onSearch]);

  const handleSearch = () => {
    onSearch(query);
    setQuery("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="search-container">
      <input
        type="text"
        name=""
        value={query}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
