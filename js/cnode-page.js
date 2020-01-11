// 全局自定义组件
Vue.component('cnode-page', {
    props: {
      total: {
        type: Number,
        require: true
      },
      value: {
        type: Number,
        require: false,
        default: 1
      }
    },
    data: function() {
      return {
        no: this.value
      }
    },
    template: `
      <div class='page'>
        <span @click='change("prev")'><</span>
        <span
          v-for='item in total'
          v-text='item'
          :class='{"on":value==item}'
          @click='change(item)'
          ></span>
        <span @click='change("next")'>></span>
      </div>
    `,
    methods: {
      change(arg) {
        if (arg==='prev') {
          if (this.no <= 1) alert('已经是第一页了!');
          this.no--;
        } else if (arg==='next') {
          if (this.no >= this.total) alert('已经是最后一页了!');
          this.no++;
        } else {
          this.no = arg
        }
        this.$emit('input', this.no)
      }
    }
  })