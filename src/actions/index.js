import axios from 'axios';

//define action type

export const GET_DATA = 'GET_DATA';
export const CREATE_DATA = 'CREATE_DATA';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=';

export function getData() {

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    console.log('request', request)
    return{
        type: GET_DATA,
        payload: request
    };
}

export function createData(props) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,props);
    return{
        type: CREATE_DATA,
        payload: request

    };
}

// export function getData() {
//     return function (dispatch) {
//         axios.get("https://localhost:4000/data")
//
//                 dispatch({type:"GET_DATA_REJECTED  .then(function (response) {
//                 dispatch({type:"GET_DATA",payload:response.data})
//             })
//             .catch(function (err) {",payload:err})
//             })
//
//     }
// }

// export function createData(dispatch) {
//     const request = axios({
//         method: 'POST',
//         url: 'https"//localhost:4000/data',
//         headers: []
//     });
//
//     request.then((response) => {
//         dispatch({type:"CREATE_DATA",payload:response.data})
//     })
//         .catch((err) => {
//             dispatch({type:"CREATE_DATA_REJECTED",payload:err})
//         });
//
//     return {
//         type: CREATE_DATA,
//         payload: request
//     };
// }