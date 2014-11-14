Usage
=====
```javascript
var ts = new TimeSpan(20,TimeUnit.Days);
var ts2 = new TimeSpan(15,TimeUnit.Days);
var result = TimeSpan.add(ts,ts2);
console.log(result == ts.add(ts2));
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

