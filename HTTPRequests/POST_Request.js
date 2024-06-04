import http from "k6/http";
import { check } from "k6";

export default function() {
    // POST
    let payload = {
        "name": "Shuvo",
        "job": "QA"
    }

    let res = http.post("https://reqres.in/api/users", JSON.stringify(payload), {
        headers: {
            "Content-Type": "application/json"
        }});
    console.log("POST Method: The name is " + res.json().name);

    // PUT
    let putPayload = {
            "name": "Mohammad Shuvo",
            "job": "QA Engineer"
    }

    let resPut = http.put("https://reqres.in/api/users/2", JSON.stringify(putPayload), {
        headers: {
            "Content-Type": "application/json"
        }});
    console.log("PUT Method: The new name is " + resPut.json().name);

    // PATCH
    let patchPayload = {
        "name": "$huv0",
        "job": "Software QA Engineer"
    }

    let resPatch = http.patch("https://reqres.in/api/users/2", JSON.stringify(patchPayload), {
        headers: {
            "Content-Type": "application/json"
        }});

    console.log("PATCH Method: The patched name is " + resPatch.json().name);

    // DELETE
    let resDelete = http.del("https://reqres.in/api/users/2");
    check(resDelete, {
        'is status 204': (r) => r.status === 204,
    });

    // OPTIONS
    let resOptions = http.options("https://example.org");
    console.log("OPTIONS Method: " + resOptions.headers['Allow']);

    // CUSTOM
    let resCustom = http.request("GET", "https://duckduckgo.com");
    console.log("CUSTOM Method: " + resCustom.status);
}