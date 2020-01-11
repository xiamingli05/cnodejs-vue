Vue.component('cnode-content',{
    props:{
        article:{
            type:Object,
            required:true
        }
    },
    template:`
        <div class="news">
            <img :src="article.author.avatar_url" class="userimg1">
            <span v-text="article.reply_count+'/'+article.visit_count"></span>
            <p><a herf="" v-text="article.title"></a></p>
            <img :src="article.author.avatar_url" class="userimg2">
            <span v-text="article.last_reply_at"></span>
        </div>
    `
    
    
})