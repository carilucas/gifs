import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
// import { mockGifs } from "./mocks-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, handleSearch, previousSearch, handleTermClicked } = useGifs();

  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif Perfecto"
      />
      <SearchBar placeholder="Buscar Gifs" onSearch={handleSearch} />
      <PreviousSearches
        searches={previousSearch}
        handleClick={handleTermClicked}
      />
      <GifList gifs={gifs} />
    </>
  );
};
