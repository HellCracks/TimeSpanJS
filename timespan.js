var TimeSpan = (function () {
    function TimeSpan(days, hours, minutes, seconds, milliseconds, ticks) {
        if (isNaN(ticks)) {
            var totalMilliseconds = (days * 3600 * 24 + hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds;
            this.ticks = totalMilliseconds * 10000;
        } else {
            this.ticks = ticks;
        }
    }
    TimeSpan.prototype.addTicks = function (ticks) {
        this.ticks += ticks;
        return this;
    };
    TimeSpan.prototype.addMilliseconds = function (milliseconds) {
        this.ticks += milliseconds * 10000;
        return this;
    };
    TimeSpan.prototype.addSeconds = function (seconds) {
        this.ticks += seconds * 10000000;
        return this;
    };
    TimeSpan.prototype.addMinutes = function (minutes) {
        this.ticks += 600000000 * minutes;
        return this;
    };
    TimeSpan.prototype.addHours = function (hours) {
        this.ticks += 36000000000 * hours;
        return this;
    };
    TimeSpan.prototype.addDays = function (days) {
        this.ticks += 864000000000 * days;
        return this;
    };
    TimeSpan.prototype.subtractTicks = function (ticks) {
        this.ticks -= ticks;
        return this;
    };
    TimeSpan.prototype.subtractMilliseconds = function (milliseconds) {
        this.ticks -= milliseconds * 10000;
        return this;
    };
    TimeSpan.prototype.subtractSeconds = function (seconds) {
        this.ticks -= seconds * 10000000;
        return this;
    };
    TimeSpan.prototype.subtractMinutes = function (minutes) {
        this.ticks -= 600000000 * minutes;
        return this;
    };
    TimeSpan.prototype.subtractHours = function (hours) {
        this.ticks -= 36000000000 * hours;
        return this;
    };
    TimeSpan.prototype.subtractDays = function (days) {
        this.ticks -= 864000000000 * days;
        return this;
    };

    TimeSpan.prototype.Ticks = function () {
        return this.ticks;
    };
    TimeSpan.prototype.Milliseconds = function () {
        return Math.floor((this.ticks / 10000)) % 1000;
    };
    TimeSpan.prototype.Seconds = function () {
        return Math.floor((this.ticks / 10000000)) % 60;
    };
    TimeSpan.prototype.Minutes = function () {
        return Math.floor((this.ticks / 600000000)) % 60;
    };
    TimeSpan.prototype.Hours = function () {
        return Math.floor((this.ticks / 36000000000)) % 24;
    };
    TimeSpan.prototype.Days = function () {
        return Math.floor((this.ticks / 864000000000));
    };
    TimeSpan.prototype.Add = function (timespan) {
        return new TimeSpan(0, 0, 0, 0, 0, this.ticks + timespan.Ticks());
    };
    TimeSpan.prototype.Subtract = function (timespan) {
        return new TimeSpan(0, 0, 0, 0, 0, this.ticks - timespan.Ticks());
    };
    TimeSpan.Compare = function (timespan1, timespan2) {
        if (timespan1.Ticks() > timespan2.Ticks())
            return 1;
        if (timespan1.Ticks() < timespan2.Ticks())
            return -1;
        return 0;
    };
    TimeSpan.prototype.Duration = function () {
        return new TimeSpan(0, 0, 0, 0, 0, this.ticks >= 0 ? this.ticks : -this.ticks);
    };
    TimeSpan.FromDays = function (days) {
        return TimeSpan.Interval(days, 86400000);
    };
    TimeSpan.FromHours = function (hours) {
        return TimeSpan.Interval(hours, 3600000);
    };
    TimeSpan.FromMinutes = function (minutes) {
        return TimeSpan.Interval(minutes, 60000);
    };
    TimeSpan.FromSeconds = function (seconds) {
        return TimeSpan.Interval(seconds, 1000);
    };
    TimeSpan.FromMilliseconds = function (milliseconds) {
        return TimeSpan.Interval(milliseconds, 1);
    };
    TimeSpan.FromTicks = function (ticks) {
        return new TimeSpan(0, 0, 0, 0, 0, ticks);
    };

    TimeSpan.Interval = function (value, scale) {
        var tmp = value * scale;
        var millis = tmp + (value >= 0 ? 0.5 : -0.5);
        return new TimeSpan(0, 0, 0, 0, 0, Math.floor(millis) * 10000);
    };
    TimeSpan.prototype.Negate = function () {
        return new TimeSpan(0, 0, 0, 0, 0, -this.ticks);
    };
    return TimeSpan;
})();
