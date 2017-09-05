<template>
    <div class="selection-component">
      <div class="selection-show" @click="toggleDrop">
        <span>{{ selections[nowIndex].label }}</span>
        <div class="arrow"></div>
      </div>
      <div class="selection-list" v-if="isDrop">
        <ul>
          <li v-for="(item,index) in selections" @click="chooseSelection(index)">{{ item.label }}</li>
        </ul>
      </div>
    </div>
</template>

<script>
import { eventBus } from '../../eventBus'
export default {
  props: {
    selections:{
      type: Array,
      default:[{
        label: 'test',
        value: 0
      }]
    }
  },
  data () {
    return {
      isDrop: false,
      nowIndex:0
    }
  },
  mounted (){
    //mounted --监听 rest-component
    eventBus.$on('rest-component',() =>{
      this.isDrop = false
    })
  },
  methods: {
   toggleDrop (event) {
     event.stopPropagation()
     //对个select的开 与闭
     eventBus.$emit('rest-component')
     this.isDrop = !this.isDrop
   },
   chooseSelection (index){
     this.nowIndex = index
     this.isDrop = false
     // this.selections[this.nowIndex] --->选中的对象
    //  需要把当前的选中传值---每次改变的   便于逻辑提交数据
     this.$emit('on-change',this.selections[this.nowIndex])
   }
  }
}
</script>

<style scoped>
.selection-component{
  position: relative;
  display: inline-block;
}
.selection-show{
  border: 1px solid #e3e3e3;
  padding: 0 20px 0 10px;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  cursor: pointer;
  background: #ffffff;
  position: relative;
  display: inline-block;
}
.selection-show .arrow{
  display: inline-block;
  border-left:4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #e3e3e3;
  width: 0;
  height: 0;
  margin-left: 6px;
  margin-right: -14px;
  vertical-align: middle;
  margin-top: -1px;
}
.selection-list{
  display: inline-block;
  position: absolute;
  left: 0;
  top: 25px;
  width: 100%;
  background: #ffffff;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  z-index: 5;
}
.selection-list li{
  padding: 5px 15px 5px 10px;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  cursor: pointer;
  background: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.selection-list li:hover{
  background: #e3e3e3;
}
</style>
