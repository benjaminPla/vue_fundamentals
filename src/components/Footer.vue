<template>
  <footer class="footer bg-light pt-3" data-testid="footer">
    <div class="container" data-testid="container">
      <div class="row" data-testid="row">
        <div class="col" data-testid="col">
          <p class="text-center" data-testid="text">
            &copy; {{ new Date().getFullYear() }} Vue Fundamentals
          </p>
        </div>
      </div>
      <div class="row" data-testid="row">
        <div class="col" data-testid="col">
          <ul
            class="list-unstyled d-flex justify-content-center"
            data-testid="ul"
          >
            <li class="mx-3" data-testid="li">
              <router-link to="/">Home</router-link>
            </li>
            <li class="mx-3" data-testid="li">
              <a href="https://www.benjaminpla.com" target="_blank">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
