let nextTime = 0
pins.analogSetPitchPin(AnalogPin.P1)
let sTime = 100
let lTime = 1000
basic.showLeds(`
    . # . # .
    # . . . #
    . . # . .
    # . . . #
    . # . # .
    `)
basic.forever(function () {
    nextTime = input.runningTime() + lTime
    while (input.buttonIsPressed(Button.A) && input.runningTime() < nextTime) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        pins.analogPitch(38000, sTime)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.pause(sTime)
    }
    basic.showLeds(`
        . # . # .
        # . . . #
        . . # . .
        # . . . #
        . # . # .
        `)
})
