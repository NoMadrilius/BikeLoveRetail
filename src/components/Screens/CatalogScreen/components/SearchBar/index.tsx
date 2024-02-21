import { useRouter } from "next/router";
import { useState } from "react";
import { styled } from "styled-components";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState(router.query.searchparam || "");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, searchparam: value },
      },
      undefined,
      { shallow: false }
    );
  };

  return (
    <SearchInput
      type="text"
      placeholder="Поиск..."
      value={query}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;

const SearchInput = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: calc(100% - 341px);
  flex-grow: 1;
  margin-left: auto;
`;
