// constants
import { CHANGE_PLACE } from '../constants';

const defaultPoint = {
  location: 'Zaporizhzhia, Ukraine',
  lat: 47.83880000000001,
  lng: 35.13956699999994
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