<template>
   <div class="container">
       <div class="row d-flex justify-content-end">
           <div class="col-3">
            <router-link to="/" class="logout-btn">
                Logout
            </router-link>
           </div>
       </div>
       <Logo/>
       <h1 class="big-title text-center">Games Showcase</h1>
       <div class="games-content pt-3">
           <div class="row">
                <div class="col-lg-3 col-md-4 col-12 col-xs-6" v-for="game in games" :key="game.id">
                    <GameTemplate
                            :title="game.title"
                            :image="'https://gamesshowcase.uid-testing.space/storage/'+game.image"
                            :link="game.link"
                            :desc="game.description"
                    />
                </div>
           </div>
       </div>
   </div>
</template>
<script>
    import axios from "axios";
    import Logo from './Logo';
    import GameTemplate from './GameTemplate';
    import * as $ from 'jquery'
    export default {
        name: 'Games',
        components:{
            Logo,
            GameTemplate
        },
        data: () => ({
            games: null
        }),
        mounted() {
            axios.get("http://localhost:8080/api/get/games").then((result) =>(this.games = result.data))
            $(document).on('click','.logout-btn',function(){
                $(this).addClass('clicked');
            });
        }
    }
</script>
<style scoped>
    .container{
        padding-top:60px;
        padding-bottom:100px;
    }
    .logout-btn{
        cursor:pointer;
        background-color:#d0d0d0;
        color:black;
        font-weight:500;
        border-radius:5px;
        padding:5px 10px;
        box-shadow:0px 3px 4px rgba(0,0,0,.08)
    }
    .big-title{
        font-size:35px;
        color:white;
        font-family:'Alegreya Sans', sans-serif
    }
    @media (min-width:1200px){
        .container{
            max-width:1140px;
        }
    }
</style>