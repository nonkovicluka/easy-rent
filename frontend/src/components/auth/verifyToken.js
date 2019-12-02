import jwt from 'jsonwebtoken';

export const verifyToken = () => {

    const token = localStorage.getItem('token');
    if (!token) {
        return '';
    }

    const decodedToken = jwt.decode(token, { complete: true });
    const expiration = decodedToken.payload.exp * 1000;
    const dateNow = new Date();


    if (expiration < dateNow.getTime()) {

        localStorage.removeItem('token')
        return '';
    }
    return token;
};