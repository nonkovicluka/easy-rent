import {
    LAT,
    LNG,
    PLACE,
    ADDRESS,
    COUNTRY,
    ACCOMMODATIONS,
    ACCOMMODATION_TYPES,
    ACCOMMODATION,
    MY_ACCOMMODATION,
    DELETE_ACCOMMODATION_IMAGE,
    DELETE_ACCOMMODATION,
    UNCHECKED_ACCOMMODATION,
    APPROVE_ACCOMMODATION
} from '../actions/types';

const INITIAL_STATE = {
    lat: 51.5166293,
    lng: -0.1547547,
    place: '',
    address: '',
    country: null,
    accommodationTypes: [],
    myAccommodation: null,
    accommodations: null,
    accommodation: null,
    uncheckedAccommodation: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LAT:
            return { ...state, lat: action.payload }

        case LNG:
            return { ...state, lng: action.payload }

        case PLACE:
            return { ...state, place: action.payload }

        case ADDRESS:
            return { ...state, address: action.payload }

        case COUNTRY:
            return { ...state, country: action.payload }

        case ACCOMMODATION_TYPES:
            return { ...state, accommodationTypes: action.payload }

        case ACCOMMODATIONS:
            return { ...state, accommodations: action.payload }

        case MY_ACCOMMODATION:
            return { ...state, myAccommodation: action.payload }

        case ACCOMMODATION:
            return { ...state, accommodation: action.payload }

        case UNCHECKED_ACCOMMODATION:
            return { ...state, uncheckedAccommodation: action.payload }

        case DELETE_ACCOMMODATION_IMAGE:

            const newImagesArray = state.accommodation.accommodation_images.filter(img => img.id !== action.payload.id);
            const newEditAccommodation = { ...state.editAccommodation, accommodation_images: newImagesArray };

            return { ...state, accommodation: newEditAccommodation }

        case DELETE_ACCOMMODATION:

            const newMyAccommodation = state.myAccommodation.filter(accomm => accomm.id !== action.payload);

            return { ...state, myAccommodation: newMyAccommodation }

        case APPROVE_ACCOMMODATION:

            const newAccommodation = state.uncheckedAccommodation.filter(accomm => accomm.id !== action.payload);

            return { ...state, uncheckedAccommodation: newAccommodation }

        default:
            return state
    }

}