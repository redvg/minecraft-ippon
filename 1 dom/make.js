function стена() {
    gameplay.setWeather(THUNDER)
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 10; index++) {
            builder.place(RED_MUSHROOM_BLOCK)
            builder.move(FORWARD, 1)
        }
        builder.move(UP, 1)
        builder.move(BACK, 10)
    }
    gameplay.setWeather(CLEAR)
}
player.onChat("Z", function () {
    builder.teleportTo(pos(0, 0, 0))
    стена()
    builder.move(DOWN, 10)
    builder.turn(RIGHT_TURN)
    стена()
    builder.move(DOWN, 10)
    builder.move(FORWARD, 10)
    builder.turn(LEFT_TURN)
    стена()
    builder.move(DOWN, 10)
    builder.move(FORWARD, 10)
    builder.turn(LEFT_TURN)
    стена()
})
