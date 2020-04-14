// constants
import { ADD_PLACE, REMOVE_PLACE } from '../constants';

const defaultAddedLocations = [
  {
    city: "Париж 1",
    location: "Париж, Франция 1",
    lat: 48.85661400000001,
    lng: 2.3522219,
    added: true
  },
  {
    city: "Париж 2",
    location: "Париж, Франция 2",
    lat: 48.85661400000001,
    lng: 2.3522219,
    added: true
  },
  {
    city: "Париж 3",
    location: "Париж, Франция 3",
    lat: 48.85661400000001,
    lng: 2.3522219,
    added: true
  },
  {
    city: "Париж 4",
    location: "Париж, Франция 4",
    lat: 48.85661400000001,
    lng: 2.3522219,
    added: true
  },
  {
    city: "Париж 5",
    location: "Париж, Франция 5",
    lat: 48.85661400000001,
    lng: 2.3522219,
    added: true
  },
  {
    city: "Париж 6",
    location: "Париж, Франция 6",
    lat: 48.85661400000001,
    lng: 2.3522219,
    added: true
  },
  {
    city: "Париж 7",
    location: "Париж, Франция 7",
    lat: 48.85661400000001,
    lng: 2.3522219,
    added: true
  },
  {
    city: "Париж 8",
    location: "Париж, Франция 8",
    lat: 48.85661400000001,
    lng: 2.3522219,
    added: true
  },
  {
    city: "Париж 9",
    location: "Париж, Франция 9",
    lat: 48.85661400000001,
    lng: 2.3522219,
    added: true
  },
  {
    city: "Париж 10",
    location: "Париж, Франция 10",
    lat: 48.85661400000001,
    lng: 2.3522219,
    added: true
  }
];

export default ( savedLocations = defaultAddedLocations, action ) => {
  switch ( action.type ) {
    // adding new location
    case ADD_PLACE:
      const { city, location, lat, lng } = action.payload;

      return [
        { city, location, lat, lng, added: true },
        ...savedLocations
      ];

    // deleting existing location
    case REMOVE_PLACE:
      const { lat: removingLocationLat, lng: removingLocationLng } = action.payload;

      return savedLocations.filter( location => {
        const { lat, lng } = location;

        return lat !== removingLocationLat && lng !== removingLocationLng;
      });

    default:
      return savedLocations;
  }
}