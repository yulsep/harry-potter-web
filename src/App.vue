<template>
  <main id="main">
    <header>
      <img
        src="https://enplandeviajes.com/wp-content/uploads/2020/10/WWoHP-Logo.png"
        alt="Harry Potter Wiki Logo"
        class="header__logo"
      />
    </header>
    <router-view></router-view>
  </main>
</template>

<style>
#main {
  background-color: var(--bg-main);
  background-image: url(./assets/images/BackgroundImage.jpg);
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wrapper--grid {
  display: flex;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
  padding: 2rem;
}

.header__title {
  color: rgb(189, 162, 53);
  margin-bottom: 2rem;
}

.header__logo {
  width: 600px;
  justify-content: center;
}

.wrapper--grid__characters {
  width: 1500px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}
</style>
