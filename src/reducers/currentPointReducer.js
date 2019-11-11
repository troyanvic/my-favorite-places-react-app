// constants
import { CHANGE_PLACE } from '../constants';

const defaultPoint = {
  city: 'Zaporizhzhia',
  location: 'Zaporizhzhia, Ukraine',
  lat: 47.83880000000001,
  lng: 35.13956699999994
};

export default ( currentPlace = defaultPoint, action ) => {
  switch ( action.type ) {
    case CHANGE_PLACE:
      const { city, location, lat, lng } = action.payload;

      return { ...currentPlace, city, location, lat, lng };

    default:
      return currentPlace;
  }
}