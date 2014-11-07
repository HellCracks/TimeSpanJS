var TimeSpan = (function () {
    /**
     * Description
     * @method TimeSpan
     * @param {number} days
     * @param {number} hours
     * @param {number} minutes
     * @param {number} seconds
     * @param {number} milliseconds
     * @param {number} ticks
     * @return 
     */
    function TimeSpan(days, hours, minutes, seconds, milliseconds, ticks) {
        if (isNaN(ticks)) {
            var totalMilliseconds = (days * 3600 * 24 + hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds;
            this.ticks = totalMilliseconds * 10000;
        } else {
            this.ticks = ticks;
        }
    }
    /**
     * Description
     * @method addTicks
     * @param {number} ticks
     * @return 
     */
    TimeSpan.prototype.addTicks = function (ticks) {
        this.ticks += ticks;
    };
    /**
     * Description
     * @method addMilliseconds
     * @param {number} milliseconds
     * @return 
     */
    TimeSpan.prototype.addMilliseconds = function (milliseconds) {
        this.ticks += milliseconds * 10000;
    };
    /**
     * Description
     * @method addSeconds
     * @param {number} seconds
     * @return 
     */
    TimeSpan.prototype.addSeconds = function (seconds) {
        this.ticks += seconds * 10000000;
    };
    /**
     * Description
     * @method addMinutes
     * @param {number} minutes
     * @return 
     */
    TimeSpan.prototype.addMinutes = function (minutes) {
        this.ticks += 600000000 * minutes;
    };
    /**
     * Description
     * @method addHours
     * @param {number} hours
     * @return 
     */
    TimeSpan.prototype.addHours = function (hours) {
        this.ticks += 36000000000 * hours;
    };
    /**
     * Description
     * @method addDays
     * @param {number} days
     * @return 
     */
    TimeSpan.prototype.addDays = function (days) {
        this.ticks += 864000000000 * days;
    };
    /**
     * Description
     * @method subtractTicks
     * @param {number} ticks
     * @return 
     */
    TimeSpan.prototype.subtractTicks = function (ticks) {
        this.ticks -= ticks;
    };
    /**
     * Description
     * @method subtractMilliseconds
     * @param {number} milliseconds
     * @return 
     */
    TimeSpan.prototype.subtractMilliseconds = function (milliseconds) {
        this.ticks -= milliseconds * 10000;
    };
    /**
     * Description
     * @method subtractSeconds
     * @param {number} seconds
     * @return 
     */
    TimeSpan.prototype.subtractSeconds = function (seconds) {
        this.ticks -= seconds * 10000000;
    };
    /**
     * Description
     * @method subtractMinutes
     * @param {number} minutes
     * @return 
     */
    TimeSpan.prototype.subtractMinutes = function (minutes) {
        this.ticks -= 600000000 * minutes;
    };
    /**
     * Description
     * @method subtractHours
     * @param {number} hours
     * @return 
     */
    TimeSpan.prototype.subtractHours = function (hours) {
        this.ticks -= 36000000000 * hours;
    };
    /**
     * Description
     * @method subtractDays
     * @param {number} days
     * @return 
     */
    TimeSpan.prototype.subtractDays = function (days) {
        this.ticks -= 864000000000 * days;
    };

    /**
     * Description
     * @method TotalDays
     * @return BinaryExpression
     */
    TimeSpan.prototype.TotalDays = function () {
        return this.ticks * 1.1574074074074074074e-12;
    };
    /**
     * Description
     * @method TotalHours
     * @return BinaryExpression
     */
    TimeSpan.prototype.TotalHours = function () {
        return this.ticks * 2.77777777777777778e-11;
    };
    /**
     * Description
     * @method TotalMinutes
     * @return BinaryExpression
     */
    TimeSpan.prototype.TotalMinutes = function () {
        return this.ticks * 1.6666666666667e-9;
    };
    /**
     * Description
     * @method TotalSeconds
     * @return BinaryExpression
     */
    TimeSpan.prototype.TotalSeconds = function () {
        return this.ticks * (1 / 10000000);
    };
    /**
     * Description
     * @method TotalMilliseconds
     * @return BinaryExpression
     */
    TimeSpan.prototype.TotalMilliseconds = function () {
        return this.ticks * (1.0 / 10000);
    };

    /**
     * Description
     * @method Ticks
     * @return MemberExpression
     */
    TimeSpan.prototype.Ticks = function () {
        return this.ticks;
    };
    /**
     * Description
     * @method Milliseconds
     * @return BinaryExpression
     */
    TimeSpan.prototype.Milliseconds = function () {
        return Math.floor((this.ticks / 10000)) % 1000;
    };
    /**
     * Description
     * @method Seconds
     * @return BinaryExpression
     */
    TimeSpan.prototype.Seconds = function () {
        return Math.floor((this.ticks / 10000000)) % 60;
    };
    /**
     * Description
     * @method Minutes
     * @return BinaryExpression
     */
    TimeSpan.prototype.Minutes = function () {
        return Math.floor((this.ticks / 600000000)) % 60;
    };
    /**
     * Description
     * @method Hours
     * @return BinaryExpression
     */
    TimeSpan.prototype.Hours = function () {
        return Math.floor((this.ticks / 36000000000)) % 24;
    };
    /**
     * Description
     * @method Days
     * @return CallExpression
     */
    TimeSpan.prototype.Days = function () {
        return Math.floor((this.ticks / 864000000000));
    };
    /**
     * Description
     * @method Add
     * @param {TimeSpan} timespan
     * @return NewExpression
     */
    TimeSpan.prototype.Add = function (timespan) {
        return new TimeSpan(0, 0, 0, 0, 0, this.ticks + timespan.Ticks());
    };
    /**
     * Description
     * @method Subtract
     * @param {TimeSpan} timespan
     * @return NewExpression
     */
    TimeSpan.prototype.Subtract = function (timespan) {
        return new TimeSpan(0, 0, 0, 0, 0, this.ticks - timespan.Ticks());
    };
    /**
     * Description
     * @method Compare
     * @param {TimeSpan} timespan1
     * @param {TimeSpan} timespan2
     * @return Literal
     */
    TimeSpan.prototype.Compare = function (timespan1, timespan2) {
        if (timespan1.Ticks() > timespan2.Ticks())
            return 1;
        if (timespan1.Ticks() < timespan2.Ticks())
            return -1;
        return 0;
    };
    /**
     * Description
     * @method Duration
     * @return NewExpression
     */
    TimeSpan.prototype.Duration = function () {
        return new TimeSpan(0, 0, 0, 0, 0, this.ticks >= 0 ? this.ticks : -this.ticks);
    };
    /**
     * Description
     * @method FromDays
     * @param {number} days
     * @return CallExpression
     */
    TimeSpan.FromDays = function (days) {
        return TimeSpan.Interval(days, 86400000);
    };
    /**
     * Description
     * @method FromHours
     * @param {number} hours
     * @return CallExpression
     */
    TimeSpan.FromHours = function (hours) {
        return TimeSpan.Interval(hours, 3600000);
    };
    /**
     * Description
     * @method FromMinutes
     * @param {number} minutes
     * @return CallExpression
     */
    TimeSpan.FromMinutes = function (minutes) {
        return TimeSpan.Interval(minutes, 60000);
    };
    /**
     * Description
     * @method FromSeconds
     * @param {number} seconds
     * @return CallExpression
     */
    TimeSpan.FromSeconds = function (seconds) {
        return TimeSpan.Interval(seconds, 1000);
    };
    /**
     * Description
     * @method FromMilliseconds
     * @param {number} milliseconds
     * @return CallExpression
     */
    TimeSpan.FromMilliseconds = function (milliseconds) {
        return TimeSpan.Interval(milliseconds, 1);
    };
    /**
     * Description
     * @method FromTicks
     * @param {number} ticks
     * @return NewExpression
     */
    TimeSpan.FromTicks = function (ticks) {
        return new TimeSpan(0, 0, 0, 0, 0, ticks);
    };

    /**
     * Description
     * @method Interval
     * @param {number} value
     * @param {number} scale
     * @return NewExpression
     */
    TimeSpan.Interval = function (value, scale) {
        var tmp = value * scale;
        var millis = tmp + (value >= 0 ? 0.5 : -0.5);
        return new TimeSpan(0, 0, 0, 0, 0, Math.floor(millis) * 10000);
    };
    /**
     * Description
     * @method Negate
     * @return NewExpression
     */
    TimeSpan.prototype.Negate = function () {
        return new TimeSpan(0, 0, 0, 0, 0, -this.ticks);
    };
    return TimeSpan;
})();
