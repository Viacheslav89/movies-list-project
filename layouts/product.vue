<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
      </nav>
    </header>

    <div>
      <slot />
    </div>

  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: green;
}
</style>
