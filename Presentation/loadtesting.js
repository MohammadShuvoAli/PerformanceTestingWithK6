import http from 'k6/http';
import {sleep} from 'k6';

export let options = {
    stages: [
    { duration: "5m", target: 2000 }, // ramp up
    { duration: "15m", target: 2000 }, //
    { duration: "5m", target: 0 } // ramp down
    ],
   };

export default function () {
    http.get('https://sjinnovation.com');
    sleep(2);
}