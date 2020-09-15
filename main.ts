namespace SpriteKind {
    export const Virtical = SpriteKind.create()
    export const Horizontal = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    moveV(-16)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    moveV(16)
})
function MoveH (direction: number) {
    for (let H_sprite of H_list) {
        overlap = false
        for (let V_sprite of V_list) {
            if (H_sprite.overlapsWith(V_sprite)) {
                overlap = true
            }
        }
        for (let value of H_list) {
            if (H_sprite.overlapsWith(value)) {
                if (value != H_sprite) {
                    overlap = true
                }
            }
        }
        if (!(overlap)) {
            H_sprite.x += direction
            if (16 == H_sprite.left) {
                H_sprite.x += 0 - direction
            }
            if (144 == H_sprite.right) {
                H_sprite.x += 0 - direction
            }
        }
        for (let V_sprite2 of V_list) {
            if (H_sprite.overlapsWith(V_sprite2)) {
                overlap = true
            }
        }
        for (let value2 of H_list) {
            if (H_sprite.overlapsWith(value2)) {
                if (value2 != H_sprite) {
                    overlap = true
                }
            }
        }
        if (overlap) {
            H_sprite.x += 0 - direction
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    MoveH(-16)
})
function moveV (direction: number) {
    for (let V_sprite3 of V_list) {
        overlap = false
        for (let H_sprite2 of H_list) {
            if (V_sprite3.overlapsWith(H_sprite2)) {
                overlap = true
            }
        }
        for (let value3 of V_list) {
            if (V_sprite3.overlapsWith(value3)) {
                if (value3 != V_sprite3) {
                    overlap = true
                }
            }
        }
        if (!(overlap)) {
            V_sprite3.y += direction
            if (0 == V_sprite3.top) {
                if (V_sprite3.x != 72) {
                    V_sprite3.y += 0 - direction
                }
            }
            if (128 == V_sprite3.bottom) {
                V_sprite3.y += 0 - direction
            }
        }
        for (let H_sprite3 of H_list) {
            if (V_sprite3.overlapsWith(H_sprite3)) {
                overlap = true
            }
        }
        for (let value4 of V_list) {
            if (V_sprite3.overlapsWith(value4)) {
                if (value4 != V_sprite3) {
                    overlap = true
                }
            }
        }
        if (overlap) {
            V_sprite3.y += 0 - direction
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    MoveH(16)
})
let overlap = false
let H_list: Sprite[] = []
let V_list: Sprite[] = []
color.setColor(11, color.rgb(101, 101, 101))
color.setColor(9, color.rgb(0, 30, 225))
color.setColor(8, color.rgb(0, 30, 150))
color.setColor(10, color.rgb(78, 197, 0))
color.setColor(12, color.rgb(50, 50, 50))
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level_0`)
let Driver = sprites.create(img`
    ........b.......
    ....ff2222ff....
    ..2ff222222ff2..
    .22222222222222.
    2222222222222222
    2222222222222222
    2222222222222222
    2222222222222222
    22222ffffff22222
    222ffffffffff222
    f2ffffffffffff2f
    222ffffffffff222
    2f2ffffffffff2f2
    2f22ffffffff22f2
    2ff2ffffffff2ff2
    2ff22f2222f22ff2
    2ff2222222222ff2
    2ff2222222222ff2
    2ff2222222222ff2
    2fff22222222fff2
    2fff22222222fff2
    2fff22222222fff2
    2fff22222222fff2
    2fff22222222fff2
    2ff22f2222f22ff2
    2ff2ffffffff2ff2
    2f22ffffffff22f2
    2f2ffffffffff2f2
    2f2ffffffffff2f2
    222ffffffffff222
    .22fff2222fff22.
    ..222222222222..
    `, SpriteKind.Virtical)
Driver.setPosition(72, 64)
let Limo_V3 = sprites.create(img`
    ........b.......
    ....ffccccff....
    ..cffccccccffc..
    .cccccccccccccc.
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccffffffccccc
    cccffffffffffccc
    fcffffffffffffcf
    cccffffffffffccc
    cfcffffffffffcfc
    cfccffffffffccfc
    cffcffffffffcffc
    cffccfccccfccffc
    cffccccccccccffc
    cffccccccccccffc
    cffccccccccccffc
    cffccccccccccffc
    cffccccccccccffc
    cffccccccccccffc
    cffccccccccccffc
    cffccccccccccffc
    cffccccccccccffc
    cffccccccccccffc
    cfffccccccccfffc
    cfffccccccccfffc
    ccffccccccccffcc
    cfccccccccccccfc
    cfffccccccccfffc
    cfffccccccccfffc
    cfffccccccccfffc
    cfffccccccccfffc
    cfffccccccccfffc
    cfffccccccccfffc
    cffccfccccfccffc
    cffcffffffffcffc
    cfccffffffffccfc
    cfcffffffffffcfc
    cfcffffffffffcfc
    cccffffffffffccc
    .ccfffccccfffcc.
    ..cccccccccccc..
    `, SpriteKind.Virtical)
Limo_V3.setPosition(88, 40)
let Limo_H3 = sprites.create(img`
    ..ccccccccccccccccccccccccccccccccfccccccccc....
    .ccffffffffffffcfffffffffffffffffcccccccccccc...
    ccccccffffffffcffffffffffffffffcccfccccccccccc..
    cffffcccffffffcfffccccccccccccccffffcccccccccf..
    cffffffcccccccccccccccccccccccffffffcccccccccff.
    cfffffffcccccccccccccccccccccffffffffcccccccccf.
    ccfffffcccccccccccccccccccccccfffffffcccccccccc.
    ccfffffcccccccccccccccccccccccfffffffcccccccccc.
    ccfffffcccccccccccccccccccccccfffffffccccccccccb
    ccfffffcccccccccccccccccccccccfffffffcccccccccc.
    cfffffffcccccccccccccccccccccffffffffcccccccccf.
    cffffffcccccccccccccccccccccccffffffcccccccccff.
    cffffcccffffffcfffccccccccccccccffffcccccccccf..
    ccccccffffffffcffffffffffffffffcccfccccccccccc..
    .ccffffffffffffcfffffffffffffffffcccccccccccc...
    ..ccccccccccccccccccccccccccccccccfccccccccc....
    `, SpriteKind.Horizontal)
Limo_H3.setPosition(56, 40)
V_list = sprites.allOfKind(SpriteKind.Virtical)
H_list = sprites.allOfKind(SpriteKind.Horizontal)
for (let V_sprite4 of V_list) {
    V_sprite4.setFlag(SpriteFlag.StayInScreen, true)
}
for (let H_sprite4 of H_list) {
    H_sprite4.setFlag(SpriteFlag.StayInScreen, true)
}
game.onUpdate(function () {
    if (Driver.y == 16) {
        timer.after(400, function () {
            game.over(true)
        })
    }
})
