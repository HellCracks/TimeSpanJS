Usage
=====
```javascript
var ts = new TimeSpan(1,2,3,4,5); //Generates an new timespan object
// 1 Day, 2 Hours, 3 Minutes, 4 Seconds and 5 Milliseconds
console.log(ts.TotalSeconds()); //Prints 93784.00499999999 
console.log(ts.TotalDays()); // Prints 1.0854630208333333
var ts2 = new TimeSpan(5,4,3,2,1);
var ts3 = ts.Add(ts2);
console.log(ts3.Days()); // 6 Days
ts2 = new TimeSpan(1,2,3,4,5);
ts3 = ts.Subtract(ts2);
console.log(ts3.Days()); // 0 Days
```
TODO
=====
- [x] Create initial class
- [x] Implement Total Functions
- [x] Clean up code
- [x] Create unit tests
- [x] Implement Format Function
- [x] Implement Parse Function
- [x] Create documentation

