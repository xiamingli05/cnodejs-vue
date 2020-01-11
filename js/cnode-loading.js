Vue.component('cnode-loading',{
    props:{
        show:{
            type:Boolean,
            required:false,
            default:true
        }
    },
    template:`
        <div class="loading" v-show="show">
            <img src="./static/loading.gif"/>
        </div>
    `
});