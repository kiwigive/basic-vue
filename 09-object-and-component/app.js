Vue.component('showcomment', {
    props: ['commentpost'],
    template: '<h4><i>{{commentpost}}</i></h4>'
});
new Vue ({
    el: "#vue-app",
    data: {
        newComment: '',
        comments: ['comment1', 'comment2', 'comment3']
    },
    methods: {
        addComment: function () {
            this.comments.push(this.newComment)
            this.newComment=""
        }
    }
})