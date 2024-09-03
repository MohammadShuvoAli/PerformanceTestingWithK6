import { check } from "k6";
import http from "k6/http";

export default function () {
  let res = http.get("https://sjinnovation.com");
  check(res, {
    "is status 200": (r) => r.status === 200,
    "body size is 2024 bytes": (r) => r.body.length == 2024,
  });
}
