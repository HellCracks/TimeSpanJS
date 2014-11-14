/** Values that represent time units. */
var TimeUnit;
(function (TimeUnit) {
    /** Value that represent ticks. */
    TimeUnit[TimeUnit["Ticks"] = 0] = "Ticks";

    /** Value that represent milliseconds. */
    TimeUnit[TimeUnit["Milliseconds"] = 1] = "Milliseconds";

    /** Value that represent seconds. */
    TimeUnit[TimeUnit["Seconds"] = 2] = "Seconds";

    /** Value that represent minutes. */
    TimeUnit[TimeUnit["Minutes"] = 3] = "Minutes";

    /** Value that represent hours. */
    TimeUnit[TimeUnit["Hours"] = 4] = "Hours";

    /** Value that represent days. */
    TimeUnit[TimeUnit["Days"] = 5] = "Days";
})(TimeUnit || (TimeUnit = {}));

/**
* A time span.
* @author  xenon
* @date    14.11.2014
*/
var TimeSpan = (function () {
    /**
    * Constructor.
    * @author  xenon
    * @date    14.11.2014
    * @param   {any}   days            (Optional) the days.
    * @param   {any}   hours           (Optional) the hours.
    * @param   {any}   minutes         (Optional) the minutes.
    * @param   {any}   seconds         (Optional) the seconds.
    * @param   {any}   milliseconds    (Optional) the milliseconds.
    */
    function TimeSpan(days, hours, minutes, seconds, milliseconds) {
        /** true if this object is time span. */
        this.isTimeSpan = true;
        function interval(value, scale) {
            var tmp = value * scale;
            var millis = tmp + (value >= 0 ? 0.5 : -0.5);
            return Math.floor(millis) * 10000;
        }
        ;

        if (arguments.length === 0) {
            // no parameters
            this._ticks = 0;
        } else if (arguments.length === 1) {
            if (arguments[0] instanceof TimeSpan === true) {
                this._ticks = arguments[0].ticks;
            } else if (typeof arguments[0] === "number") {
                // ticks parameter
                this._ticks = arguments[0];
            } else {
                throw Error("Invalid parameter");
            }
        } else if (arguments.length === 2 && typeof arguments[0] === "number" && typeof arguments[1] === "number" && arguments[1] >= 0 && arguments[1] <= 5) {
            switch (arguments[1]) {
                case 0 /* Ticks */:
                    break;
                case 1 /* Milliseconds */:
                    this._ticks = interval(arguments[0], 1);
                    break;
                case 2 /* Seconds */:
                    this._ticks = interval(arguments[0], 1000);
                    break;
                case 3 /* Minutes */:
                    this._ticks = interval(arguments[0], 60000);
                    break;
                case 4 /* Hours */:
                    this._ticks = interval(arguments[0], 3600000);
                    break;
                case 5 /* Days */:
                    this._ticks = interval(arguments[0], 86400000);
                    break;
                default:
                    throw Error("Invalid TimeUnit");
            }
        } else if (!isNaN(days) && !isNaN(hours) && !isNaN(minutes)) {
            // && !isNaN(seconds) && !isNaN(milliseconds)
            if (isNaN(seconds)) {
                seconds = 0;
            }
            if (isNaN(milliseconds)) {
                milliseconds = 0;
            }
            var totalMilliseconds = (days * 3600 * 24 + hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds;
            this._ticks = totalMilliseconds * 10000;
        } else {
            throw Error("Invalid parameters");
        }
    }
    Object.defineProperty(TimeSpan.prototype, "totalDays", {
        /**
        * Total days.
        * @author  xenon
        * @date    14.11.2014
        * @return  The total number of days.
        */
        get: function () {
            return this._ticks * 1.1574074074074074074e-12;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(TimeSpan.prototype, "totalHours", {
        /**
        * Total hours.
        * @author  xenon
        * @date    14.11.2014
        * @return  The total number of hours.
        */
        get: function () {
            return this._ticks * 2.77777777777777778e-11;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(TimeSpan.prototype, "totalMinutes", {
        /**
        * Total minutes.
        * @author  xenon
        * @date    14.11.2014
        * @return  The total number of minutes.
        */
        get: function () {
            return this._ticks * 1.6666666666667e-9;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(TimeSpan.prototype, "totalSeconds", {
        /**
        * Total seconds.
        * @author  xenon
        * @date    14.11.2014
        * @return  The total number of seconds.
        */
        get: function () {
            return this._ticks * (1 / 10000000);
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(TimeSpan.prototype, "totalMilliseconds", {
        /**
        * Total milliseconds.
        * @author  xenon
        * @date    14.11.2014
        * @return  The total number of milliseconds.
        */
        get: function () {
            return this._ticks * (1.0 / 10000);
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(TimeSpan.prototype, "ticks", {
        /**
        * Gets the ticks.
        * @author  xenon
        * @date    14.11.2014
        * @return  A number.
        */
        get: function () {
            return this._ticks;
        },
        /**
        * Set ticks to the given value.
        * @author  xenon
        * @date    14.11.2014
        * @param   {number}    value   The value.
        * @return  A set.
        */
        set: function (value) {
            if (value === undefined || isNaN(value)) {
                throw Error("No value is supplied");
            }
            this._ticks = value;
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(TimeSpan.prototype, "milliseconds", {
        /**
        * Gets the milliseconds.
        * @author  xenon
        * @date    14.11.2014
        * @return  A number.
        */
        get: function () {
            return Math.floor((this._ticks / 10000)) % 1000;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(TimeSpan.prototype, "seconds", {
        /**
        * Gets the seconds.
        * @author  xenon
        * @date    14.11.2014
        * @return  A number.
        */
        get: function () {
            return Math.floor((this._ticks / 10000000)) % 60;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(TimeSpan.prototype, "minutes", {
        /**
        * Gets the minutes.
        * @author  xenon
        * @date    14.11.2014
        * @return  A number.
        */
        get: function () {
            return Math.floor((this._ticks / 600000000)) % 60;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(TimeSpan.prototype, "hours", {
        /**
        * Gets the hours.
        * @author  xenon
        * @date    14.11.2014
        * @return  A number.
        */
        get: function () {
            return Math.floor((this._ticks / 36000000000)) % 24;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(TimeSpan.prototype, "days", {
        /**
        * Gets the days.
        * @author  xenon
        * @date    14.11.2014
        * @return  A number.
        */
        get: function () {
            return Math.floor((this._ticks / 864000000000));
        },
        enumerable: true,
        configurable: true
    });

    /**
    * Adds a.
    * @author  xenon
    * @date    14.11.2014
    * @param   {any}   a   (Optional) any to process.
    * @param   {any}   b   (Optional) any to process.
    * @return  A TimeSpan.
    */
    TimeSpan.prototype.add = function (a, b) {
        if (arguments.length === 1 && a instanceof TimeSpan && a.isTimeSpan) {
            this._ticks += a.ticks;
        } else if (arguments.length === 2 && typeof a === "number" && typeof b === "number" && b >= 0 && b <= 5) {
            switch (arguments[1]) {
                case 0 /* Ticks */:
                    this.ticks += a;
                    break;
                case 1 /* Milliseconds */:
                    this._ticks += a * 10000;
                    break;
                case 2 /* Seconds */:
                    this._ticks += a * 10000000;
                    break;
                case 3 /* Minutes */:
                    this._ticks += a * 600000000;
                    break;
                case 4 /* Hours */:
                    this._ticks += a * 36000000000;
                    break;
                case 5 /* Days */:
                    this._ticks += a * 864000000000;
                    break;
                default:
                    throw Error("Invalid TimeUnit");
            }
        } else {
            throw Error("Invalid parameter");
        }
        return this;
    };

    /**
    * Adds timespan1.
    * @author  xenon
    * @date    14.11.2014
    * @param   {TimeSpan}  timespan1   The first timespan.
    * @param   {TimeSpan}  timespan2   The second timespan.
    * @return  A TimeSpan.
    */
    TimeSpan.add = function (timespan1, timespan2) {
        return new TimeSpan(timespan1.ticks + timespan2.ticks);
    };

    /**
    * Subtracts.
    * @author  xenon
    * @date    14.11.2014
    * @param   {any}   a   (Optional) any to process.
    * @param   {any}   b   (Optional) any to process.
    * @return  A TimeSpan.
    */
    TimeSpan.prototype.subtract = function (a, b) {
        if (arguments.length === 1 && a instanceof TimeSpan && a.isTimeSpan) {
            this.ticks -= a.ticks;
        } else if (arguments.length === 2 && typeof a === "number" && typeof b === "number" && b >= 0 && b <= 5) {
            switch (arguments[1]) {
                case 0 /* Ticks */:
                    this.ticks -= a;
                    break;
                case 1 /* Milliseconds */:
                    this._ticks -= a * 10000;
                    break;
                case 2 /* Seconds */:
                    this._ticks -= a * 10000000;
                    break;
                case 3 /* Minutes */:
                    this._ticks -= a * 600000000;
                    break;
                case 4 /* Hours */:
                    this._ticks -= a * 36000000000;
                    break;
                case 5 /* Days */:
                    this._ticks -= a * 864000000000;
                    break;
                default:
                    throw Error("Invalid TimeUnit");
            }
        } else {
            throw Error("Invalid parameter");
        }
        return this;
    };

    /**
    * Subtracts.
    * @author  xenon
    * @date    14.11.2014
    * @param   {TimeSpan}  timespan1   The first timespan.
    * @param   {TimeSpan}  timespan2   The second timespan.
    * @return  A TimeSpan.
    */
    TimeSpan.subtract = function (timespan1, timespan2) {
        return new TimeSpan(timespan1.ticks - timespan2.ticks);
    };

    /**
    * Compares two TimeSpan objects to determine their relative ordering.
    * @author  xenon
    * @date    14.11.2014
    * @param   {TimeSpan}  timespan1   Time span to be compared.
    * @param   {TimeSpan}  timespan2   Time span to be compared.
    * @return  Negative if 'timespan1' is less than 'timespan2', 0 if they are equal, or positive if
    *          it is greater.
    */
    TimeSpan.compare = function (timespan1, timespan2) {
        if (timespan1.ticks > timespan2.ticks) {
            return 1;
        }
        if (timespan1.ticks < timespan2.ticks) {
            return -1;
        }

        return 0;
    };

    /**
    * Negates this object.
    * @author  xenon
    * @date    14.11.2014
    */
    TimeSpan.prototype.negate = function () {
        this.ticks = (-this.ticks);
    };

    /**
    * Gets the version.
    * @author  xenon
    * @date    14.11.2014
    * @return  The version.
    */
    TimeSpan.getVersion = function () {
        return "1.0.0";
    };

    /**
    * Formats the given format.
    * @author  xenon
    * @date    14.11.2014
    * @param   {string}    format  (Optional) describes the format to use.
    * @return  The formatted value.
    */
    TimeSpan.prototype.format = function (format) {
        var days;
        var hours;
        var minutes;
        var seconds;
        var milliseconds;
        if (format === void (0)) {
            hours = ("00" + this.hours).slice(-"00".length);
            minutes = ("00" + this.minutes).slice(-"00".length);
            seconds = ("00" + this.seconds).slice(-"00".length);
            return hours + ":" + minutes + ":" + seconds;
        } else {
            var containsDays = format.indexOf("~dd") > -1;
            var containsHours = format.indexOf("~hh") > -1;
            var containsMinutes = format.indexOf("~mm") > -1;
            var containsSeconds = format.indexOf("~ss") > -1;
            var containsMilliseconds = format.indexOf("~ms") > -1;
            var containsAnything = containsDays || containsHours || containsMinutes || containsSeconds || containsMilliseconds;
            if (containsAnything) {
                days = ("00" + this.days).slice(-"00".length);
                hours = ("00" + this.hours).slice(-"00".length);
                minutes = ("00" + this.minutes).slice(-"00".length);
                seconds = ("00" + this.seconds).slice(-"00".length);
                milliseconds = ("00" + this.milliseconds).slice(-"00".length);
                return format.replace("~dd", days).replace("~hh", hours).replace("~mm", minutes).replace("~ss", seconds).replace("~ms", milliseconds);
            } else {
                throw Error("Invalid format string");
            }
        }
    };

    /**
    * todo: Add max and min.
    * @author  xenon
    * @date    14.11.2014
    * @param   {string}    formattedtext   The formattedtext.
    * @return  A TimeSpan.
    */
    TimeSpan.parse = function (formattedtext) {
        var ts = new TimeSpan();
        var result;
        if (/^(\d{2})\:(\d{2})\:(\d{2})$/.test(formattedtext)) {
            // hh:mm:ss
            result = formattedtext.match(/^(\d{2})\:(\d{2})\:(\d{2})$/);
            ts.add(parseInt(result[1], 10), 4 /* Hours */);
            ts.add(parseInt(result[2], 10), 3 /* Minutes */);
            ts.add(parseInt(result[3], 10), 2 /* Seconds */);
        } else if (/^(\d{2}):(\d{2})$/.test(formattedtext)) {
            // hh:mm
            result = formattedtext.match(/^(\d{2}):(\d{2})$/);
            ts.add(parseInt(result[1], 10), 4 /* Hours */);
            ts.add(parseInt(result[2], 10), 3 /* Minutes */);
        } else if (/^(\d{2})(\d{2})(\d{2})$/.test(formattedtext)) {
            // hhmmss
            result = formattedtext.match(/^(\d{2})(\d{2})(\d{2})$/);
            ts.add(parseInt(result[1], 10), 4 /* Hours */);
            ts.add(parseInt(result[2], 10), 3 /* Minutes */);
            ts.add(parseInt(result[3], 10), 2 /* Seconds */);
        } else if (/^(\d{2})(\d{2})$/.test(formattedtext)) {
            // hhmm
            result = formattedtext.match(/^(\d{2})(\d{2})$/);
            ts.add(parseInt(result[1], 10), 4 /* Hours */);
            ts.add(parseInt(result[2], 10), 3 /* Minutes */);
        } else if (/^(\d{2})$/.test(formattedtext)) {
            // hh
            result = formattedtext.match(/^(\d{2})$/);
            ts.add(parseInt(result[1], 10), 4 /* Hours */);
        } else if (/^(\d{2})\:(\d{2})\:(\d{2})\.(\d{4})$/.test(formattedtext)) {
            // hh:mm:ss.milliseconds
            result = formattedtext.match(/^(\d{2})\:(\d{2})\:(\d{2})\.(\d{4})$/);
            ts.add(parseInt(result[1], 10), 4 /* Hours */);
            ts.add(parseInt(result[2], 10), 3 /* Minutes */);
            ts.add(parseInt(result[3], 10), 2 /* Seconds */);
            ts.add(parseInt(result[4], 10) / 10.0, 1 /* Milliseconds */);
        } else if (/^(\d{2})(\d{2})(\d{2})\.(\d{4})$/.test(formattedtext)) {
            // hhmmss.milliseconds
            result = formattedtext.match(/^(\d{2})(\d{2})(\d{2})\.(\d{4})$/);
            ts.add(parseInt(result[1], 10), 4 /* Hours */);
            ts.add(parseInt(result[2], 10), 3 /* Minutes */);
            ts.add(parseInt(result[3], 10), 2 /* Seconds */);
            ts.add(parseInt(result[4], 10) / 10.0, 1 /* Milliseconds */);
        } else {
            throw Error("Invalid format");
        }
        return ts;
    };
    return TimeSpan;
})();
//# sourceMappingURL=timespan.js.map
