let app = new Vue({
    el: "#app",
    data: {
        list: [
            {
                id: '1',
                name: 'iPhone 7',
                price: 6188,
                count: 1,
                status : 1
            },
            {
                id: '2',
                name: 'iPad Pro',
                price: 5188,
                count: 1,
                status : 1
            },
            {
                id: '3',
                name: 'MacBook Pro',
                price: 21488,
                count: 1,
                status : 1
            }
        ]
        // totalPrice: 0
    },
    computed: {
        totalPrice: function() {
            let total = 0;
            for(let i = 0; i < this.list.length; i++) {
                let item = this.list[i];
                if(item.status) {
                    total += item.price * item.count
                }
            }
            return total != 0 ? total.toString().replace(/\B(?=(\d{3})+$)/g,',') : 0;
        }
    },
    methods: {
        handleReduce(index) {
            if(this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd(index) {
            this.list[index].count++;
        },
        handleRemove(index) {
            this.list.splice(index, 1);
            // console.log(index)
        },
        handleChecked(index) {
            console.log(this.list[index].status)
            this.list[index].status = !this.list[index].status;
        },
        isChecked(index) {
            return this.list[index].status;
        },
        isCheckedAll() {
            let status = true;
            for(let i = 0; i < this.list.length; i++) {
                if(!this.list[i].status){
                    status = false;
                    return status;
                }
            }
            return status;
        },
        handleAll() {
            // console.log(this)
            let status = this.isCheckedAll();
            // console.log(status)
            // 检测拿到的是否全选
            status = status ? 0 : 1;
            for(let i = 0; i < this.list.length; i++) {
                this.list[i].status = status; 
            }
        }
    }
})