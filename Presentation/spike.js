import http from 'k6/http';
import {sleep} from 'k6';

export let options = {
    stages: [
    { duration: "1m", target: 3000 },
    { duration: "8m", target: 1500 },
    { duration: "2m", target: 10000 },
    { duration: "7m", target: 10000 },
    { duration: "10m", target: 0 },
    ],
   };


export default function () {
    http.get('https://sjinnovation.com');
    sleep(2);
}