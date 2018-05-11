<template>
    <div>
        <h1>{{index.welcome}}</h1>
        <h2>{{index.welcome2}}</h2>
        <h3>{{local}}</h3>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name:'Index',
        components:{},
        computed:{
            local: () => 'hello local!',
            ...mapState([
                'index'
            ]),
        }
    }
</script>