enchant();

window.onload = function() {
    var game = new Game(320, 320);
    game.onload = function(){
        //Sprite作成
        var sprite = new Sprite(320,320);
        //背景色を白に
        var scene = game.rootScene;
        scene.backgroundColor = "white";
        
        //説明を表示
        var stLabel = new Label("どこまで耐えれるかな?");
        var stLabel2 = new Label("画面右半分をクリックで←へ 画面左半分をクリックで→へ");
 		stLabel.font = "10px";	//フォントサイズ指定
        stLabel2.font = "10px";
 		stLabel2.x = 10; // X座標
 		stLabel2.y = 15; // Y座標
 		// ラベルを画面に表示
 		game.rootScene.addChild(stLabel); 
        game.rootScene.addChild(stLabel2); 
        
        //Surfaceを作成
        var surface = new Surface(320,320);
        surface.context.strokeStyle = 'red'; //線の色:赤
		surface.context.beginPath(); //描画開始
		surface.context.rect(100, 100, 100, 30); // 四角形
		surface.context.stroke(); //描画指示
        
        //spriteのimageにsurfaceを代入
        sprite.image = surface;
		sprite.dx = 2; //初期速度を2に
        sprite.addEventListener(Event.ENTER_FRAME,function(){
            sprite.x -= sprite.dx;
            if ((sprite.x <= -100) || (sprite.x >= 125)){ // 画面内から
         	var myLabel = new Label("GAMEOVER"); //失敗時、文字表示
 			myLabel.font = "30px Palatino";
 			myLabel.x = 80; // X座標
 			myLabel.y = 50; // Y座標
 			// ラベルを画面に表示
 			game.rootScene.addChild(myLabel);   
            game.pause(); //gameover 処理中断
        }
        });
        
		sprite.addEventListener(Event.TOUCH_START, function(event) {
			if (event.x > 160) { // 画面の右半分側をタッチされたら
                sprite.dx = (Math.random()*13)+2; // 右方向移動に切り替える 乱数:2以上15以下
			}
			else { // 画面の左半分側をタッチされたら
				sprite.dx = -(Math.random()*13)-2; // 左方向移動に切り替える 乱数-15以上-2以下
			}
		});
        game.rootScene.addChild(sprite); 
    };
    game.start();
};