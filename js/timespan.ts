/** Values that represent time units. */
enum TimeUnit {
    /** Value that represent ticks. */
    Ticks,
    /** Value that represent milliseconds. */
    Milliseconds,
    /** Value that represent seconds. */
    Seconds,
    /** Value that represent minutes. */
    Minutes,
    /** Value that represent hours. */
    Hours,
    /** Value that represent days. */
    Days
}

/**
 * A time span.
 * @author  xenon
 * @date    14.11.2014
 */

class TimeSpan {

    private _ticks: number;

    /**
     * Default constructor.     
     * @author  xenon
     * @date    14.11.2014
     */

    constructor();

    /**
     * Copy constructor.     
     * @author  xenon
     * @date    14.11.2014     
     * @param   {TimeSpan}  timespan    The timespan.
     */
    constructor(timespan: TimeSpan);
    constructor(ticks: number);

    /**
     * Constructor.
     * @author  xenon
     * @date    14.11.2014 
     * @param   {number}    value       The value.
     * @param   {TimeUnit}  timeunit    The timeunit.
     */
    constructor(value: number, timeunit: TimeUnit);

    /**
     * Constructor.
     * @author  xenon
     * @date    14.11.2014
     * @param   {number}    days    The days.
     * @param   {number}    hours   The hours.
     * @param   {number}    minutes The minutes.
     */
    constructor(days: number, hours: number, minutes: number);

    /**
     * Constructor.
     * @author  xenon
     * @date    14.11.2014
     * @param   {number}    days    The days.
     * @param   {number}    hours   The hours.
     * @param   {number}    minutes The minutes.
     * @param   {number}    seconds The seconds.
     */
    constructor(days: number, hours: number, minutes: number, seconds: number);

    /**
     * Constructor.
     * @author  xenon
     * @date    14.11.2014
     * @param   {number}    days            The days.
     * @param   {number}    hours           The hours.
     * @param   {number}    minutes         The minutes.
     * @param   {number}    seconds         The seconds.
     * @param   {number}    milliseconds    The milliseconds.
     */
    constructor(days: number, hours: number, minutes: number, seconds: number, milliseconds: number);

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
    constructor(days?: any, hours?: any, minutes?: any, seconds?: any, milliseconds?: any) {
        function interval(value: number, scale: number): number {
            var tmp: number = value * scale;
            var millis: number = tmp + (value >= 0 ? 0.5 : -0.5);
            return Math.floor(millis) * 10000;
        };

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

        } else if (arguments.length === 2 && typeof arguments[0] === "number" &&
            typeof arguments[1] === "number" && arguments[1] >= 0 && arguments[1] <= 5) {

            switch (arguments[1]) {
                case TimeUnit.Ticks:
                    break;
                case TimeUnit.Milliseconds:
                    this._ticks = interval(arguments[0], 1);
                    break;
                case TimeUnit.Seconds:
                    this._ticks = interval(arguments[0], 1000);
                    break;
                case TimeUnit.Minutes:
                    this._ticks = interval(arguments[0], 60000);
                    break;
                case TimeUnit.Hours:
                    this._ticks = interval(arguments[0], 3600000);
                    break;
                case TimeUnit.Days:
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
            var totalMilliseconds: number = (days * 3600 * 24 + hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds;
            this._ticks = totalMilliseconds * 10000;
        } else {

            throw Error("Invalid parameters");
        }


    }

    /**
     * Total days.
     * @author  xenon
     * @date    14.11.2014
     * @return  The total number of days.
     */

    get totalDays(): number {

        return this._ticks * 1.1574074074074074074e-12;
    }

    /**
     * Total hours.
     * @author  xenon
     * @date    14.11.2014
     * @return  The total number of hours.
     */

    get totalHours(): number {
        return this._ticks * 2.77777777777777778e-11;
    }

    /**
     * Total minutes.
     * @author  xenon
     * @date    14.11.2014
     * @return  The total number of minutes.
     */

    get totalMinutes(): number {
        return this._ticks * 1.6666666666667e-9;
    }

    /**
     * Total seconds.
     * @author  xenon
     * @date    14.11.2014
     * @return  The total number of seconds.
     */

    get totalSeconds(): number {
        return this._ticks * (1 / 10000000);
    }

    /**
     * Total milliseconds.
     * @author  xenon
     * @date    14.11.2014
     * @return  The total number of milliseconds.
     */

    get totalMilliseconds(): number {
        return this._ticks * (1.0 / 10000);
    }

    /**
     * Gets the ticks.
     * @author  xenon
     * @date    14.11.2014
     * @return  A number.
     */

    get ticks(): number {
        return this._ticks;
    }

    /**
     * Set ticks to the given value.
     * @author  xenon
     * @date    14.11.2014
     * @param   {number}    value   The value.
     * @return  A set.
     */

    set ticks(value: number) {

        if (value === undefined || isNaN(value)) {
            throw Error("No value is supplied");
        }
        this._ticks = value;
    }

    /**
     * Gets the milliseconds.
     * @author  xenon
     * @date    14.11.2014
     * @return  A number.
     */

    get milliseconds(): number {
        return Math.floor((this._ticks / 10000)) % 1000;
    }

    /**
     * Gets the seconds.
     * @author  xenon
     * @date    14.11.2014
     * @return  A number.
     */

    get seconds(): number {
        return Math.floor((this._ticks / 10000000)) % 60;
    }

    /**
     * Gets the minutes.
     * @author  xenon
     * @date    14.11.2014
     * @return  A number.
     */

    get minutes(): number {
        return Math.floor((this._ticks / 600000000)) % 60;
    }

    /**
     * Gets the hours.
     * @author  xenon
     * @date    14.11.2014
     * @return  A number.
     */

    get hours(): number {
        return Math.floor((this._ticks / 36000000000)) % 24;
    }

    /**
     * Gets the days.
     * @author  xenon
     * @date    14.11.2014
     * @return  A number.
     */

    get days(): number {
        return Math.floor((this._ticks / 864000000000));
    }

    /**
     * Adds timespan.
     * @author  xenon
     * @date    14.11.2014
     * @param   {TimeSpan}  timespan    The timespan to add.
     * @return  A TimeSpan.
     */

    public add(timespan: TimeSpan): TimeSpan;

    /**
     * Adds value.
     * @author  xenon
     * @date    14.11.2014
     * @param   {number}    value       The value.
     * @param   {TimeUnit}  timeunit    The timeunit.
     * @return  A TimeSpan.
     */
    public add(value: number, timeunit: TimeUnit): TimeSpan;

    /**
     * Adds a.
     * @author  xenon
     * @date    14.11.2014
     * @param   {any}   a   (Optional) any to process.
     * @param   {any}   b   (Optional) any to process.
     * @return  A TimeSpan.
     */
    public add(a?: any, b?: any): TimeSpan {
        if (arguments.length === 1 && a instanceof TimeSpan && a.isTimeSpan) {
            this._ticks += a.ticks;
        } else if (arguments.length === 2 && typeof a === "number" && typeof b === "number" && b >= 0 && b <= 5) {
            switch (arguments[1]) {
                case TimeUnit.Ticks:
                    this.ticks += a;
                    break;
                case TimeUnit.Milliseconds:
                    this._ticks += a * 10000;
                    break;
                case TimeUnit.Seconds:
                    this._ticks += a * 10000000;
                    break;
                case TimeUnit.Minutes:
                    this._ticks += a * 600000000;
                    break;
                case TimeUnit.Hours:
                    this._ticks += a * 36000000000;
                    break;
                case TimeUnit.Days:
                    this._ticks += a * 864000000000;
                    break;
                default:
                    throw Error("Invalid TimeUnit");
            }

        } else {
            throw Error("Invalid parameter");
        }
        return this;
    }

    /**
     * Adds timespan1.
     * @author  xenon
     * @date    14.11.2014
     * @param   {TimeSpan}  timespan1   The first timespan.
     * @param   {TimeSpan}  timespan2   The second timespan.
     * @return  A TimeSpan.
     */

    static add(timespan1: TimeSpan, timespan2: TimeSpan): TimeSpan {
        return new TimeSpan(timespan1.ticks + timespan2.ticks);
    }

    /**
     * Subtracts the given timespan.
     * @author  xenon
     * @date    14.11.2014
     * @param   {TimeSpan}  timespan    The timespan.
     * @return  A TimeSpan.
     */

    public subtract(timespan: TimeSpan): TimeSpan;

    /**
     * Subtracts.
     * @author  xenon
     * @date    14.11.2014
     * @param   {number}    value       The value.
     * @param   {TimeUnit}  timeunit    The timeunit.
     * @return  A TimeSpan.
     */
    public subtract(value: number, timeunit: TimeUnit): TimeSpan;

    /**
     * Subtracts.
     * @author  xenon
     * @date    14.11.2014
     * @param   {any}   a   (Optional) any to process.
     * @param   {any}   b   (Optional) any to process.
     * @return  A TimeSpan.
     */
    public subtract(a?: any, b?: any): TimeSpan {
        if (arguments.length === 1 && a instanceof TimeSpan && a.isTimeSpan) {
            this.ticks -= a.ticks;
        } else if (arguments.length === 2 && typeof a === "number" && typeof b === "number" && b >= 0 && b <= 5) {
            switch (arguments[1]) {
                case TimeUnit.Ticks:
                    this.ticks -= a;
                    break;
                case TimeUnit.Milliseconds:
                    this._ticks -= a * 10000;
                    break;
                case TimeUnit.Seconds:
                    this._ticks -= a * 10000000;
                    break;
                case TimeUnit.Minutes:
                    this._ticks -= a * 600000000;
                    break;
                case TimeUnit.Hours:
                    this._ticks -= a * 36000000000;
                    break;
                case TimeUnit.Days:
                    this._ticks -= a * 864000000000;
                    break;
                default:
                    throw Error("Invalid TimeUnit");
            }

        } else {
            throw Error("Invalid parameter");
        }
        return this;
    }

    /**
     * Subtracts.
     * @author  xenon
     * @date    14.11.2014
     * @param   {TimeSpan}  timespan1   The first timespan.
     * @param   {TimeSpan}  timespan2   The second timespan.
     * @return  A TimeSpan.
     */

    static subtract(timespan1: TimeSpan, timespan2: TimeSpan): TimeSpan {
        return new TimeSpan(timespan1.ticks - timespan2.ticks);
    }

    /**
     * Compares two TimeSpan objects to determine their relative ordering.
     * @author  xenon
     * @date    14.11.2014
     * @param   {TimeSpan}  timespan1   Time span to be compared.
     * @param   {TimeSpan}  timespan2   Time span to be compared.
     * @return  Negative if 'timespan1' is less than 'timespan2', 0 if they are equal, or positive if
     *          it is greater.
     */

    static compare(timespan1: TimeSpan, timespan2: TimeSpan): number {
        if (timespan1.ticks > timespan2.ticks) {
            return 1;
        }
        if (timespan1.ticks < timespan2.ticks) {
            return -1;
        }

        return 0;
    }

    /**
     * Negates this object.
     * @author  xenon
     * @date    14.11.2014
     */

    public negate(): void {
        this.ticks = (-this.ticks);
    }

    /** true if this object is time span. */
    isTimeSpan: boolean = true;

    /**
     * Gets the version.
     * @author  xenon
     * @date    14.11.2014
     * @return  The version.
     */

    static getVersion(): string {
        return "1.0.0";
    }

    /**
     * Formats the given format.
     * @author  xenon
     * @date    14.11.2014
     * @param   {string}    format  (Optional) describes the format to use.
     * @return  The formatted value.
     */

    public format(format?: string): string {
        var days: string;
        var hours: string;
        var minutes: string;
        var seconds: string;
        var milliseconds: string;
        if (format === void (0)) {
            hours = ("00" + this.hours).slice(-"00".length);
            minutes = ("00" + this.minutes).slice(-"00".length);
            seconds = ("00" + this.seconds).slice(-"00".length);
            return hours + ":" + minutes + ":" + seconds;
        } else {
            var containsDays: boolean = format.indexOf("~dd") > -1;
            var containsHours: boolean = format.indexOf("~hh") > -1;
            var containsMinutes: boolean = format.indexOf("~mm") > -1;
            var containsSeconds: boolean = format.indexOf("~ss") > -1;
            var containsMilliseconds: boolean = format.indexOf("~ms") > -1;
            var containsAnything: boolean = containsDays || containsHours || containsMinutes || containsSeconds || containsMilliseconds;
            if (containsAnything) {
                days = ("00" + this.days).slice(-"00".length);
                hours = ("00" + this.hours).slice(-"00".length);
                minutes = ("00" + this.minutes).slice(-"00".length);
                seconds = ("00" + this.seconds).slice(-"00".length);
                milliseconds = ("00" + this.milliseconds).slice(-"00".length);
                return format.replace("~dd", days).replace("~hh", hours).replace("~mm", minutes).
                    replace("~ss", seconds).replace("~ms", milliseconds);
            } else {
                throw Error("Invalid format string");
            }
        }
    }

    /**
     * todo: Add max and min.
     * @author  xenon
     * @date    14.11.2014
     * @param   {string}    formattedtext   The formattedtext.
     * @return  A TimeSpan.
     */

    static parse(formattedtext: string): TimeSpan {
        var ts: TimeSpan = new TimeSpan();
        var result: any;
        if (/^(\d{2})\:(\d{2})\:(\d{2})$/.test(formattedtext)) {
            // hh:mm:ss
            result = formattedtext.match(/^(\d{2})\:(\d{2})\:(\d{2})$/);
            ts.add(parseInt(result[1], 10), TimeUnit.Hours);
            ts.add(parseInt(result[2], 10), TimeUnit.Minutes);
            ts.add(parseInt(result[3], 10), TimeUnit.Seconds);
        } else if (/^(\d{2}):(\d{2})$/.test(formattedtext)) {
            // hh:mm
            result = formattedtext.match(/^(\d{2}):(\d{2})$/);
            ts.add(parseInt(result[1], 10), TimeUnit.Hours);
            ts.add(parseInt(result[2], 10), TimeUnit.Minutes);
        } else if (/^(\d{2})(\d{2})(\d{2})$/.test(formattedtext)) {
            // hhmmss
            result = formattedtext.match(/^(\d{2})(\d{2})(\d{2})$/);
            ts.add(parseInt(result[1], 10), TimeUnit.Hours);
            ts.add(parseInt(result[2], 10), TimeUnit.Minutes);
            ts.add(parseInt(result[3], 10), TimeUnit.Seconds);
        } else if (/^(\d{2})(\d{2})$/.test(formattedtext)) {
            // hhmm
            result = formattedtext.match(/^(\d{2})(\d{2})$/);
            ts.add(parseInt(result[1], 10), TimeUnit.Hours);
            ts.add(parseInt(result[2], 10), TimeUnit.Minutes);
        } else if (/^(\d{2})$/.test(formattedtext)) {
            // hh
            result = formattedtext.match(/^(\d{2})$/);
            ts.add(parseInt(result[1], 10), TimeUnit.Hours);
        } else if (/^(\d{2})\:(\d{2})\:(\d{2})\.(\d{4})$/.test(formattedtext)) {
            // hh:mm:ss.milliseconds
            result = formattedtext.match(/^(\d{2})\:(\d{2})\:(\d{2})\.(\d{4})$/);
            ts.add(parseInt(result[1], 10), TimeUnit.Hours);
            ts.add(parseInt(result[2], 10), TimeUnit.Minutes);
            ts.add(parseInt(result[3], 10), TimeUnit.Seconds);
            ts.add(parseInt(result[4], 10) / 10.0, TimeUnit.Milliseconds);
        } else if (/^(\d{2})(\d{2})(\d{2})\.(\d{4})$/.test(formattedtext)) {
            // hhmmss.milliseconds
            result = formattedtext.match(/^(\d{2})(\d{2})(\d{2})\.(\d{4})$/);
            ts.add(parseInt(result[1], 10), TimeUnit.Hours);
            ts.add(parseInt(result[2], 10), TimeUnit.Minutes);
            ts.add(parseInt(result[3], 10), TimeUnit.Seconds);
            ts.add(parseInt(result[4], 10) / 10.0, TimeUnit.Milliseconds);
        } else {
            throw Error("Invalid format");
        }
        return ts;
    }

}