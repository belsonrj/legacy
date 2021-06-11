import React, { useState, useEffect } from "react";

import { venueRequest } from "./venue.service";

export const VenueContext = React.createContext();

export const VenueContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      // don't do anything
      return;
    }
    venueRequest(keyword.toLowerCase())
      .then((result) => {
        setError(null);
        setIsLoading(false);
        setVenues(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <VenueContext.Provider
      value={{
        isLoading,
        error,
        venues,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </VenueContext.Provider>
  );
};

