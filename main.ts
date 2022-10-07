input.onButtonPressed(Button.A, function () {
    for (let contador = 0; contador <= 4; contador++) {
        basic.showNumber(contador)
    }
    caritas()
})
input.onButtonPressed(Button.AB, function () {
    contador = 1
    while (contador <= 10) {
        basic.showNumber(contador)
        contador += 2
        caritas()
    }
})
input.onButtonPressed(Button.B, function () {
    contador = 0
    while (contador <= 10) {
        basic.showNumber(contador)
        contador += 2
        caritas()
    }
})
function caritas () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Sad)
        basic.showIcon(IconNames.Asleep)
        basic.showIcon(IconNames.Surprised)
        basic.showIcon(IconNames.Happy)
    }
}
let contador = 0
let N1 = randint(5, 10)
basic.showNumber(N1)
for (let contador = 0; contador <= N1; contador++) {
    basic.showNumber(contador)
    for (let index = 0; index < contador; index++) {
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
        basic.pause(100)
    }
}
