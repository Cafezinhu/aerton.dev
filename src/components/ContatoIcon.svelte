<script lang="ts">
    export let href: string;
    export let text: string;

    function click(e: MouseEvent){
        if(href == ""){
            e.preventDefault();
            navigator.clipboard.writeText(text);
        }
    }
</script>

<a href={href}
class="flex icon transition-all items-center gap-2"
on:click={click}>
    <div class="flex w-10">
        <slot />
    </div>
    <p class="text-primary-1">{text}</p>
</a>

<style lang="postcss">
    .icon{
        filter: invert(37%) sepia(6%) saturate(2842%) hue-rotate(213deg) brightness(91%) contrast(83%);
    }

    .icon:hover{
        filter: invert(77%) sepia(52%) saturate(550%) hue-rotate(70deg) brightness(98%) contrast(105%);
    }
</style>