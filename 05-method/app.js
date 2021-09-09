new Vue({
    el: '#root',
    data: {
        newData: {
            empName: '',
            salary: 0
        },
        empGroup: [
            {
                empName: "สมศรี",
                salary: 5000
            },
            {
                empName: "สมปอง",
                salary: 4000
            }
        ]
    },
    methods: {
        addEmp: function () {
            this.empGroup.push({
                empName: this.newData.empName,
                salary: this.newData.salary
            });
            this.newData.empName = '';
            this.newData.salary = 0;
        },
        showMessage: function () {
            alert("done");
            console.log("Done");
        }
    },
    computed: {
        summation: function () {
            var sum = this.empGroup.reduce(function (value, data) {
                return value + Number(data.salary);
            }, 0);
            return sum;
        },
        avg: function () {
            var sum = this.empGroup.reduce(function (value, data) {
                return value + Number(data.salary);
            }, 0);
            return sum / this.empGroup.length;
        }
    },
    watch: {
        summation: function () {
            this.showMessage();
        }
    }
})