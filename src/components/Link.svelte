<script lang="ts">
    export let href: string;
    function click(path: string, e: MouseEvent){
        if(import.meta.env.DEV) return;
        e.preventDefault();
        window.location.href = `${path}.html`;
    }
</script>

<a href={href} on:click={(e) => click(href, e)}>
    <slot />
</a>