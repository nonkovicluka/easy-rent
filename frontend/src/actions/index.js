import axios from 'axios';
import Geocode from "react-geocode";
import {
    AUTH_USER,
    USERS,
    BAN_USER,
    LAT,
    LNG,
    PLACE,
    ADDRESS,
    COUNTRY,
    ACCOMMODATIONS,
    ACCOMMODATION,
    APPROVE_ACCOMMODATION,
    UNCHECKED_ACCOMMODATION,
    ACCOMMODATION_TYPES,
    MY_ACCOMMODATION,
    DELETE_ACCOMMODATION_IMAGE,
    DELETE_ACCOMMODATION,
    ROOMS,
    ROOM,
    FORM_MESSAGE,
    MESSAGE_CLEAR,
    DELETE_ROOM,
    DELETE_ROOM_IMAGE
} from './types';



// AUTH Actions
export const register = (formProps) => async (dispatch) => {
    try {

        const response = await axios.post('http://localhost:8000/api/auth/register', formProps);

        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);


    }
    catch (e) {

        dispatch({
            type: FORM_MESSAGE, payload: {
                message: 'Email in use',
                color: 'danger',
                visibility: true
            }
        });

    }
};

export const login = (formProps) => async (dispatch) => {

    try {
        const response = await axios.post('http://localhost:8000/api/auth/login', formProps);


        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);


    }
    catch (e) {

        dispatch({
            type: FORM_MESSAGE, payload: {
                message: 'Invalid login credentials',
                color: 'danger',
                visibility: true

            }
        });

    }
};

export const logout = (callback) => (dispatch) => {
    localStorage.removeItem('token');


    dispatch({ type: AUTH_USER, payload: "" });


    callback();
};

export const getUsers = () => async (dispatch) => {

    try {

        const response = await axios.get('http://localhost:8000/api/user/getUsers');

        dispatch({ type: USERS, payload: response.data })

    } catch (e) {
        console.log(e);
    }


};

export const banUser = (id) => async (dispatch) => {

    try {
        await axios.put(`http://localhost:8000/api/user/ban/${id}`);

        dispatch({ type: BAN_USER, payload: id })

    } catch (e) {
        console.log(e);
    }


}



// ACCOMMODATION Actions
export const addressToCords = (address) => (dispatch) => {

    Geocode.setApiKey("AIzaSyC79F6ogLnOzMUGlmHq4qnH3qq2X0LpVJ8");

    Geocode.fromAddress(address)
        .then(response => {
            const { address_components, formatted_address } = response.results[0];

            const placeArray = address_components.filter(prop => prop.types[0] === 'locality' || prop.types[0] === 'postal_town');
            const countryArray = address_components.filter(prop => prop.types[0] === 'country');


            const place = placeArray[0].long_name;
            const country = {
                name: countryArray[0].long_name,
                code: countryArray[0].short_name
            };

            const { lat, lng } = response.results[0].geometry.location;


            dispatch({ type: ADDRESS, payload: formatted_address });
            dispatch({ type: PLACE, payload: place });
            dispatch({ type: COUNTRY, payload: country });
            dispatch({ type: LAT, payload: lat })
            dispatch({ type: LNG, payload: lng })


        })
        .catch(error => console.log('Error ' + error));

};

export const getAccommodationTypes = () => async (dispatch) => {

    try {

        const response = await axios.get('http://localhost:8000/api/accommodationType/getAccommodationTypes');


        dispatch({ type: ACCOMMODATION_TYPES, payload: response.data });

    }
    catch (e) {

        console.error('Error', e);
    }
};

export const accommodationRegister = (formData, callback) => async (dispatch) => {
    try {

        await axios.post('http://localhost:8000/api/accommodation/register', formData);

        dispatch({
            type: FORM_MESSAGE, payload: {
                message: 'Successful registration',
                color: 'success',
                visibility: true


            }
        });
        setTimeout(() => {
            callback();
        }, 1200);

    }
    catch (e) {

        dispatch({
            type: FORM_MESSAGE, payload: {
                message: 'Registration failed',
                color: 'danger',
                visibility: true

            }
        });

    }
};


export const searchAccommodation = (params = null, url = 'http://localhost:8000/api/accommodation/searchAccommodation') => async (dispatch) => {

    try {
        
        const response = await axios.get(url, {
            params
        });

        if (params && params.ownerId) {

            dispatch({ type: MY_ACCOMMODATION, payload: response.data });
        }
        if (params && params.unchecked) {

            dispatch({ type: UNCHECKED_ACCOMMODATION, payload: response.data });

        }
        else {

            dispatch({ type: ACCOMMODATIONS, payload: response.data });




        }
    }
    catch (e) {

        console.error('Error', e);
    }
};


export const editAccommodation = (newAccommodation, callback) => async (dispatch) => {


    try {
        await axios.post('http://localhost:8000/api/accommodation/editAccommodation', newAccommodation);



        dispatch({
            type: FORM_MESSAGE, payload: {
                message: 'Changes saved',
                color: 'success',
                visibility: true


            }
        });
        setTimeout(() => {
            callback();
        }, 1200);


    }
    catch (e) {

        console.error(e)

    }

};

export const quickEdit = (newAccommodation) => async (dispatch) => {


    try {
        await axios.put('http://localhost:8000/api/accommodation/quickEdit', newAccommodation);



    }
    catch (e) {

        console.error(e)

    }

};

export const approveAccommodation = (id) => async (dispatch) => {

    try {
        await axios.put(`http://localhost:8000/api/accommodation/approve/${id}`);

        dispatch({ type: APPROVE_ACCOMMODATION, payload: id })

    } catch (e) {
        console.log(e);
    }


}

export const getAccommodation = (accommodationId) => async (dispatch) => {


    try {

        const response = await axios.get('http://localhost:8000/api/accommodation/get', {
            params: {
                id: accommodationId
            }
        });


        dispatch({ type: ACCOMMODATION, payload: response.data });

    }
    catch (e) {

        console.error(e)

    }


};

export const deleteImage = (img, type) => async (dispatch) => {


    try {
        // await axios.delete('http://localhost:8000/api/accommodation/deleteImage',
        //     {
        //         params: {
        //             image: img,
        //             type
        //         }
        //     });

        if (type === 'accommodation') {

            dispatch({ type: DELETE_ACCOMMODATION_IMAGE, payload: img });
        }
        else {

            dispatch({ type: DELETE_ROOM_IMAGE, payload: img });
        }

    }
    catch (e) {
        console.error(e);
    }
}

export const deleteAccommodation = (accommodationId) => async (dispatch) => {



    try {
        await axios.put(`http://localhost:8000/api/accommodation/delete/${accommodationId}`);

        dispatch({ type: DELETE_ACCOMMODATION, payload: accommodationId })

    }
    catch (e) {
        console.error(e);
    }
}

export const roomRegister = (formData, callback) => async (dispatch) => {


    try {
        await axios.post('http://localhost:8000/api/room/register', formData);

        dispatch({
            type: FORM_MESSAGE, payload: {
                message: 'Successful registration',
                color: 'success',
                visibility: true


            }
        });
        setTimeout(() => {
            callback();
        }, 1200);
    }
    catch (e) {

    }

}

// Room Actions

export const getRooms = (accommodationId, myRooms) => async (dispatch) => {

    try {

        const response = await axios.get('http://localhost:8000/api/room/get', {
            params: {
                id: accommodationId,
                myRooms: myRooms
            }
        });

        dispatch({ type: ROOMS, payload: response.data })

    }
    catch (e) {
        console.error(e);
    }

}

export const getRoom = (roomId) => async (dispatch) => {


    try {

        const response = await axios.get('http://localhost:8000/api/room/getOne', {
            params: {
                id: roomId
            }
        });


        dispatch({ type: ROOM, payload: response.data });

    }
    catch (e) {

        console.error(e)

    }


};

export const getLatLng = (accommodation) => (dispatch) => {


    try {

        dispatch({ type: LAT, payload: accommodation.latitude });
        dispatch({ type: LNG, payload: accommodation.longitude });
    }
    catch (e) {
        console.error(e);
    }


}




export const deleteRoom = (roomId) => async (dispatch) => {



    try {
        await axios.put(`http://localhost:8000/api/room/delete/${roomId}`);

        dispatch({ type: DELETE_ROOM, payload: roomId })

    }
    catch (e) {
        console.error(e);
    }
}

// Reservation Actions

export const reserveRoom = (reservation, callback) => async (dispatch) => {

    try {

        await axios.post('http://localhost:8000/api/room/reservation', reservation);


        dispatch({
            type: FORM_MESSAGE, payload: {
                message: 'Successful reservation',
                color: 'success',
                visibility: true


            }
        });
        setTimeout(() => {
            callback();
        }, 1200);

    }
    catch (e) {

        console.error(e)

    }

}

export const editRoom = (newRoom, callback) => async (dispatch) => {


    try {
        await axios.post('http://localhost:8000/api/room/editRoom', newRoom);



        dispatch({
            type: FORM_MESSAGE, payload: {
                message: 'Changes saved',
                color: 'success',
                visibility: true


            }
        });
        setTimeout(() => {
            callback();
        }, 1200);


    }
    catch (e) {

        console.error(e)

    }

};


// Error Message Actions 

export const clearMessage = () => (dispatch) => {

    dispatch({ type: MESSAGE_CLEAR, payload: null, visibility: false });

}

