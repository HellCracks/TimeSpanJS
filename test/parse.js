/// <reference path="../js/jasmine/jasmine.ts" />
/// <reference path="../js/timespan.ts" />
describe("TimeSpan.parse", function() {
    var ts;
    beforeEach(function() {
        ts = new TimeSpan();
    });
    afterEach(function() {
        ts = null;
    });
    it("Parses the string '23:59:59'", function() {
        ts = TimeSpan.parse("23:59:59");
        expect(ts.days).toBe(0);
        expect(ts.hours).toBe(23);
        expect(ts.minutes).toBe(59);
        expect(ts.seconds).toBe(59);
        expect(ts.milliseconds).toBe(0);

    });
    it("Parses the string '23:59:59.1234'", function() {
        ts = TimeSpan.parse("23:59:59.1234");
        expect(ts.days).toBe(0);
        expect(ts.hours).toBe(23);
        expect(ts.minutes).toBe(59);
        expect(ts.seconds).toBe(59);
        expect(ts.milliseconds).toBe(123);

    });
    it("Parses the string '235959'", function() {
        ts = TimeSpan.parse("235959");
        expect(ts.days).toBe(0);
        expect(ts.hours).toBe(23);
        expect(ts.minutes).toBe(59);
        expect(ts.seconds).toBe(59);
        expect(ts.milliseconds).toBe(0);

    });
    it("Parses the string '235959.1234'", function() {
        ts = TimeSpan.parse("235959.1234");
        expect(ts.days).toBe(0);
        expect(ts.hours).toBe(23);
        expect(ts.minutes).toBe(59);
        expect(ts.seconds).toBe(59);
        expect(ts.milliseconds).toBe(123);

    });
    it("Parses the string '23:59:59'", function() {
        ts = TimeSpan.parse("23:59:59");
        expect(ts.days).toBe(0);
        expect(ts.hours).toBe(23);
        expect(ts.minutes).toBe(59);
        expect(ts.seconds).toBe(59);
        expect(ts.milliseconds).toBe(0);

    });
    it("Parses the string '23:59'", function() {
        ts = TimeSpan.parse("23:59");
        expect(ts.days).toBe(0);
        expect(ts.hours).toBe(23);
        expect(ts.minutes).toBe(59);
        expect(ts.seconds).toBe(0);
        expect(ts.milliseconds).toBe(0);

    });
    it("Parses the string '2359'", function() {
        ts = TimeSpan.parse("2359");
        expect(ts.days).toBe(0);
        expect(ts.hours).toBe(23);
        expect(ts.minutes).toBe(59);
        expect(ts.seconds).toBe(0);
        expect(ts.milliseconds).toBe(0);

    });
    it("Parses the string '23'", function() {
        ts = TimeSpan.parse("23");
        expect(ts.days).toBe(0);
        expect(ts.hours).toBe(23);
        expect(ts.minutes).toBe(0);
        expect(ts.seconds).toBe(0);
        expect(ts.milliseconds).toBe(0);

    });
});