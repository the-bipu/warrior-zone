<script lang="ts">
  import { page } from "$app/stores";
  import logo from "$lib/images/logo-hd.svg";
  import github from "$lib/images/github.png";
  import moon from "$lib/images/moon.png";
  import sun from "$lib/images/sun.png";
  import x from "$lib/images/x.svg";

  import { theme } from "../stores/theme";

  function toggleTheme() {
    theme.update((current) => (current === "light" ? "dark" : "light"));
  }
</script>

<header
  class="fixed top-0 left-0 md:w-24 w-full md:h-screen h-20 backdrop-blur-sm flex md:flex-col flex-row items-center justify-between py-4 md:px-0 px-6 border-r-2 border-r-[#ffffff9d]"
>
  <div class="corner">
    <a href="/">
      <img src={logo} alt="SvelteKit" />
    </a>
  </div>

  <div class="md:flex hidden flex-row gap-8 md:-rotate-90 rotate-0">
    <div aria-current={$page.url.pathname === "/" ? "page" : undefined}>
      <a href="/" class="text-white">Home</a>
    </div>
    <div aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
      <a href="/about" class="text-white">About</a>
    </div>
    <div aria-current={$page.url.pathname === "/confession" ? "page" : undefined}>
      <a href="/confession" class="text-white">Confession</a>
    </div>
    <div aria-current={$page.url.pathname === "/contact" ? "page" : undefined}>
      <a href="/contact" class="text-white">Contact</a>
    </div>
  </div>

  <div class="flex md:flex-col flex-row md:gap-5 gap-2 items-center justify-center">
    <img src={github} alt="GitHub" class="w-5 h-5" />
    <img src={x} alt="GitHub" class="w-4 h-4" />
    <button on:click={toggleTheme}>
      {#if $theme === "light"}
        <img src={moon} alt="Moon" class="w-8 h-8" />
        {:else}
        <img src={sun} alt="Sun" class="w-8 h-8" />
      {/if}
    </button>
  </div>
</header>
