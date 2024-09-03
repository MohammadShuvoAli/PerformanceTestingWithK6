import http from "k6/http";
import { check } from "k6";
import { Rate } from "k6/metrics";

export let errorRate = new Rate("errors");

export let options = {
  thresholds: {
    errors: ["rate<0.1"], // <10% errors
  },
};

export default function () {
  let response = http.get("https://sjinnovation.com");

  let checks = check(response, {
    "status is 200": (r) => r.status === 200,
    "response time < 500ms": (r) => r.timings.duration < 500,
    "content type is text/html": (r) => r.headers['Content-Type'] === 'text/html',
    "body size is greater than 5000 bytes": (r) => r.body.length > 5000,
  });

  if (!checks) {
    errorRate.add(1);
  }
}