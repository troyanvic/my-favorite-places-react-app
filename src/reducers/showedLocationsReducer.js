import {
  SHOW_INITIAL_LOCATIONS,
  PLACES_PER_PAGE,
  SHOW_NEXT_LOCATIONS,
  SHOW_PREV_LOCATIONS,
  SHOW_CHOSEN_LOCATIONS
} from '../constants';

export default ( showedLocations = [], action ) => {
  switch ( action.type ) {
    case SHOW_INITIAL_LOCATIONS:
      let locationsForShow = [...action.payload];

      return locationsForShow.slice( 0, PLACES_PER_PAGE );

    case SHOW_NEXT_LOCATIONS:
      let {
        savedLocations: savedLocationsNext,
        paginationCurrPage: paginationCurrPageNext
      } = action.payload;

      let locationsForNext    = [...savedLocationsNext],
          locationsToShowNext = paginationCurrPageNext * PLACES_PER_PAGE;

      return locationsForNext.splice( locationsToShowNext, PLACES_PER_PAGE );

    case SHOW_PREV_LOCATIONS:
      let {
        savedLocations: savedLocationsPrev,
        paginationCurrPage: paginationCurrPagePrev
      } = action.payload;

      let locationsForPrev    = [...savedLocationsPrev],
          locationsToShowPrev = ( paginationCurrPagePrev * PLACES_PER_PAGE ) - ( PLACES_PER_PAGE * 2 );

      return locationsForPrev.splice( locationsToShowPrev, PLACES_PER_PAGE );

    case SHOW_CHOSEN_LOCATIONS:
      let {
        savedLocations: savedLocationsChosen,
        selectedPageNumb
      } = action.payload;

      let chosenPageLocations  = [...savedLocationsChosen],
         locationsToShowChosen = ( selectedPageNumb * PLACES_PER_PAGE ) - PLACES_PER_PAGE;

      return chosenPageLocations.splice( locationsToShowChosen, PLACES_PER_PAGE );

    default:
      return showedLocations;
  }
}