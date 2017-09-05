<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="loginClick">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel: '',
      errorText: ''
    }
  },
  computed: {
      userErrors (){
          let errorText,status
          if(!/^1[3|4|5|8][0-9]\d{8}$/g.test(this.usernameModel)){
              status = false
              errorText = "不是正确的11位手机号"
          }else{
              status = true
              errorText = ""
          }
          if(!this.userFlag){
              errorText = ""
              this.userFlag = true
          }
          return {
              status,
              errorText
          }
      },
      passwordErrors (){
          let errorText,status
          if(!/^([a-zA-z]+[0-9]+)|([0-9]+[a-zA-Z]+)$/i.test(this.passwordModel)){
              status = false
              errorText = "密码不正确"
          }else{
              status = true
              errorText = ""
          }
          if(!this.passwordFlag){
              errorText = ""
              this.passwordFlag = true
          }
          return {
              status,
              errorText
          }
      }
  },
  methods: {
      loginClick () {
        if(!this.userErrors.status || !this.passwordErrors.status){
            this.errorText = "部分选项未通过"
        }else{
            this.errorText = ""
            this.$http.get('api/login')
            .then((res) =>{
            this.$emit('has-login',res.data)
            },(err) =>{
            console.log(err)
            })
        }

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
