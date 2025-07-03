let nextTime = 0
pins.analogSetPitchPin(AnalogPin.P1)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
let sTime = 50
let lTime = 1000
basic.showLeds(`
    . # . # .
    # . . . #
    . . # . .
    # . . . #
    . # . # .
    `)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        nextTime = input.runningTime() + lTime
        led.unplot(2, 2)
        pins.analogPitch(38000, sTime)
    }
    while (pins.digitalReadPin(DigitalPin.P2) == 0 || input.runningTime() < nextTime) {
    	
    }
    led.plot(2, 2)
})
