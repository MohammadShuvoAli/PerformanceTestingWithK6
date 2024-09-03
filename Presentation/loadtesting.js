import http from 'k6/http';
import {sleep} from 'k6';

export let options = {
    stages: [
    { duration: "10s", target: 20 }, // ramp up
    { duration: "30s", target: 20 },
    { duration: "10s", target: 0 } // ramp down
    ],
   };

export default function () {
    http.get('https://sjinnovation.com');
    sleep(2);
}