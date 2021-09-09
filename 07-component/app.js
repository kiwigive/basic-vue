Vue.component('give', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">click: {{count}}</button>'
});
Vue.component('post', {
    template: '<h3>New Post</h3>'
});
new Vue ({
    el: "#vue-app"
})