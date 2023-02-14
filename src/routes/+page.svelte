<script lang="ts">
    import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
    import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
    import FaDiscord from 'svelte-icons/fa/FaDiscord.svelte';
    import ContatoIcon from '../components/ContatoIcon.svelte';
    import Link from '../components/Link.svelte';

    let contatos: HTMLDivElement;

    function scrollToContatos(){
        contatos.scrollIntoView({behavior: 'smooth'});
    }
</script>

<main class="bg-primary-4 h-screen flex justify-center items-center">
    <div class="p-4">
        <p class="text-secondary-1 text-xl">Olá, meu nome é</p>
        <h1 class="text-gray-200 text-5xl md:text-6xl lg:text-9xl mb-2">Aerton Oliveira</h1>
        <h2 class="text-gray-300 text-xl">Sou desenvolvedor de software, construtor de sites, aplicativos e games.</h2>
        <div class="flex mt-3">
            <button 
                class="border-secondary-1 rounded-md border-2 text-secondary-1 hover:bg-secondary-1 hover:text-primary-4 transition-all text-xl p-1"
                on:click={scrollToContatos}>
                Entrar em contato
            </button>
            <Link href="/blog">
                <div 
                    class="border-tertiary-1 rounded-md border-2 text-tertiary-1 hover:bg-tertiary-1 hover:text-primary-4 transition-all text-xl p-1 ml-2 cursor-pointer" 
                >Blog</div>
            </Link>
        </div>
    </div>
</main>

<div class="bg-primary-4 flex flex-col justify-center items-center" bind:this={contatos}>
    <h1 class="text-gray-200 text-4xl">Contato</h1>
    <div class="flex flex-col my-4 gap-4">
        <ContatoIcon href="https://www.linkedin.com/in/aerton-castro-de-oliveira/" text="in/aerton-castro-de-oliveira">
            <FaLinkedin />
        </ContatoIcon>
        <ContatoIcon href="https://github.com/Cafezinhu" text="Cafezinhu">
            <FaGithubSquare />
        </ContatoIcon>
        <ContatoIcon href="" text="Cafezinho#0059">
            <FaDiscord />
        </ContatoIcon>
    </div>
</div>