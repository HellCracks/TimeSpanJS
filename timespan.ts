class TimeSpan {
    private ticks: number;
    public addTicks(ticks: number) {
        this.ticks += ticks;
    }
    public addMilliseconds(milliseconds: number) {
        this.ticks += milliseconds * 10000;
    }
    public addSeconds(seconds: number) {
        this.ticks += seconds * 10000000;
    }
    public addMinutes(minutes: number) {
        this.ticks += 600000000 * minutes;
    }
    public addHours(hours: number) {
        this.ticks += 36000000000 * hours;
    }
    public addDays(days: number) {
        this.ticks += 864000000000 * days;
    }
    public subtractTicks(ticks: number) {
        this.ticks -= ticks;
    }
    public subtractMilliseconds(milliseconds: number) {
        this.ticks -= milliseconds * 10000;
    }
    public subtractSeconds(seconds: number) {
        this.ticks -= seconds * 10000000;
    }
    public subtractMinutes(minutes: number) {
        this.ticks -= 600000000 * minutes;
    }
    public subtractHours(hours: number) {
        this.ticks -= 36000000000 * hours;
    }
    public subtractDays(days: number) {
        this.ticks -= 864000000000 * days;
    }
    constructor(days: number, hours: number, minutes: number, seconds: number, milliseconds: number, ticks) {
        if (isNaN(ticks)) {
            var totalMilliseconds = (days * 3600 * 24 + hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds;
            this.ticks = totalMilliseconds * 10000;
        } else {
            this.ticks = ticks;
        }
    }
    public TotalDays() {
        return this.ticks * 1.1574074074074074074e-12;
    }
    public TotalHours() {
        return this.ticks * 2.77777777777777778e-11;
    }
    public TotalMinutes() {
        return this.ticks * 1.6666666666667e-9;
    }
    public TotalSeconds() {
        return this.ticks * (1 / 10000000);
    }
    public TotalMilliseconds() {
        return this.ticks * (1.0 / 10000);
    }

    public Ticks() {
        return this.ticks;
    }
    public Milliseconds() {
        return Math.floor((this.ticks / 10000)) % 1000;
    }
    public Seconds() {
        return Math.floor((this.ticks / 10000000)) % 60;
    }
    public Minutes() {
        return Math.floor((this.ticks / 600000000)) % 60;
    }
    public Hours() {
        return Math.floor((this.ticks / 36000000000)) % 24;
    }
    public Days() {
        return Math.floor((this.ticks / 864000000000));
    }
    public Add(timespan: TimeSpan) {
        return new TimeSpan(0, 0, 0, 0, 0, this.ticks + timespan.Ticks())
    }
    public Subtract(timespan: TimeSpan) {
        return new TimeSpan(0, 0, 0, 0, 0, this.ticks - timespan.Ticks())
    }
    public Compare(timespan1: TimeSpan, timespan2: TimeSpan) {
        if (timespan1.Ticks() > timespan2.Ticks()) return 1;
        if (timespan1.Ticks() < timespan2.Ticks()) return -1;
        return 0;
    }
    public Duration() {
        return new TimeSpan(0, 0, 0, 0, 0, this.ticks >= 0 ? this.ticks : -this.ticks);
    }
    static FromDays(days: number) {
        return TimeSpan.Interval(days, 86400000);
    }
    static FromHours(hours: number) {
        return TimeSpan.Interval(hours, 3600000);
    }
    static FromMinutes(minutes: number) {
        return TimeSpan.Interval(minutes, 60000);
    }
    static FromSeconds(seconds: number) {
        return TimeSpan.Interval(seconds, 1000);
    }
    static FromMilliseconds(milliseconds: number) {
        return TimeSpan.Interval(milliseconds, 1);
    }
    static FromTicks(ticks: number) {
        return new TimeSpan(0, 0, 0, 0, 0, ticks);
    }

    static Interval(value: number, scale: number) {
        var tmp = value * scale;
        var millis = tmp + (value >= 0 ? 0.5 : -0.5);
        return new TimeSpan(0, 0, 0, 0, 0, Math.floor(millis) * 10000);
    }
    public Negate() {
        return new TimeSpan(0, 0, 0, 0, 0, -this.ticks);
    }
}
