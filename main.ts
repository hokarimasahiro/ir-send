let nextTime = 0
pins.analogSetPitchPin(AnalogPin.P1)
let sTime = 100
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        nextTime = input.runningTime() + 1000
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
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        while (input.buttonIsPressed(Button.A) || input.runningTime() < nextTime) {
        	
        }
    }
})
