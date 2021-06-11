import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { VenueContext } from "../../services/venues/venue.context";

const SearchContainer = styled.View`
  padding: 10;
`;


export const Search = () => {
  const { keyword, search } = useContext(VenueContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a Venue"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};