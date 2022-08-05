<template>
    <div class="container">

        <HeaderWithLogout />

        <div class="content">

            <div class="row-superior">

                <TitlePage />

            </div>

        <div class="buttons">
            <div class="button-content">
                <button class="button-function" v-on:click="$router.push('/screen_cvSeguranca')">
                    <p class="tipo">Liberar Máquina</p>
                    <i class="pi pi-lock"></i>
                </button>
                <button class="button-function">
                    <p class="tipo">Interface Didática</p> 
                    <i class="pi pi-book"></i>
                </button>
            </div>
            <div class="button-content">
                <button class="button-function">
                    <p class="tipo">Documentos</p>
                    <i class="pi pi-folder-open" id="pi-doc"></i>
                </button>
                <button class="button-function">
                    <p class="tipo">Registros</p>
                    <i class="pi pi-list" id="pi-reg"><i class="pi pi-pencil" id="pi-list"></i></i>
                </button>
            </div>
            
        </div>
        
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    name: 'screen_home',
    data(){
        return{
            idMachine : '',
        }
    },
    mounted(){
        console.log("oi")
        console.log(this.$store.state)
        console.log('this.$store.state.machine', this.$store.state.ipAddressMachine)
        this.$axios.get(this.$store.state.BASE_URL + '/machines/' + this.$store.state.ipAddressMachine).then((response) => {
            console.log('oi created')
            this.idMachine = response.data.id;
            console.log('this.idMachine',this.idMachine);
            this.$store.dispatch("setidmachine", this.idMachine);
        }).catch((error) => {
            console.log(error)
        })
    }
    
    
}
</script>

<style lang="scss" scoped>
    @import "@/layouts/_normal_pages/Screen_Home.scss";
    @import "@/layouts/_responsividade/responsividade_grid.scss";
</style>