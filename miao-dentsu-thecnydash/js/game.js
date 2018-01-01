var cnyDash = function () {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameWrapper',
                               { preload: preload, create: create, update: update });

    var bg;
    var direction = -1;

    function preload() {
        game.load.image('background', '/assets/background.png');
    }

    function create() {
        bg = game.add.tileSprite(0, 0, 1024, 512, 'background');

        game.input.onTap.add(Jump, this);
    }

    function update() {
        bg.tilePosition.x += direction;        
    }

    function Jump(pointer) {
        console.log(pointer);
        direction = direction * -1;
    }
};