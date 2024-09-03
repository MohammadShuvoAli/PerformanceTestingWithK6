import { Counter } from "k6/metrics";

var MyCounter = new Counter("MyCounterMetrics");

export default function() {
    MyCounter.add(3);
    MyCounter.add(2);
};