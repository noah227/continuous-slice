/**
 *
 * @param s
 * @param interval
 * @param callback
 */
var index = (s, interval, callback) => {
    const genInterval = () => {
        if (typeof interval === "number")
            return interval;
        else {
            const [s, e] = interval;
            return Math.floor(s + Math.random() * (e - s));
        }
    };
    const runner = (count = 0) => {
        const sliceIndex = count + 1;
        if (sliceIndex > s.length)
            return;
        callback(s.slice(0, sliceIndex), sliceIndex === s.length, sliceIndex);
        setTimeout(() => {
            runner(count + 1);
        }, genInterval());
    };
    runner();
};

export { index as default };
//# sourceMappingURL=index.js.map
