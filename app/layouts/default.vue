<template>
  <div class="relative min-h-screen">
    <!-- Dot Grid Background -->
    <div
      class="fixed inset-0 dot-grid opacity-60 pointer-events-none -z-10"
      style="mask-image: linear-gradient(180deg, white, rgba(255,255,255,0.2)); -webkit-mask-image: linear-gradient(180deg, white, rgba(255,255,255,0.2));"
      aria-hidden="true"
    />

    <!-- Header -->
    <LayoutAppHeader />

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <LayoutAppFooter />

    <!-- Toast -->
    <UiToast />
  </div>
</template>
