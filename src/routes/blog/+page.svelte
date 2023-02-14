<script lang="ts">
    import Link from "../../components/Link.svelte";

    export let data: {posts: string[]};
</script>

<h1>Blog</h1>
{#each data.posts as post}
    <Link 
    href={`/blog/${post}`}
    >post</Link>
{/each}
<!-- on:click={(e) => clickPost(post, e)} -->
