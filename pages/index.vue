<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <el-form
      label-position="top"
      label-width="auto"
      class="w-[95%] border rouded-md p-5"
    >
      <el-form-item
        label="Username"
      >
        <el-input placeholder="Username" clearable/>
      </el-form-item>
      <el-form-item
        label="Password"
      >
        <el-input type="password" placeholder="Password" show-password clearable/>
      </el-form-item>
      <el-form-item>
        <el-button type="success" class="!w-full">Sign In</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>