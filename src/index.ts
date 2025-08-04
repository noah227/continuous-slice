/**
 * number (milliseconds)
 * [number, number] (random start and random end, milliseconds)
 */
type TInterval = number | [number, number]

type TCallback = (s: string, isFinal?: boolean, index?: number) => any

/**
 *
 * @param s
 * @param interval
 * @param callback
 */
export default (s: string, interval: TInterval, callback: TCallback) => {
    const genInterval = () => {
        if (typeof interval === "number") return interval
        else {
            const [s, e] = interval
            return Math.floor(s + Math.random() * (e - s))
        }
    }

    const runner = (count = 0) => {
        const sliceIndex = count + 1
        if (sliceIndex > s.length) return
        callback(s.slice(0, sliceIndex), sliceIndex === s.length, sliceIndex)
        setTimeout(() => {
            runner(count + 1)
        }, genInterval())
    }

    runner()
}
