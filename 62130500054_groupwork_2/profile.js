
let app = Vue.createApp({

    data() {
        return {
            firstName: 'Panus',
            lastName: 'Kotrajarus',
            imageUrl : './images/panus.png'
        }
    },
    // methods: {
    //     changeTitleText(){
    //         this.title = 'โค้ดนี้ทำงานได้ใน Vue 3'
    //     }
    // },
})

// app.component('my-button', {
//     emits: ['whenclick'], //optional
//     template: `
//         <button @click="handleClick">Click Me!</button>
//     `,
//     methods: {
//         handleClick(){
//             this.$emit('whenclick')
//         }
//     },
// })

app.mount('#app')