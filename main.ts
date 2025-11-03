namespace MyInput {
    //% blockId=MyInput_distance_m block="distance (m)"
    //% blockSetVariable="distance"
    //% tooltip="Returns distance in meters"
    export function distanceM(): number {
        const trig = DigitalPin.P1
        const echo = DigitalPin.P2

        pins.setPull(trig, PinPullMode.PullNone)
        pins.digitalWritePin(trig, 0)
        control.waitMicros(2)
        pins.digitalWritePin(trig, 1)
        control.waitMicros(10)
        pins.digitalWritePin(trig, 0)

        const duration = pins.pulseIn(echo, PulseValue.High, 25000)
        const distanceCm = duration / 58
        const distanceM = distanceCm / 100

        return Math.round(distanceM * 1000) / 1000
    }
}
