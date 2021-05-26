<template>
    <div class="game-box" target="_blank">
        <a :href="gameLink">
            <div class="game-img" :style="{ backgroundImage: `url(${image})` }"></div>
        </a>
        <p class="game-title text-center"> 
            <a :href="gameLink" target="_blank">
                {{title}}
            </a>
        </p>
        <p class="game-desc text-center">{{desc}}</p>
    </div>
</template>
<script>
    export default {
        name: 'GameTemplate',
        props: {
            'title': String,
            'image': String,
            link:{
                type:String
            },
            'desc':String
        },
        data: () => ({
            gameLink: String
        }),
        mounted(){
            this.gameLink = this.link
        }
    }
</script>
<style scoped>
    .game-box{
        max-width:250px;
        margin:10px auto;
    }
    .game-img{
        width:100%;
        height:300px;
        background-size:cover;
        background-position:center;
    }
    .game-title{
        color:white;
        margin:10px 0 0;
        font-size:16px;
    }
    .game-desc{
        margin-bottom:20px;
        font-size:16px;
        color:#ECECEC;
    }
    a{
        color:white;
    }
</style>