// import axios from "axios";
// import { getApiLink } from "./getApiLink";
// import { setUser } from "../redux/toolkitSlice";

// export const login = (data, dispatch) => {
// console.log(data);
//     let tokenParts = data.token;
//     let encodedPayload = tokenParts[1];
//     let decodedPayload = atob(encodedPayload);
//     let payloadObj = JSON.parse(decodedPayload);

//     axios.defaults.headers.get['Authorization'] = `Bearer ${data.token}`
//     axios.get(getApiLink(`/api/user/${payloadObj.id}`), {
//         id: payloadObj.id
//     }).then((res) => {
//         dispatch(setUser(res.data))
//     })
// }


import axios from "axios";
import { getApiLink } from "./getApiLink";
import { setUser } from "../redux/toolkitSlice";

export const login = (data, dispatch) => {
    console.log(data.data); 
    let tokens = data.data.token
    if (data.data && tokens) {
        let decodedPayload = parseJwt(tokens); 
        let userId = decodedPayload.sub; 

        axios.defaults.headers.common['Authorization'] = `Bearer ${tokens}`; 
        axios.get(getApiLink(`/api/auth/login/${userId}`)) 
            .then((res) => {
                dispatch(setUser(res.data.data)); 
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    } else {
        console.error("Token is missing in the data."); 
    }
}

// Функція для декодування JWT токену
function parseJwt(tokens) {
    var base64Url = tokens.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
