import { Rate } from "k6/metrics";

var MyRate = new Rate("MyRateMatric");

export default function() {
    MyRate.add(true);
    MyRate.add(false);
    MyRate.add(1);
    MyRate.add(0);
};