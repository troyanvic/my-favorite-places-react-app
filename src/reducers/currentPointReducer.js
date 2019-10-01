// constants
import { CHANGE_PLACE } from '../constants';

const defaultPoint = {
  location: 'Kiev',
  lat: 50.4501,
  lng: 30.5234
};

export default ( currentPlace = defaultPoint, action ) => {
  switch ( action.type ) {
    case CHANGE_PLACE:
      const { location, lat, lng } = action.payload;

      return { ...currentPlace, location, lat, lng };

    default:
      return currentPlace;
  }
}