import http from "k6/http";
import { check } from "k6";

export default function() {
    let requests = http.batch([
        [ "GET", "https://test.k6.io/contacts.php"],
        [ "GET", "https://test.k6.io/news.php" ],
        [ "GET", "https://test.k6.io/pi.php?decimals=3"],
        [ "GET", "https://test.k6.io/flip_coin.php"],
        [ "POST", "https://test.k6.io/flip_coin.php", { choice: "heads" }],
        [ "GET", "https://test.k6.io/browser.php"],
    ]);
   
    // Log the status code of the first request
    console.log(requests[0].status);

    // Iterate over all requests and log their status codes
    for (let i = 0; i < requests.length; i++) {
        console.log(requests[i].status);
    }

    // Perform checks to ensure the requests were successful
    for (let i = 0; i < requests.length; i++) {
        check(requests[i], {
            "status is 200": (r) => r.status === 200,
        });
    }
}
