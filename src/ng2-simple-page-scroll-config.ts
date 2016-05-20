export interface IEasingFunction {
    /**
     *
     * Examples may be found at https://github.com/gdsmith/jquery.easing/blob/master/jquery.easing.js
     * or http://gizma.com/easing/
     * @param t current time
     * @param b beginning value
     * @param c change In value
     * @param d duration
     */
    (t:number, b:number, c:number, d:number):number;
}

export class SimplePageScrollConfig {
    private static _easingFunction:IEasingFunction = (t:number, b:number, c:number, d:number):number => {
        // Linear easing
        return c * t / d + b;
    };
    public static _interval:number = 10;
    public static defaultDuration:number = 1250;
    public static defaultScrollOffset:number = 0;

    // Getter and setter to avoid auto completion to suggest calling the method
    static get defaultEasingFunction():IEasingFunction {
        return SimplePageScrollConfig._easingFunction;
    }

    static set defaultEasingFunction(easingFunction:IEasingFunction) {
        SimplePageScrollConfig._easingFunction = easingFunction;
    }
}