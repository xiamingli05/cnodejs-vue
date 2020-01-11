Vue.component('cnode-filter',{
    props:{
        value:{
            type:String,
            required:false,
            default:''
        }
    },
    template:`
        <div class="filter">
            <span 
            v-for="item in typelist" 
            v-text="item.lable" 
            :class="{'on':value==item.value}"
            @click='$emit("input",item.value)'
            >
            </span>
        </div>
    `,
    data:function(){
        return {
            typelist:[
                {lable:'全部',value:''},
                {lable:'精华',value:'good'},
                {lable:'分享',value:'share'},
                {lable:'问答',value:'ask'},
                {lable:'招聘',value:'job'}
            ]
        }
    }
})