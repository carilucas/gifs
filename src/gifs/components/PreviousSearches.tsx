import type { FC } from "react";

interface PreviousSearchesProps {
  searches: string[];
  handleClick: (query: string) => void;
}

export const PreviousSearches: FC<PreviousSearchesProps> = ({
  searches,
  handleClick,
}) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas previas</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li key={search} onClick={() => handleClick(search)}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};
