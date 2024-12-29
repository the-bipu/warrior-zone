<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "../../stores/theme";

  // Icons Import
  import { Icon } from "svelte-icons-pack";
  import { AiTwotoneHeart } from "svelte-icons-pack/ai";
  import { BiBookmark } from "svelte-icons-pack/bi";
  import { BiComment } from "svelte-icons-pack/bi";

  // Images Import
  import post2 from "$lib/images/002.jpg";

  let toggleCommentVisibility: boolean[] = [];

  function toggleTheme() {
    theme.update((current) => (current === "light" ? "dark" : "light"));
  }

  let posts: any[] = [];
  let error: string | null = null;

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

  function toggleComments(index: number) {
    toggleCommentVisibility[index] = !toggleCommentVisibility[index];
  }
</script>

<svelte:head>
  <title>Confessions</title>
  <meta name="description" content="All Confessions" />
</svelte:head>

<div class="flex flex-col items-center justify-start w-full h-full">
  <div class="w-10/12 h-full py-24 text-white">
    <h1 class="font-bold text-2xl uppercase">Confessions</h1>

    <div class="w-10/12 h-full mt-4">
      <div class="flex flex-row justify-start items-center w-10/12">
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
          <div class="flex flex-row flex-wrap w-full gap-6">
            {#each posts as item, index}
              <div class="flex flex-col w-auto gap-4">
                <div class="text-white font-bold text-lg">#0{index + 1}</div>
                <img
                  src={post2}
                  alt=""
                  class="w-72 h-40 rounded-lg shadow object-cover"
                />
                <div class={`w-full relative text-white`}>
                  <h2 class="uppercase font-semibold text-base">
                    By, {item.username}
                  </h2>
                  <div class="text-base font-light">{item.confession}</div>
                </div>
                <hr class="w-full bg-white" />

                <!-- likes, saves and comments -->
                <div class="flex flex-row gap-4">
                  <div class="flex flex-row gap-2 items-center justify-center">
                    <Icon
                      src={AiTwotoneHeart}
                      className="w-6 h-6 cursor-pointer"
                    />
                    {item.likes}
                  </div>
                  <div class="flex flex-row gap-2 items-center justify-center">
                    <Icon src={BiBookmark} className="w-6 h-6 cursor-pointer" />
                    {item.saves}
                  </div>
                  <button
                    type="button"
                    class="flex flex-row gap-2 items-center justify-center"
                    on:click={() => toggleComments(index)}
                    aria-expanded={toggleCommentVisibility[index]}
                    aria-label={`Toggle comments for ${item.username}'s post`}
                  >
                    <Icon src={BiComment} className="w-6 h-6" />
                    {item.comments.length}
                  </button>
                </div>

                {#if toggleCommentVisibility[index]}
                  <div class="border-t pt-2 w-72">
                    <h3 class="text-lg font-semibold">Comments</h3>
                    <ul>
                      {#each item.comments as comment}
                        <li class="mt-2">
                          <strong>{comment.username}:</strong>
                          {comment.message}
                          {#if comment.replies.length > 0}
                            <ul class="ml-4">
                              {#each comment.replies as reply}
                                <li>
                                  <strong>{reply.username}:</strong>
                                  {reply.message}
                                </li>
                              {/each}
                            </ul>
                          {/if}
                        </li>
                      {/each}
                    </ul>
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
