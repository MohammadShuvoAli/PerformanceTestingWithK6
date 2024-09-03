import http from "k6/http";
import { check } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export let options = {
    stages: [
    { duration: "5s", target: 20 }, // ramp up
    { duration: "15s", target: 20 },
    { duration: "5s", target: 0 } // ramp down
    ],
   };

export default function () {
    http.get('https://sjinnovation.com');
    sleep(2);
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
