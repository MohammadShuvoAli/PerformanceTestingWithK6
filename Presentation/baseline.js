import http from 'k6/http';
import {sleep} from 'k6';

export let options = {
    stages: [
    { duration: "5s", target: 10 },
    { duration: "30s", target: 10 },
    { duration: "5s", target: 0 }
    ],
   };

export default function () {
    http.get('https://sjinnovation.com');
    sleep(2);
}