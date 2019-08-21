
import axios from 'axios';
// @TODO custom api url here
const instance = axios.create({
// we change our server from firebase to local  baseURL: 'https://todo-app-course.firebaseio.com'
    baseURL: 'http://localhost:8080',
}
);

export default instance