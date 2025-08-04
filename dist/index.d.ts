/**
 * number (milliseconds)
 * [number, number] (random start and random end, milliseconds)
 */
type TInterval = number | [number, number];
type TCallback = (s: string, isFinal?: boolean, index?: number) => any;
/**
 *
 * @param s
 * @param interval
 * @param callback
 */
declare const _default: (s: string, interval: TInterval, callback: TCallback) => void;
export default _default;
