radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
    if (receivedNumber == 4) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(2)
basic.forever(function () {
	
})
