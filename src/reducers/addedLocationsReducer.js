// constants
import { ADD_PLACE, REMOVE_PLACE } from '../constants';

const defaultAddedLocations = [];

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