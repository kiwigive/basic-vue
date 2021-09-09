var post = new Vue ({
    el: "#post",
    data: {
        title: "ส่งโปรเจค",
        message: "Details"
    }
});

var comment = new Vue ({
    el:"#comment",
    data: {
        text:"Nice weather"
    }
});

var likeSystem = new Vue ({
    el:"#likeSystem",
    data: {
        like: false,
        message: "like"
    },
    methods: {
        changeLike: function () {
            if (this.like == false) {
                this.message = "unlike"
            }
            else {
                this.message = "like"
            }
            this.like=!this.like

        }
    }
});