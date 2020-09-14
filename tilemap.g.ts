// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers.registerTilemapFactory(function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level": return tiles.createTilemap(hex`0a0008000202020201020202020202020101010101010202020201010101010102020202010101010101020202020101010101010202020201010101010102020202010101010101020202020202020202020202`, img`
2 2 2 2 . 2 2 2 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen)
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
