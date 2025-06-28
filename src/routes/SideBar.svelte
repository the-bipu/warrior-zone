<script lang="ts">
  import { onMount } from "svelte";

  import post1 from "$lib/images/001.jpg";
  import post2 from "$lib/images/002.jpg";
  import dots from "$lib/images/three-dot.svg";

  import { theme } from "../stores/theme";
  import { BiCollapse, BiCross, BiSearch } from "svelte-icons-pack/bi";
  import { Icon } from "svelte-icons-pack";

  let posts: any[] = [];
  let error: string | null = null;

  let isSidebarOpen = false;
  let isSearchOpen = false;

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }

  function toggleSearch() {
    isSearchOpen = !isSearchOpen;
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

<div
  class={`fixed md:flex hidden flex-row items-center justify-center gap-2 ${isSidebarOpen ? "right-4" : "right-80 mr-4"} top-4`}
>
  <button
    on:click={toggleSearch}
    class={`bg-[#00000023] w-9 h-9 flex items-center justify-center rounded-full text-white shadow cursor-pointer ${isSearchOpen ? "hidden" : "flex"}`}
  >
    <Icon src={BiSearch} />
  </button>
  <div
    class={`bg-[#00000023] rounded-full text-white shadow cursor-pointer ${isSearchOpen ? "w-48 h-9 flex justify-between items-center px-3" : "hidden"}`}
  >
    <Icon src={BiSearch} on:click={toggleSearch} />
    <input
      type="text"
      class={`flex outline-none bg-transparent w-32`}
    />
    <button on:click={toggleSearch}>
      <Icon src={BiCollapse} />
    </button>
  </div>
  <hr class="w-6 rotate-90 bg-white" />
  <button
    on:click={toggleSidebar}
    class={`bg-[#00000023] px-4 h-8 rounded shadow cursor-pointer `}
  >
    <img src={dots} alt="dots" class="w-8 h-8" />
  </button>
</div>

<div
  class={`fixed top-0 ${isSidebarOpen ? "w-0 opacity-0 -right-80" : "right-0"} w-80 h-screen backdrop-blur-sm md:flex hidden flex-col items-center justify-start pt-16 border-l-2 border-l-[#ffffff9d] shadow overflow-y-auto`}
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
        {#each posts.slice(0,3) as item, index}
          <div class="text-white font-bold text-lg">#0{index + 1}</div>
          <img src={post2} alt="" class="w-full h-40 rounded-lg shadow object-cover" />
          <div class={`w-full relative text-white`}>
            <h2 class="uppercase font-semibold text-base">
              By, {item.username}
            </h2>
            <div class="text-base font-light mb-6">{item.confession}</div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
