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
- [ ] Clean up code
- [ ] Create unit tests
- [ ] Implement Format Function



Documentation
=============
###TimeSpan Constructor
*If you set ticks, the other options will be ignored*    
**new TimeSpan(days, hours, minutes, seconds, milliseconds, optional: ticks);**
*Generates a new TimeSpan object with the specified options*

##Static Functions
**TimeSpan.Compare(timespan1,timespan2)**
*Returns 0 if the two timespans are eqal, 1 if timespan1 > timespan2 and -1 if timepsan1 < timespan2*
###From Functions
*Generate a new timespan object with a specific time unit*

**TimeSpan.FromTicks(ticks)**
*Generates a new timespan object with the specified ticks*  
**TimeSpan.FromMilliseconds(milliseconds)**
*Generates a new timespan object with the specified milliseconds*  
**TimeSpan.FromSeconds(seconds)**
*Generates a new timespan object with the specified seconds*  
**TimeSpan.FromMinutes(minutes)**
*Generates a new timespan object with the specified minutes*  
**TimeSpan.FromHours(hours)**
*Generates a new timespan object with the specified hours*  
**TimeSpan.FromDays(days)**
*Generates a new timespan object with the specified days*  

##Non-Static Functions
###Add Functions
**TimeSpan.Add(timespan)**
*Adds two timespans and returns a new TimeSpan object with the resulting time*  
**TimeSpan.addTicks(ticks)**
*Adds the ticks to the timespan*  
**TimeSpan.addMilliseconds(milliseconds)**
*Adds the milliseconds to the timespan*  
**TimeSpan.addSeconds(seconds)**
*Adds the seconds to the timespan*  
**TimeSpan.addMinutes(minutes)**
*Adds the minutes to the timespan*  
**TimeSpan.addHours(hours)**
*Adds the hours to the timespan*  
**TimeSpan.addDays(days)**
*Adds the days to the timespan*  
###Subtract Functions

**TimeSpan.Subtract(timespan)**
*Subtracts two timespans and returns a new TimeSpan object with the resulting time*  
**You can also use the add Methods with a negative value**
*Means TimeSpan.subtractTimeUnit(value) is the same as TimeSpan.addTimeUnit(-value)*  
**TimeSpan.subtractTicks(ticks)**
*Subtracts the ticks from the timespan*  
**TimeSpan.subtractMilliseconds(milliseconds)**
*Subtracts the milliseconds from the timespan*  
**TimeSpan.subtractSeconds(seconds)**
*Subtracts the seconds from the timespan*  
**TimeSpan.subtractMinutes(minutes)**
*Subtracts the minutes from the timespan*  
**TimeSpan.subtractHours(hours)**
*Subtracts the hours from the timespan*  
**TimeSpan.subtractDays(days)**
*Subtracts the days from the timespan*  

###Properties
**TimeSpan.Ticks()**
*Returns the ticks of the timespan object*  
**TimeSpan.Milliseconds()**
*Returns the milliseconds of the timespan object*  
**TimeSpan.Seconds()**
*Returns the seconds of the timespan object*  
**TimeSpan.Minutes()**
*Returns the minutes of the timespan object*  
**TimeSpan.Hours()**
*Returns the hours of the timespan object*  
**TimeSpan.Days()**
*Returns the days of the timespan object*  

  
**TimeSpan.TotalMilliseconds()**
*Returns the total milliseconds of the timespan object*  
**TimeSpan.TotalSeconds()**
*Returns the total seconds of the timespan object*  
**TimeSpan.TotalMinutes()**
*Returns the total minutes of the timespan object*  
**TimeSpan.TotalHours()**
*Returns the total hours of the timespan object*  
**TimeSpan.TotalDays()**
*Returns the total days of the timespan object*  
###Miscellaneous 
**TimeSpan.Negate()**
*Creates a new timespan, with the negated time and return it*









