///<reference path="../js/jasmine/jasmine.js"/>
///<reference path="../js/timespan.ts"/>


describe("TimeSpan.Constructor", function () {
    var ts = null;
    afterEach(function() {
        ts = null;
    });
    it("Creates a new TimeSpan Object",function() {
        ts = new TimeSpan();
        expect(ts.ticks).toBe(0);
        expect(ts.milliseconds).toBe(0);
        expect(ts.seconds).toBe(0);
        expect(ts.minutes).toBe(0);
        expect(ts.hours).toBe(0);
        expect(ts.days).toBe(0);
        
        
        
    });
    it("Creates a new TimeSpan Object with 0 ticks", function () {
        ts = new TimeSpan(0);
        expect(ts.ticks).toBe(0);
        expect(ts.milliseconds).toBe(0);
        expect(ts.seconds).toBe(0);
        expect(ts.minutes).toBe(0);
        expect(ts.hours).toBe(0);
        expect(ts.days).toBe(0);
    });
    it("Creates a copy of a TimeSpan Object", function () {
        ts = new TimeSpan(25);
        expect(ts.ticks).toBe(25);
        expect(ts.milliseconds).toBe(0);
        expect(ts.seconds).toBe(0);
        expect(ts.minutes).toBe(0);
        expect(ts.hours).toBe(0);
        expect(ts.days).toBe(0);
        var ts2 = new TimeSpan(ts);
        expect(ts2.ticks).toBe(25);
        expect(ts2.milliseconds).toBe(0);
        expect(ts2.seconds).toBe(0);
        expect(ts2.minutes).toBe(0);
        expect(ts2.hours).toBe(0);
        expect(ts2.days).toBe(0);
    });
    it("Tries to create a new TimeSpan Object with a invalid parameter", function () {
        expect(function () { ts = new TimeSpan("asdf"); }).toThrow(new Error('Invalid parameter'));


    });
    it("Creates a new TimeSpan Object with 50 ticks", function () {
        ts = new TimeSpan(50);
        expect(ts.ticks).toBe(50);
        expect(ts.milliseconds).toBe(0);
        expect(ts.seconds).toBe(0);
        expect(ts.minutes).toBe(0);
        expect(ts.hours).toBe(0);
        expect(ts.days).toBe(0);
    });
    it("Creates a new TimeSpan Object with 1 day", function () {
        ts = new TimeSpan(1, TimeUnit.Days);
        expect(ts.milliseconds).toBe(0);
        expect(ts.seconds).toBe(0);
        expect(ts.minutes).toBe(0);
        expect(ts.hours).toBe(0);
        expect(ts.days).toBe(1);
    });
    it("Creates a new TimeSpan Object with 1 day, 1 hour, 1 minute, 1 second and 1 millisecond",function() {
        ts = new TimeSpan(1, 1, 1, 1, 1);
        expect(ts.milliseconds).toBe(1);
        expect(ts.seconds).toBe(1);
        expect(ts.minutes).toBe(1);
        expect(ts.hours).toBe(1);
        expect(ts.days).toBe(1);
        

    });
    it("Tries to create a new TimeSpan Object with invalid parameters",function() {
        expect(function () { ts = new TimeSpan(123, 123); }).toThrow(new Error("Invalid parameters"));
    });
});



