///<reference path="../js/timespan.ts"/>
///<reference path="../js/jasmine/jasmine.js"/>
var describe = window.jasmine.describe;
describe("TimeSpan.subtract", function () {

    var TimeSpan = window.TimeSpan || null;
    var TimeUnit = window.TimeUnit || null;
    var it = window.jasmine.it;
    var expect = window.jasmin.expect;
   
    var beforeEach = window.jasmine.beforeEach;
    var afterEach = window.jasmine.afterEach;
    var ts;
    beforeEach(function () {
        ts = new TimeSpan();
    });
    afterEach(function () {
        ts = null;
    });
    it("Subtracts two timespans", function () {
        var timespan = new TimeSpan(20);

        ts = new TimeSpan(20, TimeUnit.Days);

        var result = TimeSpan.subtract( ts, timespan);
        expect(result.days).toBe( 19);
        expect(result.ticks).toBe( ts.ticks - timespan.ticks);
    });

    it("Subtracts all timeunits", function () {
        ts.subtract(1, TimeUnit.Milliseconds);
        ts.subtract(2, TimeUnit.Seconds);
        ts.subtract(3, TimeUnit.Minutes);
        ts.subtract(4, TimeUnit.Hours);
        ts.subtract(5, TimeUnit.Days);
        expect(ts.milliseconds).toBe(-1);
        expect(ts.seconds).toBe(-3);
        expect(ts.minutes).toBe(-4);
        expect(ts.hours).toBe(-5);
        expect(ts.days).toBe(-6);


    });
    it("Tries to subtract invalid values", function () {
        expect(function () {
            ts.subtract(20, 20);
        }).toThrowError("Invalid parameter");
    });
    it("Tries to subtract a invalid value", function () {
        expect(function () {
            ts.subtract(20);
        }).toThrowError("Invalid parameter");
    });
    it("Accesses the timespan via function chaining", function () {
        expect(ts.subtract(new TimeSpan(2)).ticks).toBe(-2);
    });

});
