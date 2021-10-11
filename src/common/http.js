import axios from 'axios';
import * as OkimokiConstant from './constant';
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import { confirmAlert } from 'react-confirm-alert';

export const get = (url) => {
    return axios({
        method : 'get',
        url : process.env.REACT_APP_URL_API + url,
        headers : {
            'X-Authorization' : 'Bearer '+ localStorage.getItem('token'),
            'Accept': 'application/json',
        }
    })
    .then((res)=> {
        return res;
    })
    .catch(handleError);
}

export const awaitGet = (url) => {
    return axios({
        method : 'get',
        url : process.env.REACT_APP_URL_API + url,
        headers : {
            'X-Authorization' : 'Bearer '+ localStorage.getItem('token'),
            'Accept': 'application/json',
        }
    });
}

export const getRaw = (url) => {
    return axios({
        method : 'get',
        url : process.env.REACT_APP_URL_API + url,
        headers : {
            'Accept': 'application/json',
        }
    })
    .then((res)=> {
        return res;
    })
    .catch(handleError);
}

export const post = (url) => {
    return axios({
        method : 'post',
        url : process.env.REACT_APP_URL_API + url,
        headers : {
            'X-Authorization' : 'Bearer '+ localStorage.getItem('token'),
            'Accept': 'application/json',
        }
    })
    .then((res)=> {
        return res;
    })
    .catch(handleError);
}

export const postRaw = (url) => {
    return axios({
        method : 'post',
        url : process.env.REACT_APP_URL_API + url,
        headers : {
            'Accept': 'application/json',
        }
    })
    .then((res)=> {
        return res;
    })
    .catch(handleError);
}

export const postWithObj = (url, data) => {
    return axios({
        method : 'post',
        url : process.env.REACT_APP_URL_API + url,
        data : data,
        headers : {
            'X-Authorization' : 'Bearer '+ localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    })
    .then((res)=> {
        return res;
    })
    .catch(handleError);
}

export const postWithObjRaw = (url, data) => {
    return axios({
        method : 'post',
        url : process.env.REACT_APP_URL_API + url,
        data : data,
        headers : {
            'Accept': 'application/json',
        }
    })
    .then((res)=> {
        return res;
    })
    .catch(handleError);
}

export const postWithFile = (url, data) => {
    const axiosInstance= axios.create({
        headers : {
            'X-Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'multipart/form-data'
        },
        timeout: 10*1000
    });
    return axiosInstance.post(process.env.REACT_APP_URL_API + url, data)
        .then(res => {
            return res;
        })
        .catch(handleError);
}

export const postBlob = (url, data) => {
    return axios({
        method: 'post',
        url: process.env.REACT_APP_URL_API + url,
        data: data,
        responseType : 'blob',
        headers: {
            'X-Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then((res) => { return res; }).catch(handleError);
}

export const postFile = (url, data) => {
    return axios({
        method: 'post',
        url: process.env.REACT_APP_URL_API + url,
        data: data,
        responseType : 'arraybuffer',
        headers: {
            'X-Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then((res) => { return res; }).catch(handleError);
}

export const deleteReq = (url) => {
    return axios({
        method : 'delete',
        url : process.env.REACT_APP_URL_API + url,
        headers : {
            'X-Authorization' : 'Bearer '+ localStorage.getItem('token'),
            'Accept': 'application/json',
        }
    })
    .then((res)=> {
        return res;
    })
    .catch(handleError);
}

export const loginForToken = (username, password) => {
    return axios({
        method : 'post',
        url : process.env.REACT_APP_URL_API + '/mg/auth/login',
        data : {
            username : username,
            password : password
        },
        headers : {
            'Accept': 'application/json',
        }
    })
    .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', username);
        localStorage.setItem('auth', true);
        return res;
    })
    .catch(handleError);
}

const handleError = (err) => {
    let res = err.response;

    if (res.data.message === OkimokiConstant.HttpBodyContent.INVALID_TOKEN ||
        res.data.message === OkimokiConstant.HttpBodyContent.TOKEN_EXPIRED ) {

        console.log("token error");
        //토큰만료 or 검증오류
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.setItem('auth', false);

        // confirmAlert({
        //     title: '알림',
        //     message: '토큰이 만료되었습니다. 다시 로그인 해주세요.',
        //     buttons: [
        //         {
        //             label: '확인',
        //             onClick: () => {
        //                 //토큰 만료시 혹은 유효하지 않은 토큰인 경우 로그인 창으로 이동함.
        //                 window.location = '/login';
        //                 return 'OK';
        //             }
        //         }
        //     ]
        // });
    } else {
        console.log('response', err);
    }
    return Promise.reject(err.response);
}