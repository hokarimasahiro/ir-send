let nextTime = 0
pins.analogSetPitchPin(AnalogPin.P1)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        nextTime = input.runningTime() + 1000
        basic.showIcon(IconNames.Diamond)
        pins.analogPitch(38000, 2000)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(500)
        basic.clearScreen()
        while (input.buttonIsPressed(Button.A) || input.runningTime() < nextTime) {
        	
        }
        basic.showIcon(IconNames.Heart)
    }
})
