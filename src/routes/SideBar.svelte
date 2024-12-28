<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  import post from "$lib/images/background.png";
  import github from "$lib/images/github.png";
  import moon from "$lib/images/moon.png";
  import sun from "$lib/images/sun.png";
  import dots from "$lib/images/three-dot.svg";

  import { theme } from "../stores/theme";

  let posts: any[] = [];
  let error: string | null = null;

  let isSidebarOpen = false;

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }

  onMount(async () => {
    try {
      const response = await fetch("/api/getdata");
      if (!response.ok) throw new Error("Failed to fetch posts");
      posts = await response.json();
      console.log(posts);
    } catch (err: any) {
      error = err.message;
    }
  });

  function toggleTheme() {
    theme.update((current) => (current === "light" ? "dark" : "light"));
  }
</script>

<button
  on:click={toggleSidebar}
  class={`absolute bg-[#00000023] px-4 h-9 rounded shadow cursor-pointer ${isSidebarOpen ? "right-4" : "right-80 mr-4"} top-4`}
>
  <img src={dots} alt="dots" class="w-8 h-8" />
</button>
<div
  class={`absolute top-0 ${isSidebarOpen ? "w-0 opacity-0" : "right-0"} w-80 h-screen backdrop-blur-sm flex flex-col items-center justify-start pt-16 border-l-2 border-l-[#ffffff9d] shadow overflow-y-auto`}
  style="scrollbar-width: none; -ms-overflow-style: none;"
>
  <div class="flex w-10/12 h-auto text-xl font-bold text-white pb-4">
    Trending Confessions
  </div>
  <div class="flex flex-col justify-center items-center w-10/12">
    {#if error}
      <p>Error: {error}</p>
    {:else if posts.length === 0}
      <div class="pyramid-loader">
        <div class="wrapper">
          <span class="side side1"></span>
          <span class="side side2"></span>
          <span class="side side3"></span>
          <span class="side side4"></span>
          <span class="shadow"></span>
        </div>
      </div>
    {:else}
      <div class="flex flex-col w-full gap-4">
        {#each posts as item, index}
          <div class="text-white font-bold text-lg">#0{index + 1}</div>
          <img src={post} alt="" class="w-full h-auto rounded-lg shadow" />
          <div class={`w-full relative text-white`}>
            <h2 class="uppercase font-semibold text-base">By, {item.username}</h2>
            <div class="text-base font-light mb-6">{item.confession}</div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
