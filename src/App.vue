<template>
  <main id="main">
    <header>
      <h1 class="header__title">Harry Potter Wiki</h1>
    </header>
    <router-view></router-view>
  </main>
</template>

<style>
#main {
  background-color: var(--bg-main);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wrapper--grid {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 90%;
  box-sizing: border-box;
  padding: 2rem;
}

.header__title {
  color: rgb(189, 162, 53);
  margin-bottom: 2rem;
}
</style>
