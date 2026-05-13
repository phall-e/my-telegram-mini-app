<template>
  <div class="min-h-screen bg-[#070B14] text-white overflow-hidden">
    <!-- Background Glow -->
    <div
      class="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full"
    />
    <div
      class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"
    />

    <!-- Navbar -->
    <header
      class="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md"
    >
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center font-bold text-xl"
        >
          M
        </div>
        <h1 class="text-2xl font-bold tracking-wide">Musicify</h1>
      </div>

      <nav class="hidden md:flex items-center gap-8 text-gray-300">
        <a href="#" class="hover:text-white transition">Home</a>
        <a href="#" class="hover:text-white transition">Discover</a>
        <a href="#" class="hover:text-white transition">Albums</a>
        <a href="#" class="hover:text-white transition">Artists</a>
      </nav>

      <button
        class="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition"
      >
        Login
      </button>
    </header>

    <!-- Hero -->
    <section
      class="relative z-10 px-8 lg:px-20 py-16 grid lg:grid-cols-2 gap-16 items-center"
    >
      <!-- Left -->
      <div>
        <p
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300 mb-6"
        >
          🎵 New Generation Music Platform
        </p>

        <h1
          class="text-5xl lg:text-7xl font-black leading-tight mb-6"
        >
          Feel The
          <span
            class="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent"
          >
            Music
          </span>
          Inside You
        </h1>

        <p class="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
          Discover millions of songs, trending artists, curated playlists,
          and immersive music experiences with modern streaming technology.
        </p>

        <div class="flex flex-wrap gap-4">
          <button
            class="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition font-semibold shadow-lg shadow-pink-500/30"
          >
            Start Listening
          </button>

          <button
            class="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            Explore Now
          </button>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-6 mt-12">
          <div>
            <h2 class="text-3xl font-bold">10M+</h2>
            <p class="text-gray-400">Songs</p>
          </div>

          <div>
            <h2 class="text-3xl font-bold">500K+</h2>
            <p class="text-gray-400">Artists</p>
          </div>

          <div>
            <h2 class="text-3xl font-bold">2M+</h2>
            <p class="text-gray-400">Users</p>
          </div>
        </div>
      </div>

      <!-- Right -->
      <div class="relative flex justify-center">
        <!-- Main Card -->
        <div
          class="w-[360px] bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-6 shadow-2xl"
        >
          <div class="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop"
              class="w-full h-[340px] object-cover"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
            />

            <div class="absolute bottom-5 left-5">
              <h2 class="text-2xl font-bold">Midnight Echo</h2>
              <p class="text-gray-300">Ariana Nova</p>
            </div>
          </div>

          <!-- Player -->
          <div class="mt-6">
            <div class="flex items-center justify-between mb-2 text-sm">
              <span class="text-gray-400">1:24</span>
              <span class="text-gray-400">3:45</span>
            </div>

            <div class="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                class="w-1/2 h-full bg-gradient-to-r from-pink-500 to-purple-500"
              />
            </div>

            <div class="flex items-center justify-center gap-6 mt-6">
              <button
                class="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 transition"
              >
                ⏮
              </button>

              <button
                class="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-2xl shadow-lg shadow-pink-500/30 hover:scale-110 transition"
              >
                ▶
              </button>

              <button
                class="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 transition"
              >
                ⏭
              </button>
            </div>
          </div>
        </div>

        <!-- Floating Cards -->
        <div
          class="absolute -left-10 top-20 hidden lg:block bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-4 w-48"
        >
          <p class="text-sm text-gray-400 mb-2">Trending</p>

          <div class="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
              class="w-14 h-14 rounded-2xl object-cover"
            />

            <div>
              <h3 class="font-semibold">Sky Dream</h3>
              <p class="text-xs text-gray-400">Leon Ray</p>
            </div>
          </div>
        </div>

        <div
          class="absolute -right-10 bottom-10 hidden lg:block bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-4 w-52"
        >
          <p class="text-sm text-gray-400 mb-3">Popular Playlist</p>

          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span>Lo-fi Beats</span>
              <span class="text-pink-400">🔥</span>
            </div>

            <div class="flex items-center justify-between">
              <span>Night Drive</span>
              <span class="text-purple-400">🎧</span>
            </div>

            <div class="flex items-center justify-between">
              <span>Chill Vibes</span>
              <span class="text-blue-400">🎵</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Section -->
    <section class="relative z-10 px-8 lg:px-20 pb-16">
      <div
        class="grid md:grid-cols-3 gap-6"
      >
        <div
          class="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:bg-white/10 transition"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center text-2xl mb-5"
          >
            🎶
          </div>

          <h2 class="text-2xl font-bold mb-3">Unlimited Music</h2>

          <p class="text-gray-400">
            Enjoy unlimited streaming with ultra high-quality audio.
          </p>
        </div>

        <div
          class="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:bg-white/10 transition"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-2xl mb-5"
          >
            🚀
          </div>

          <h2 class="text-2xl font-bold mb-3">Fast Streaming</h2>

          <p class="text-gray-400">
            Stream songs instantly with cloud-based music delivery.
          </p>
        </div>

        <div
          class="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:bg-white/10 transition"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl mb-5"
          >
            ❤️
          </div>

          <h2 class="text-2xl font-bold mb-3">Personal Playlist</h2>

          <p class="text-gray-400">
            Build and organize your own favorite music collection.
          </p>
        </div>
      </div>
    </section>
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
    audio = new Audio(`/sound1.mp3`);
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