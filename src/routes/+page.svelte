<script lang="ts">
  import { theme } from "../stores/theme";

  function toggleTheme() {
    theme.update((current) => (current === "light" ? "dark" : "light"));
  }
</script>

<svelte:head>
  <title>Warrior Zone | Home</title>
  <meta name="description" content="Welcome to Warrior Zone - Express, discover, and share your thoughts freely on our homepage." />
</svelte:head>

<section class="flex flex-col justify-center items-center w-full">
  <div class="md:w-10/12 w-11/12 h-full py-24 text-white">
    <div class="md:text-lg text-base md:font-medium font-light mb-2 md:pl-0 pl-2">Express freely what you feel;</div>
    <div
      class="md:text-6xl text-5xl font-light md:w-[550px] w-full md:leading-[52px] leading-[40px] nightshade"
    >
      Explore, Discover and write your own worst.
    </div>
    <div class="flex flex-row gap-4 mt-8">
      <a href="/confession">
        <button
          class="border-2 border-[#fffffff2] backdrop-blur hover:shadow rounded-tl-xl rounded-br-md px-6 py-2"
        >
          Explore
        </button>
      </a>
      <a href="/confess">
        <button
          class="border-2 border-[#fffffff2] backdrop-blur hover:shadow rounded-tl-xl rounded-br-md px-6 py-2"
        >
          Confess
        </button>
      </a>
    </div>
  </div>
</section>
