import { Trend } from "k6/metrics";

var MyTread = new Trend("MyTrend");

export default function() {
    MyTread.add(1);
    MyTread.add(2);
    MyTread.add(4);
}