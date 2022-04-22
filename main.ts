let z = 0
input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        z = 4 - x
        for (let y = 0; y <= 4; y++) {
            led.toggle(z, z - y)
            basic.pause(50)
            led.toggle(z - y, z)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let x = 0; x <= 4; x++) {
        led.toggle(4 - x, 4 - x)
        z = 4 - x
        for (let y = 0; y <= 4; y++) {
            led.toggle(z - y, z)
            basic.pause(50)
            led.toggle(z, z - y)
        }
    }
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
	
})
