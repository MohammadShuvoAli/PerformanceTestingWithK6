import { Gauge } from "k6/metrics";

var MyGauge = new Gauge("MyGaugeMetrics");

export default function() {
    MyGauge.add(5);
    MyGauge.add(2);
    MyGauge.add(3);
};