

 let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        init: init,
        preload: preload,
        create: create,
        update: update
    }
    };
    var cursors
    let game = new Phaser.Game(config);

    function init () {
        this.playerSpeed = 1
        this.enemySpeed = 2
        this.enemyMaxX = 800
        this.enemyMinX = 0
    }

    function preload ()
    {

        this.load.image('bg', '/img/froggerBG.png');
        this.load.image('player', '/img/mark.jpg');
        this.load.image('red', '/img/ball.png');
        this.load.image('mario', '/img/mario.png');
        this.load.image('bowser', '/img/bowser.jpg');
        this.load.image('koopa', '/img/koopa.png');
        this.load.image('toad', '/img/toad.png');
        this.load.image('bush', '/img/berry_bush.png');
        this.load.image('player2', '/img/koomba.png');
        this.load.image('turtle', '/img/turtleShells.png');
    }

    function create ()
    {
        let background = this.add.sprite(0, 0, 'bg');
        cursors = game.input.keyboard.createCursorKeys()

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        background.setOrigin(0, 0);

        this.add.image(100, 250, 'bush')
        // this.add.image(500, 100, 'mario')
        // this.add.image(100, 500, 'toad')
        this.add.image(700, 350, 'bush')
        // this.add.image(200, 300, 'koopa')

        this.player = this.add.sprite(this.sys.game.config.width / 2, 575, 'player2');
        this.player.setScale(0.3)

        // player.setVelocity(100, 200);
        // player.setBounce(1, 1);
        // player.setCollideWorldBounds(true);
        //to make the player sparkle
        emitter.startFollow(this.player);

        this.enemies = this.add.group({
            key: 'toad',
            repeat: 2,
            setXY: {
                x: 100,
                y: 110,
                stepX: 100,
                stepY: 390}
                })

        // scale enemies
        Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.2, -0.2);

        // set speeds
        Phaser.Actions.Call(this.enemies.getChildren(), function(enemy) {
        enemy.speed = Math.random() * 2 + 1;
        }, this)

        this.mario = this.add.group({
            key: 'mario',
            repeat: 2,
            setXY: {
                x: 500,
                y: 100,
                stepX: 100,
                stepY: 390}
                })
        Phaser.Actions.ScaleXY(this.mario.getChildren(), -0.2, -0.2);

        // set speeds
        Phaser.Actions.Call(this.mario.getChildren(), function(enemy) {
        enemy.speed = Math.random() * 2 + 1;
        }, this)

        this.koopa = this.add.group({
            key: 'koopa',
            repeat: 2,
            setXY: {
                x: 200,
                y: 300,
                stepX: 200,
                stepY: 0}
                })
        Phaser.Actions.ScaleXY(this.koopa.getChildren(), -0.2, -0.2);

        // set speeds
        Phaser.Actions.Call(this.koopa.getChildren(), function(enemy) {
        enemy.speed = Math.random() * 2 + 1;
        }, this)

        this.turtle = this.add.group({
            key: 'turtle',
            repeat: 2,
            setXY: {
                x: 200,
                y: 175,
                stepX: 200,
                stepY: 0}
                })
        Phaser.Actions.ScaleXY(this.turtle.getChildren(), -0.8, -0.8);

        // set speeds
        Phaser.Actions.Call(this.turtle.getChildren(), function(enemy) {
        enemy.speed = Math.random() * 2 + 1;
        }, this)
    }

    function runEnemies(car) {
        this.enemies = this.add.group({
                key: car,
                repeat: 2,
                setXY: {
                    x: 100,
                    y: 110,
                    stepX: 100,
                    stepY: 390}
                    })

            // scale enemies
            Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.2, -0.2);

            // set speeds
            Phaser.Actions.Call(this.enemies.getChildren(), function(enemy) {
            enemy.speed = Math.random() * 2 + 1;
            }, this)

    }

    function update () {
        // console.log("pointer" + this.input.activePointer.isDown)
        if (cursors.up.isDown) {

    // player walks
            this.player.y -= this.playerSpeed;
            console.log("increase" + this.player.x)
        }
        if (cursors.down.isDown) {

    // player walks
            this.player.y += this.playerSpeed;
            console.log("increase" + this.player.x)
        }

        if (cursors.right.isDown) {

    // player walks
            this.player.x += this.playerSpeed;
            console.log("increase" + this.player.x)
        }
        if (cursors.left.isDown) {

    // player walks
            this.player.x -= this.playerSpeed;
            console.log("increase" + this.player.x)
        }

        let enemies = this.enemies.getChildren();
        let numEnemies = enemies.length;

        let mario = this.mario.getChildren();
        let numMario = mario.length;

        let koopa = this.koopa.getChildren();
        let numKoopa = koopa.length;

        let turtle = this.turtle.getChildren();
        let numTurtle = turtle.length;

        for (let i = 0; i < numEnemies; i++) {
            enemies[i].x += enemies[i].speed
            if (enemies[i].x >= this.enemyMaxX && enemies[i].speed >0) {
                enemies[i].x = this.enemyMinX
                // Phaser.Actions.Call(this.enemies.getChildren(), function(enemy) {
                // enemy.speed = Math.random() * 2 + 1;
                // }, this)
                enemies[i].x += enemies[i].speed
            }
        }

        for (let i = 0; i < numMario; i++) {
            mario[i].x += mario[i].speed
            if (mario[i].x >= this.enemyMaxX && mario[i].speed >0) {
                mario[i].x = this.enemyMinX
                // Phaser.Actions.Call(this.enemies.getChildren(), function(enemy) {
                // enemy.speed = Math.random() * 2 + 1;
                // }, this)
                mario[i].x += mario[i].speed
            }
        }

        for (let i = 0; i < numKoopa; i++) {
            koopa[i].x += koopa[i].speed
            if (koopa[i].x >= this.enemyMaxX && koopa[i].speed >0) {
                koopa[i].x = this.enemyMinX
                // Phaser.Actions.Call(this.enemies.getChildren(), function(enemy) {
                // enemy.speed = Math.random() * 2 + 1;
                // }, this)
                koopa[i].x += koopa[i].speed
            }
        }

        for (let i = 0; i < numTurtle; i++) {
            turtle[i].x -= turtle[i].speed
            if (turtle[i].x <= this.enemyMinX && turtle[i].speed >0) {
                turtle[i].x = this.enemyMaxX
                // Phaser.Actions.Call(this.enemies.getChildren(), function(enemy) {
                // enemy.speed = Math.random() * 2 + 1;
                // }, this)
                turtle[i].x -= turtle[i].speed
            }
        }

    }