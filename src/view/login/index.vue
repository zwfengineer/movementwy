<template>
  <div class="login-container">
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">
          {{ login.title }}
        </h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <i class="el-icon-user" />
        </span>
        <el-input
          ref="userNameRef"
          v-model="loginForm.username"
          :placeholder="'login.username'"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip
        v-model="capsTooltip"
        content="Caps lock is On"
        placement="right"
        manual
      >
        <el-form-item prop="password">
          <span class="svg-container">
            <i class="el-icon-lock" />
          </span>
          <el-input
            :key="passwordType"
            ref="passwordRef"
            v-model="loginForm.password"
            :type="passwordType"
            :placeholder="'login.password'"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :name="passwordType === 'password' ? 'eye-off' : 'eye-on'"
            />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.prevent="handleLogin"
      >
        {{ login.login }}
      </el-button>

      <!-- <div style="position: relative">
        <div class="tips">
          <span>{{ "login.username" }} : admin </span>
          <span>{{ "login.password" }} : {{ "login.any" }} </span>
        </div>
        <div class="tips">
          <span>{{ "login.username" }} : editor </span>
          <span>{{ "login.password" }} : {{ "login.any" }} </span>
        </div>
      </div> -->
    </el-form>
    <!-- 
    <el-dialog :title="'login.thirdparty'" v-model="showDialog">
      {{ "login.thirdpartyTips" }}
      <br />
      <br />
      <br />
    </el-dialog> -->
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  watch,
  ref,
  nextTick,
  toRefs,
} from "vue";
// import { isValidUsername } from '@/utils/validate'
// import { useRoute, LocationQuery, useRouter } from 'vue-router'
// import { useStore } from '@/store'
// import { UserActionTypes } from '@/store/modules/user/action-types'
export default defineComponent({
  components: {},
  setup() {
    const userNameRef = ref(null);
    const passwordRef = ref(null);
    const loginFormRef = ref(null);
    // const router = useRouter()
    // const route = useRoute()
    const state = reactive({
      loginForm: {
        username: "admin",
        password: "111111",
      },
      loginRules: {
        username: [{ validator: userNameRef, trigger: "blur" }],
        password: [{ validator: passwordRef, trigger: "blur" }],
      },
      passwordType: "password",
      loading: false,
      showDialog: false,
      capsTooltip: false,
      redirect: "",
      otherQuery: {},
    });

    const login = {
      title: "欢迎登录网易优选",
      login: "登录",
    };
    const methods = reactive({
      //   validateUsername: (rule: any, value: string, callback: Function) => {
      //     if (!isValidUsername(value)) {
      //       callback(new Error('Please enter the correct user name'))
      //     } else {
      //       callback()
      //     }
      //   },
      //   validatePassword: (rule: any, value: string, callback: Function) => {
      //     if (value.length < 6) {
      //       callback(new Error('The password can not be less than 6 digits'))
      //     } else {
      //       callback()
      //     }
      //   },
      checkCapslock: (e: KeyboardEvent) => {
        const { key } = e;
        state.capsTooltip =
          key !== null && key.length === 1 && key >= "A" && key <= "Z";
      },
      showPwd: () => {
        if (state.passwordType === "password") {
          state.passwordType = "";
        } else {
          state.passwordType = "password";
        }
        nextTick(() => {
          (passwordRef.value as any).focus();
        });
      },
      handleLogin: () => {
        console.log("handleLogin");

        // (loginFormRef.value as any).validate(async(valid: boolean) => {
        //   if (valid) {
        //     state.loading = true
        //     router
        //       .push({
        //         path: state.redirect || '/',
        //         query: state.otherQuery
        //       })
        //       .catch(err => {
        //         console.warn(err)
        //       })
        //     // Just to simulate the time of the request
        //     setTimeout(() => {
        //       state.loading = false
        //     }, 0.5 * 1000)
        //   } else {
        //     return false
        //   }
        // })
      },
    });

    // function getOtherQuery(query: LocationQuery) {
    //   return Object.keys(query).reduce((acc, cur) => {
    //     if (cur !== 'redirect') {
    //       acc[cur] = query[cur]
    //     }
    //     return acc
    //   }, {} as LocationQuery)
    // }

    // watch(() => route.query, query => {
    //   if (query) {
    //     state.redirect = query.redirect?.toString() ?? ''
    //     state.otherQuery = getOtherQuery(query)
    //   }
    // })

    onMounted(() => {
      if (state.loginForm.username === "") {
        (userNameRef.value as any).focus();
      } else if (state.loginForm.password === "") {
        (passwordRef.value as any).focus();
      }
    });

    return {
      login,
      userNameRef,
      passwordRef,
      loginFormRef,
      ...toRefs(state),
      ...toRefs(methods),
    };
  },
});
</script>

<style lang="less">
.login-container {
  background: url(./../../assets/picture.jpg) no-repeat center;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  overflow: hidden;
  // background-color: $loginBg;
  .login-form {
    position: relative;
    // width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: blue;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: #fff;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    .set-language {
      color: #fff;
      position: absolute;
      top: 3px;
      font-size: 18px;
      right: 0px;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: blue;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
}
</style>
<style>
body {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
.box {
  height: 100%;
  width: 100%;
}
</style>
