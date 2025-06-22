let nextTime = 0
pins.analogSetPitchPin(AnalogPin.P1)
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
    if (input.buttonIsPressed(Button.A)) {
        nextTime = input.runningTime() + lTime
        led.unplot(2, 2)
        pins.analogPitch(38000, sTime)
    }
    while (input.buttonIsPressed(Button.A) || input.runningTime() < nextTime) {
    	
    }
    led.plot(2, 2)
})
