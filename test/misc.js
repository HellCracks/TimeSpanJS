///<reference path="../js/jasmine/jasmine.js"/>
///<reference path="../js/timespan.ts"/>

describe("Custom", function () {
    it("Must be true", function () {
        var isTrue = true;
        // ReSharper disable once ExpressionIsAlwaysConst
        expect(isTrue).toBeTruthy();
    });
    it("Compares the version", function () {
        expect(TimeSpan.getVersion()).toBe("1.0.0");
    });
});