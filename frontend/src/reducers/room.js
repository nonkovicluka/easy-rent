import { ROOMS, ROOM, DELETE_ROOM, DELETE_ROOM_IMAGE } from '../actions/types';

const INITIAL_STATE = {

    rooms: null,
    room: null
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {


        case ROOMS:
            return { ...state, rooms: action.payload }


        case ROOM:
            return { ...state, room: action.payload }

        case DELETE_ROOM:

            const newMyRooms = state.rooms.filter(room => room.id !== action.payload);

            return { ...state, rooms: newMyRooms }

        case DELETE_ROOM_IMAGE:

            const newImagesArray = state.room.room_images.filter(img => img.id !== action.payload.id);
            const newRoom = { ...state.room, room_images: newImagesArray };

            return { ...state, room: newRoom }

        default:
            return state;

    }
}