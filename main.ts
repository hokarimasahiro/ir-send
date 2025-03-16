let nextTime = 0
pins.analogSetPitchPin(AnalogPin.P1)
let sTime = 100
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        nextTime = input.runningTime() + 1000
        basic.showIcon(IconNames.Diamond)
        pins.analogPitch(38000, sTime)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(500)
        basic.clearScreen()
        while (input.buttonIsPressed(Button.A) || input.runningTime() < nextTime) {
        	
        }
        basic.showIcon(IconNames.Heart)
    }
})
