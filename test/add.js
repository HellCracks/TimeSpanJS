///<reference path="../js/jasmine/jasmine.js"/>
///<reference path="../js/timespan.ts"/>
describe("TimeSpan.add", function () {
    var ts = null;
    beforeEach(function () {
        ts = new TimeSpan();
    });
    afterEach(function () {
        ts = null;
    });
    it("Adds two timespans together", function() {
        var timespan = new TimeSpan(20);
        
        ts = new TimeSpan(20, TimeUnit.Days);
      
        var result = TimeSpan.add(ts, timespan);
        expect(result.days).toBe(20);
        expect(result.ticks).toBe(ts.ticks + timespan.ticks);
    });

    it("Adds all timeunits", function () {
        ts.add(1, TimeUnit.Milliseconds);
        ts.add(2, TimeUnit.Seconds);
        ts.add(3, TimeUnit.Minutes);
        ts.add(4, TimeUnit.Hours);
        ts.add(5, TimeUnit.Days);
        expect(ts.milliseconds).toBe(1);
        expect(ts.seconds).toBe(2);
        expect(ts.minutes).toBe(3);
        expect(ts.hours).toBe(4);
        expect(ts.days).toBe(5);
        
    });
    it("Tries to add invalid values", function() {
        expect(function () { ts.add(20, 20); }).toThrowError('Invalid parameter');
    });
    it("Tries to subtract a invalid value", function () {
        expect(function () { ts.add(20); }).toThrowError('Invalid parameter');
    });
    it("Accesses the timespan via function chaining",function() {
        expect(ts.add(new TimeSpan(2)).ticks).toBe(2);
    });

});