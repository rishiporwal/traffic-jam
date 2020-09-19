namespace SpriteKind {
    export const Virtical = SpriteKind.create()
    export const Horizontal = SpriteKind.create()
}
function Colors2 () {
    color.setColor(11, color.rgb(101, 101, 101))
    color.setColor(9, color.rgb(0, 30, 225))
    color.setColor(8, color.rgb(0, 30, 150))
    color.setColor(10, color.rgb(78, 197, 0))
    color.setColor(12, color.rgb(50, 50, 50))
    color.setColor(5, color.rgb(220, 220, 7))
    color.setColor(4, color.rgb(79, 70, 37))
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    moveV(-16)
})
function Make_Invisible (Vehicle: Sprite) {
    Vehicle.setFlag(SpriteFlag.Ghost, true)
    Vehicle.setFlag(SpriteFlag.Invisible, true)
}
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
function Put_in_level (Vehicle: Sprite, x: number, y: number) {
    Vehicle.setFlag(SpriteFlag.Ghost, false)
    Vehicle.setFlag(SpriteFlag.Invisible, false)
    Vehicle.setPosition(x, y)
}
function Create_Charecters () {
    Driver = sprites.create(img`
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
    LimoV3 = sprites.create(img`
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
    LimoV3.setPosition(88, 40)
    SchoolBusH3 = sprites.create(img`
        ..55ffffffffffffffffffffffffffffffff5ff555555...
        .55f55fffffffffffffffffffffffffffff5ffff555555..
        55ff5555555555555555555555555555555ffffff555555.
        5fff55ccccccccccccccccccccccccccc55ffffff55555f.
        5fff5c555555555555555555555555555c5ffffffccc55f.
        5fff5c555555555555555555555555555c5fffffff55ccc.
        5fff5c555555555555555555555555555c5fffffff55555.
        5fff5c555555555555555555555555555c5fffffff55555.
        5fff5c555555555555555555555555555c5fffffff55555b
        5fff5c555555555555555555555555555c5fffffff55555.
        5fff5c555555555555555555555555555c5fffffff55ccc.
        5fff5c555555555555555555555555555c5ffffffccc55f.
        5fff55ccccccccccccccccccccccccccc55ffffff55555f.
        55ff5555555555555555555555555555555ffffff555555.
        .55f55fffffffffffffffffffffffffffff5ffff555555..
        ..55ffffffffffffffffffffffffffffffff5ff555555...
        `, SpriteKind.Horizontal)
    SchoolBusH3.setPosition(56, 40)
    JeepV2 = sprites.create(img`
        ........b.......
        ....eeeeeeee....
        ...ee444444ee...
        ..eff444444ffe..
        .eeee4eeee4eeee.
        .eeee4eeee4eeee.
        deeee4eeee4eeeed
        .eeee4eeee4eeee.
        feeee4eeee4eeeef
        feee44444444eeef
        feee4ffffff4eeef
        feeffffffffffeef
        feffffffffffffef
        .effffffffffffe.
        .effffffffffffe.
        .efe44444444efe.
        .eef44444444fee.
        .eff44444444ffe.
        44ff44444444ff44
        e4ff44444444ff4e
        .4ff44444444ff4.
        .efe44444444efe.
        .eeeffffffffeee.
        .effffffffffffe.
        .e4e44444444e4e.
        fe4eeeeeeeeee4ef
        fe444444444444ef
        fe444444444444ef
        fe444444444444ef
        fe444444444444ef
        .ee4444444444ee.
        ..eeeeeeeeeeee..
        `, SpriteKind.Virtical)
    JeepV2.setPosition(56, 64)
    JeepH2 = sprites.create(img`
        ..fffff.....dc.....fffff........
        .ddddddddddcccdddddddddddddd....
        ddccccccfdfffffdffffddddddddd...
        dcccccddfddfffffdffffdddddddfd..
        dcccccdcffcccccccffffccdddddfdd.
        dcccccdcffcccccccfffffccccccccd.
        dcccccdcffcccccccfffffcdddddccd.
        dcccccdcffcccccccfffffcdddddccd.
        dcccccdcffcccccccfffffcdddddccdb
        dcccccdcffcccccccfffffcdddddccd.
        dcccccdcffcccccccfffffccccccccd.
        dcccccdcffcccccccffffccdddddfdd.
        dcccccddfddfffffdffffdddddddfd..
        ddccccccfdfffffdffffddddddddd...
        .ddddddddddcccdddddddddddddd....
        ..fffff.....dc.....fffff........
        `, SpriteKind.Horizontal)
    JeepH2.setPosition(96, 72)
    TruckV3 = sprites.create(img`
        ........b.......
        ..7ffeeeeeeff7..
        .7777eaaaae7777.
        77777eaaaae77777
        7777eaaaaaae7777
        7777eaaaaaae7777
        7777effffffe7777
        77ffffffffffff77
        7ffffffffffffff7
        ffffffffffffffff
        ffffffffffffffff
        7ffffffffffffff7
        f7ffffffffffff7f
        ff777777777777ff
        ff777777777777ff
        f77777777777777f
        ff777777777777ff
        ff777eeeeee777ff
        f777eaaaaaae777f
        ff77eaaaaaae77ff
        ff77eaaaaaae77ff
        f777eaaaaaae777f
        ff77eaaaaaae77ff
        ff77eaaaaaae77ff
        f777eaaaaaae777f
        ff77eaaaaaae77ff
        ff77eaaaaaae77ff
        f777eaaaaaae777f
        ff77eaaaaaae77ff
        ff77eaaaaaae77ff
        f777eaaaaaae777f
        ff77eaaaaaae77ff
        ff77eaaaaaae77ff
        f777eaaaaaae777f
        ff77eaaaaaae77ff
        ff77eaaaaaae77ff
        f777eaaaaaae777f
        ff77eaaaaaae77ff
        ff77eaaaaaae77ff
        f777eaaaaaae777f
        ff777eeeeee777ff
        ff777777777777ff
        f77777777777777f
        f77777777777777f
        effffffffffffffe
        eeffffffffffffee
        .eeffffffffffee.
        ..eeeeeeeeeeee..
        `, SpriteKind.Virtical)
    TruckV3.setPosition(40, 72)
    PartyBusH3 = sprites.create(img`
        ..99ffffffffffffffffffffffffffffffff9ff999999...
        .99f99fffffffffffffffffffffffffffff9ffff999999..
        99ff9999999999999999999999999999999ffffff999999.
        9fff999999999ccccc99999999ddddd9999ffffff99999f.
        9fff999999999111cc99dd99ddddfddd999ffffff66699f.
        9fff9999999991ffcc9dddddddfddddd999fffffff99666.
        9fff9999f9f99111cc9dddddccddfdddd99fffffff99999.
        9fff999ccccff111ccfffffcffcdfdddd99fffffff99999.
        9fff999ccccff1ffccfffffcffcdfdddd99fffffff99999b
        9fff9999f9f99111cc9dddddccddfdddd99fffffff99999.
        9fff9999999991ffcc9ddddddddddddd999fffffff99666.
        9fff999999999111cc99dd99dddddddd999ffffff66699f.
        9fff999999999ccccc99999999ddddd9999ffffff99999f.
        99ff9999999999999999999999999999999ffffff999999.
        .99f99fffffffffffffffffffffffffffff9ffff999999..
        ..99ffffffffffffffffffffffffffffffff9ff999999...
        `, SpriteKind.Horizontal)
    PartyBusH3.setPosition(104, 88)
    TaxiV2 = sprites.create(img`
        ........b.......
        ....cc5555cc....
        ..555555555555..
        .55555555555555.
        5555555555555555
        5555555555555555
        5555555555555555
        5555555555555555
        55555ffffff55555
        555ffffffffff555
        c5ffffffffffff5c
        555ffffffffff555
        5f5ffffffffff5f5
        5f55ffffffff55f5
        5ff5555555555ff5
        5ff5555555555ff5
        5ff5555555555ff5
        5ff5555555555ff5
        5ff5555ff5555ff5
        5fff5ccffcc5fff5
        5fff555ff555fff5
        5fff55555555fff5
        5fff55555555fff5
        5fff55555555fff5
        5ff5555555555ff5
        5ff5ffffffff5ff5
        5f55ffffffff55f5
        5f5ffffffffff5f5
        5f5ffffffffff5f5
        555ffffffffff555
        .55fff5555fff55.
        ..555555555555..
        `, SpriteKind.Virtical)
    TaxiV2.setPosition(56, 96)
    TaxiH2 = sprites.create(img`
        ..555555555555555555ff555555....
        .55ffffffffffffffff5555555555...
        555555fffffffffff5555f55555555..
        5ffff555fffff555555ffff555555f..
        5ffffff55555555555fffff555555ff.
        5ffffff55555f55555ffffff555555f.
        55fffff55555f55555ffffff5555555.
        555fffff55ffff555ffffffff555555.
        555fffff55ffff555ffffffff555555b
        55fffff55555f55555ffffff5555555.
        5ffffff55555f55555ffffff555555f.
        5ffffff55555555555fffff555555ff.
        5ffff555fffff555555ffff555555f..
        555555fffffffffff5555f55555555..
        .55ffffffffffffffff5555555555...
        ..555555555555555555ff555555....
        `, SpriteKind.Horizontal)
    TaxiH2.setPosition(96, 104)
    CarH2 = sprites.create(img`
        ..888888888888888888ff888888....
        .88ffffffffffffffff8888888888...
        888888fffffffffff8888f88888888..
        8ffff888fffff888888ffff888888f..
        8ffffff88888888888fffff888888ff.
        8ffffff88888888888ffffff888888f.
        88fffff88888888888ffffff8888888.
        88ffffff888888888ffffffff888888.
        88ffffff888888888ffffffff888888b
        88fffff88888888888ffffff8888888.
        8ffffff88888888888ffffff888888f.
        8ffffff88888888888fffff888888ff.
        8ffff888fffff888888ffff888888f..
        888888fffffffffff8888f88888888..
        .88ffffffffffffffff8888888888...
        ..888888888888888888ff888888....
        `, SpriteKind.Horizontal)
    CarH2.setPosition(112, 56)
    CarV2 = sprites.create(img`
        ........b.......
        ....cc3333cc....
        ..333333333333..
        .33333333333333.
        3333333333333333
        3333333333333333
        3333333333333333
        3333333333333333
        33333ffffff33333
        333ffffffffff333
        c3ffffffffffff3c
        333ffffffffff333
        3f3ffffffffff3f3
        3f33ffffffff33f3
        3ff3333333333ff3
        3ff3ffffffff3ff3
        3ff3ffffffff3ff3
        3ff33ffffff33ff3
        3ff3333333333ff3
        3fff33333333fff3
        3fff33333333fff3
        3fff33333333fff3
        3fff33333333fff3
        3fff33333333fff3
        3ff3333333333ff3
        3ff3ffffffff3ff3
        3f33ffffffff33f3
        3f3ffffffffff3f3
        3f3ffffffffff3f3
        333ffffffffff333
        .33fff3333fff33.
        ..333333333333..
        `, SpriteKind.Virtical)
    CarV2.setPosition(120, 32)
    TrailerCarH3 = sprites.create(img`
        ..ffff.............fffff....dc.....fffff........
        .4ffff44444444....eeeeeeeeeecceeeeeeeeeeeeee....
        4444444eeeeee44..eeccccccfeffffeffffeeeeeeeee...
        4eeeeeeeeeeeee4..eccccceefeeffffeffffeeeeeeefe..
        4eeeeeeeeeeeee4..eccccce4ffccccccffff44eeeeefee.
        4eeeeeeeeeeeee4..eccccce4ffccccccfffff44444444e.
        4eeeeeeeeeeeee4.feccccce4ffccccccfffff4eeeee44e.
        4eeeeeeeeeeeeee4.eccccce4ffccccccfffff4eeeee44e.
        4eeeeeeeeeeeeee4.eccccce4ffccccccfffff4eeeee44eb
        4eeeeeeeeeeeee4.feccccce4ffccccccfffff4eeeee44e.
        4eeeeeeeeeeeee4..eccccce4ffccccccfffff44444444e.
        4eeeeeeeeeeeee4..eccccce4ffccccccffff44eeeeefee.
        4eeeeeeeeeeeee4..eccccceefeeffffeffffeeeeeeefe..
        4444444eeeeee44..eeccccccfeffffeffffeeeeeeeee...
        .4ffff44444444....eeeeeeeeeecceeeeeeeeeeeeee....
        ..ffff.............fffff....dc.....fffff........
        `, SpriteKind.Horizontal)
}
let overlap = false
let TrailerCarH3: Sprite = null
let CarV2: Sprite = null
let CarH2: Sprite = null
let TaxiV2: Sprite = null
let TaxiH2: Sprite = null
let PartyBusH3: Sprite = null
let TruckV3: Sprite = null
let JeepH2: Sprite = null
let JeepV2: Sprite = null
let LimoV3: Sprite = null
let SchoolBusH3: Sprite = null
let Driver: Sprite = null
let H_list: Sprite[] = []
let V_list: Sprite[] = []
let Level = 1
Colors2()
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level_0`)
Create_Charecters()
V_list = sprites.allOfKind(SpriteKind.Virtical)
H_list = sprites.allOfKind(SpriteKind.Horizontal)
for (let V_sprite4 of V_list) {
    V_sprite4.setFlag(SpriteFlag.StayInScreen, true)
}
for (let H_sprite4 of H_list) {
    H_sprite4.setFlag(SpriteFlag.StayInScreen, true)
}
Put_in_level(Driver, 72, 64)
Put_in_level(SchoolBusH3, 56, 40)
Put_in_level(LimoV3, 88, 40)
Make_Invisible(JeepV2)
Make_Invisible(JeepH2)
Make_Invisible(TruckV3)
Make_Invisible(PartyBusH3)
Make_Invisible(TaxiH2)
Make_Invisible(TaxiV2)
Make_Invisible(CarH2)
Make_Invisible(CarV2)
Make_Invisible(TrailerCarH3)
game.splash("Level " + convertToText(Level))
game.onUpdate(function () {
    if (Driver.y == 16) {
        if (Level < 5) {
            Level += 1
        } else {
            game.over(true)
        }
        if (Level == 1) {
            Put_in_level(Driver, 72, 64)
            Put_in_level(SchoolBusH3, 56, 40)
            Put_in_level(LimoV3, 88, 40)
            Make_Invisible(JeepV2)
            Make_Invisible(JeepH2)
            Make_Invisible(TruckV3)
            Make_Invisible(PartyBusH3)
            Make_Invisible(TaxiH2)
            Make_Invisible(TaxiV2)
            Make_Invisible(CarH2)
            Make_Invisible(CarV2)
            Make_Invisible(TrailerCarH3)
        } else if (Level == 2) {
            Put_in_level(Driver, 72, 98)
            Put_in_level(LimoV3, 40, 40)
            Put_in_level(TruckV3, 88, 40)
            Put_in_level(CarV2, 88, 80)
            Put_in_level(JeepH2, 64, 56)
            Put_in_level(TaxiH2, 48, 104)
            Put_in_level(JeepV2, 104, 96)
            Put_in_level(CarH2, 112, 72)
            Make_Invisible(PartyBusH3)
            Make_Invisible(TaxiV2)
            Make_Invisible(SchoolBusH3)
            Make_Invisible(TrailerCarH3)
        } else if (Level == 3) {
            Put_in_level(Driver, 72, 80)
            Put_in_level(SchoolBusH3, 56, 104)
            Put_in_level(PartyBusH3, 56, 56)
            Put_in_level(CarH2, 96, 72)
            Put_in_level(TaxiH2, 112, 24)
            Put_in_level(TruckV3, 88, 40)
            Put_in_level(LimoV3, 120, 56)
            Make_Invisible(JeepV2)
            Make_Invisible(JeepH2)
            Make_Invisible(TaxiV2)
            Make_Invisible(CarV2)
            Make_Invisible(TrailerCarH3)
        } else if (Level == 4) {
            Put_in_level(Driver, 72, 80)
            Put_in_level(SchoolBusH3, 72, 104)
            Put_in_level(TrailerCarH3, 72, 40)
            Put_in_level(PartyBusH3, 56, 56)
            Put_in_level(TrailerCarH3, 72, 40)
            Put_in_level(CarH2, 112, 104)
            Put_in_level(TaxiH2, 80, 24)
            Put_in_level(JeepH2, 48, 24)
            Put_in_level(TruckV3, 88, 72)
            Put_in_level(CarV2, 120, 32)
            Put_in_level(JeepV2, 104, 32)
            Put_in_level(TaxiV2, 40, 96)
            Make_Invisible(LimoV3)
        }
        if (Level < 5) {
            game.splash("Level " + convertToText(Level))
        }
    }
})
