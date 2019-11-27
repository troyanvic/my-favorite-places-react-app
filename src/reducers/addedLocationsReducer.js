// constants
import { ADD_PLACE } from '../constants';

const defaultAddedLocations = [];

export default ( savedLocations = defaultAddedLocations, action ) => {
  switch ( action.type ) {
    case ADD_PLACE:
      const { city, location, lat, lng } = action.payload;

      return [
        { city, location, lat, lng, added: true },
        ...savedLocations
      ];

    default:
      return savedLocations;
  }
}