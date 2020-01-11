var app = new Vue({
    el:'#app',
    data:{
        types:'',
        page:1,
        total:6,
        list:[],
        loaded:true
    },
    methods:{
        getAjax(){
            var that =this;
            this.loaded=false;
            const params= {
                tab:this.types,
                limit:12,
                page:this.page,
                mdrender: false
            }
            $.ajax({
                url:'https://cnodejs.org/api/v1/topics',
                type:'get',
                data:params,
                success:function (res) {
                    if(res.success){
                        that.list=res.data;
                    } else{
                        console.log('请求失败');
                    }
                    that.loaded=true;
                }
            });
        }
    },
    watch:{
        types(){
            this.getAjax();
        },
        page(){
            this.getAjax();
        }
    },
    mounted(){
        this.getAjax();
    }
});