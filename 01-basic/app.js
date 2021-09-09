new Vue({
    el: '#root',
    data: {
        greeting: "Hi World",
        age: "25",
        name: "give",
        count: "0",
        website: "http://www.google.com"
    },
    methods: {
        addAge: function () {
            this.age++;
            console.log(this.age);
        },
        subtractAge: function () {
            this.age--;
            console.log(this.age);
        },
        addCount: function () {
            this.count++;
            console.log(this.count);
        }
    }
})