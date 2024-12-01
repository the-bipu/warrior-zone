<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "../stores/theme";

  import { Icon } from "svelte-icons-pack";
  import { AiTwotoneHeart } from "svelte-icons-pack/ai";
  import { BiBookmark } from "svelte-icons-pack/bi";
  import { BiComment } from "svelte-icons-pack/bi";

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
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex-1 flex flex-col justify-center items-center w-full">
  <div>
    {#if error}
      <p>Error: {error}</p>
    {:else if posts.length === 0}
      <p>Loading...</p>
    {:else}
      <div class="flex flex-col w-auto gap-4">
        {#each posts as item, index}
          <div
            class="w-96 shadow bg-white p-4 relative"
          >
            <h2 class="capitalize">By, {item.username}</h2>
            <div class="mt-2 mb-6">{item.confession}</div>

            <span class="absolute right-0 top-0 px-3 py-1">{item.type}</span>

            <div class="flex flex-row gap-4">
              <div class="flex flex-col items-center justify-center">
                <Icon src={AiTwotoneHeart} className="w-6 h-6 cursor-pointer" />
                {item.likes}
              </div>

              <div class="flex flex-col items-center justify-center">
                <Icon src={BiBookmark} className="w-6 h-6 cursor-pointer" />
                {item.saves}
              </div>

              <button
                type="button"
                class="flex flex-col items-center justify-center"
                on:click={() => toggleComments(index)}
                aria-expanded={toggleCommentVisibility[index]}
                aria-label={`Toggle comments for ${item.username}'s post`}
              >
                <Icon src={BiComment} className="w-6 h-6" />
                {item.comments.length}
              </button>
            </div>

            {#if toggleCommentVisibility[index]}
              <div class="mt-4 border-t pt-2">
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

            <!-- <p>
              <strong>Created At:</strong>
              {new Date(item.createdAt).toLocaleString()}
            </p> -->
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>
