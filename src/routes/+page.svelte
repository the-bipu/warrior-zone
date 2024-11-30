<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "../stores/theme";

  import { Icon } from "svelte-icons-pack";
  import { AiTwotoneHeart } from "svelte-icons-pack/ai";
  import { BiBookmark } from "svelte-icons-pack/bi";
  import { BiComment } from "svelte-icons-pack/bi";

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
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class={`flex-1 flex flex-col justify-center items-center w-full`}>
  <div>
    {#if error}
      <p>Error: {error}</p>
    {:else if posts.length === 0}
      <p>Loading...</p>
    {:else}
      <div class="flex flex-row flex-wrap w-auto gap-4">
        {#each posts as item}
          <div
            class="border border-dashed border-black rounded-xl shadow bg-white p-4 relative"
          >
            <h2 class="capitalize">By, {item.username}</h2>
            <div class="mt-2 mb-6">{item.confession}</div>

            <span class="absolute right-0 top-0 px-3 py-1">{item.type}</span>

            <div class="flex flex-row gap-4">
              <div class="flex flex-col items-center justify-center">
                <Icon src={AiTwotoneHeart} className="w-6 h-6" />
                {item.likes}
              </div>

              <div class="flex flex-col items-center justify-center">
                <Icon src={BiBookmark} className="w-6 h-6" />
                {item.saves}
              </div>

              <div class="flex flex-col items-center justify-center">
                <Icon src={BiComment} className="w-6 h-6" />
                {item.comments.length}
              </div>
            </div>

            <div>
              <p><strong>Comments:</strong></p>
              <ul>
                {#each item.comments as comment}
                  <li>
                    <strong>{comment.username}:</strong>
                    {comment.message}
                    {#if comment.replies.length > 0}
                      <ul>
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

            <p>
              <strong>Created At:</strong>
              {new Date(item.createdAt).toLocaleString()}
            </p>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>
