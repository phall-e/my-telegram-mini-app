<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <el-form
      label-position="top"
      label-width="auto"
      class="w-[95%] border rounded-md p-5"
      @submit.prevent="handleLogin"
    >
      <el-form-item
        label="Username"
      >
        <el-input v-model="formData.username" placeholder="Username" clearable/>
      </el-form-item>
      <el-form-item
        label="Password"
      >
        <el-input v-model="formData.password" type="password" placeholder="Password" show-password clearable/>
      </el-form-item>
      <el-form-item>
        <el-button type="success" native-type="submit" class="!w-full">Sign In</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script setup lang="ts">
  const formData = ref({
    username: '',
    password: '',
  });


  const handleLogin = () => {
    ElNotification({
      type: 'success',
      title: 'Successfully',
      message: 'Your logging is successfully.',
    });
  }

  const isPlaying = ref(false);
  let audio = null;

  onMounted( async() => {
    audio = new Audio(`/sound.mp3`);
    audio.loop = true;
    audio.volume = 0.5;

    try {
      await audio.play();
      console.log('Audio started');
    } catch (err) {
      console.log('Autoplay blocked by browser');
    }
    audio.preload = 'auto';
    
  })

</script>