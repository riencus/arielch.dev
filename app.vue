<template>
  <div class="h-screen flex justify-center items-center bg-gray-50">
    <h1 class="text-5xl font-bold text-gray-800">
      Under Construction 🚧<span class="animate-blink">|</span>
    </h1>
  </div>
</template>

<style>
@keyframes blink {
  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 1s step-end infinite;
}
</style>
