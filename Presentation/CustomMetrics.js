import http from "k6/http";
import { Counter } from "k6/metrics";

let CounterErrors = new Counter("Errors");

export default function () {
  let res = http.get("https://sjinnovation.com");
  let pageTitle = res.html("h1").text().includes("Hire Software Developers with New York Based Project Management Team");

  if (!pageTitle) {
    CounterErrors.add(1);
  }
}
