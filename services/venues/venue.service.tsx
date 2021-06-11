
export const venueRequest = (searchTerm) => {
  return fetch(`https://app.ticketmaster.com/discovery/v2/venues.json?keyword=${searchTerm}&apikey=BJcS6XofWAMQPXIRlVEYPRFIWwjiAniM`).then(
    (res) => {
      return res.json();
    }
  );
};
