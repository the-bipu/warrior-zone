<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "../stores/theme";

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

<section class="flex-1 flex flex-col justify-center items-center w-full">
  <div>
    <h1 class="uppercase text-xl font-bold">
      The Subtle Art of not giving a fuck
    </h1>

    <button on:click={toggleTheme}>
      Switch to {$theme === "light" ? "Dark" : "Light"} Mode
    </button>

    <p>Current theme: {$theme}</p>

    {#if error}
      <p>Error: {error}</p>
    {:else if posts.length === 0}
      <p>Loading...</p>
    {:else}
      <div class="flex flex-col w-auto gap-4">
        {#each posts as item}
          <div class="border border-dashed border-black rounded shadow bg-white">
            <h2>{item.username}</h2>
            <p><strong>Confession:</strong> {item.confession}</p>
            <p><strong>Type:</strong> {item.type}</p>
            <p><strong>Likes:</strong> {item.likes}</p>
            <p><strong>Saves:</strong> {item.saves}</p>

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
