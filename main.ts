input.onButtonPressed(Button.A, function () {
    Numero_azar = 0
    Numero_azar += randint(1, 3)
    if (Numero_azar == 1) {
        basic.showString("1 PUNTO PARA MARTA")
        Marta += 1
    } else if (Numero_azar == 2) {
        basic.showString("1 PUNTO PARA BERTA")
        Berta += 1
    } else if (Numero_azar == 3) {
        basic.showString("1 PUNTO PARA LUIS")
        Luis += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Marta > Berta && Marta > Luis) {
        basic.showString("GANA MARTA")
    } else if (Berta > Luis && Berta > Marta) {
        basic.showString("GANA BERTA")
    } else if (Luis > Berta && Luis > Marta) {
        basic.showString("GANA LUIS")
    } else {
        basic.showString("EMPATE")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("RESULTADO FINAL")
    basic.showString("PUNTAJE MARTA")
    basic.showNumber(Marta)
    basic.clearScreen()
    basic.showString("PUNTAJE BERTA")
    basic.showNumber(Berta)
    basic.clearScreen()
    basic.showString("PUNTAJE LUIS")
    basic.showNumber(Luis)
    basic.clearScreen()
})
let Numero_azar = 0
let Luis = 0
let Berta = 0
let Marta = 0
let Ganador = 0
Marta = 0
Berta = 0
Luis = 0
