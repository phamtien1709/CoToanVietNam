var game = new Phaser.Game(900, 1500, Phaser.CANVAS, '', {
    init: function () {

        //Load the plugin
        this.game.kineticScrolling = this.game.plugins.add(Phaser.Plugin.KineticScrolling);
    },
    preload: function(){
        game.scale.minWidth = 450;
        game.scale.minHeight = 550;
        game.scale.maxWidth = 900;
        game.scale.maxHeight = 1100;
        game.scale.pageAlignHorizontally = true;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;


        game.load.image('gui_tut', 'Assets/Setting/Gui_huongdan.png');
    },
    create: function () {
        var popup_tut = game.add.sprite(game.world.centerX, game.world.centerY, 'gui_tut');
        popup_tut.alpha = 1;
        popup_tut.anchor.set(0.5);
        popup_tut.inputEnabled = true;
        popup_tut.input.enableDrag();
        //Starts the plugin
        this.game.kineticScrolling.start();

        this.rectangles = [];

        var initX = 10;
        var texts = [
            'Chúng ta vẫn biết rằng, làm việc với ',
            'một đoạn văn bản dễ đọc và rõ nghĩa ',
            'dễ gây rối trí và cản trở',
            'việc tập trung vào yếu tố trình bày văn bản.',
            ' Lorem Ipsum có ưu điểm ',
            'hơn so với đoạn ',
            'văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung" ',
            'là nó khiến văn bản giống thật hơn, bình thường hơn.',
            'Nhiều phần mềm thiết kế giao diện web và dàn trang ',
            'ngày nay đã sử dụng ',
            'Lorem Ipsum ',
            'làm đoạn văn bản giả, và nếu bạn thử tìm ',
            'các đoạn "Lorem ipsum" trên mạng thì ',
            'sẽ khám phá ra nhiều trang web hiện vẫn đang trong quá trình xây dựng.',
            'Có nhiều phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi ',
            'do cố ý (xen thêm vào những câu hài hước hay thông tục).'
        ];
        console.log(texts);
        for (var i = 0; i < texts.length; i++) {
            this.index = this.game.add.text( -300, initX -400, texts[i],
                        { font: 'bold 20px Arial',fill:'black', align: "center" });
            popup_tut.addChild(this.index);
            this.index.anchor.set(0);
            initX += 30;
        }

        //Changing the world width
        this.game.world.setBounds(0, 0, this.game.width, this.game.height + 300);
    }
});