/// <reference path="../js/timespan.ts"/>
/// <reference path="../js/jasmine/jasmine.js"/>


describe("TimeSpan.format",function() {
    var ts = null;
    beforeEach(function () {
        ts = new TimeSpan();
    });
    afterEach(function() {
        ts = null;
    });
    it("Formats using the ISO 8601", function () {
        expect(ts.format()).toBe("00:00:00");
        ts = new TimeSpan(10, 23, 20, 10,0);
        expect(ts.format()).toBe("23:20:10");
        ts = new TimeSpan(10, 3, 2, 1, 0);
        expect(ts.format()).toBe("03:02:01");
    });
    it("Formats using the string '~hh:~mm:~ss'", function() {
        expect(ts.format("~hh:~mm:~ss")).toBe("00:00:00");
        ts = new TimeSpan(10, 23, 20, 10, 0);
        expect(ts.format("~hh:~mm:~ss")).toBe("23:20:10");
        ts = new TimeSpan(10, 3, 2, 1, 0);
        expect(ts.format("~hh:~mm:~ss")).toBe("03:02:01");
    });
    it("Formats using the string '~hh-~mm-~ss'", function () {
        expect(ts.format("~hh-~mm-~ss")).toBe("00-00-00");
        ts = new TimeSpan(10, 23, 20, 10, 0);
        expect(ts.format("~hh-~mm-~ss")).toBe("23-20-10");
        ts = new TimeSpan(10, 3, 2, 1, 0);
        expect(ts.format("~hh-~mm-~ss")).toBe("03-02-01");
    });
    it("Formats using the string '~dd:~hh:~mm:~ss:~ms'", function () {
        expect(ts.format("~dd:~hh:~mm:~ss:~ms")).toBe("00:00:00:00:00");
        ts = new TimeSpan(10, 23, 20, 10, 0);
        expect(ts.format("~dd:~hh:~mm:~ss:~ms")).toBe("10:23:20:10:00");
        ts = new TimeSpan(10, 3, 2, 1, 0);
        expect(ts.format("~dd:~hh:~mm:~ss:~ms")).toBe("10:03:02:01:00");
    });
    it("Formats using the string '~dd'", function () {
        expect(ts.format("~dd")).toBe("00");
        ts = new TimeSpan(10, 23, 20, 10, 0);
        expect(ts.format("~dd")).toBe("10");
        ts = new TimeSpan(10, 3, 2, 1, 0);
        expect(ts.format("~dd")).toBe("10");
    });
    it("Formats using the string '~hh'", function () {
        expect(ts.format("~hh")).toBe("00");
        ts = new TimeSpan(10, 23, 20, 10, 0);
        expect(ts.format("~hh")).toBe("23");
        ts = new TimeSpan(10, 3, 2, 1, 0);
        expect(ts.format("~hh")).toBe("03");
    });
    it("Formats using the string '~mm'", function () {
        expect(ts.format("~mm")).toBe("00");
        ts = new TimeSpan(10, 23, 20, 10, 0);
        expect(ts.format("~mm")).toBe("20");
        ts = new TimeSpan(10, 3, 2, 1, 0);
        expect(ts.format("~mm")).toBe("02");
    });
    it("Formats using the string '~ss'", function () {
        expect(ts.format("~ss")).toBe("00");
        ts = new TimeSpan(10, 23, 20, 10, 0);
        expect(ts.format("~ss")).toBe("10");
        ts = new TimeSpan(10, 3, 2, 1, 0);
        expect(ts.format("~ss")).toBe("01");
    });
    it("Formats using the string 'ms'", function () {
        expect(ts.format("~ms")).toBe("00");
        ts = new TimeSpan(10, 23, 20, 10, 0);
        expect(ts.format("~ms")).toBe("00");
        ts = new TimeSpan(10, 3, 2, 1, 0);
        expect(ts.format("~ms")).toBe("00");
    });
    it("Tries to format using the string 'asdfxdef'", function () {
       expect(function () { ts.format("asdfxdef"); }).toThrowError('Invalid format string');
    });

});
