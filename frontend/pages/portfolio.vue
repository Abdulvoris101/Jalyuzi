<template>
    <div id="portfolio">
        <div class="container">
            <h4 class="portfolio-title mt-3 mb-3">Portfolio</h4>

            <div class="row mb-5">
                <div class="col-lg-3 col-md-4 col-sm-6 col-6 mb-3" v-for="(post, index) in posts" :key="index">

                    <nuxt-link :to="post.permalink" class="text-dark" style="text-decoration: none;">
                        <article class="card insta-card" style="box-shadow: none !important;">
                
                        <div class="card-image ">
                          <img :src="post.mediaUrl" v-if="post.mediaType == 'IMAGE'" class="img-fluid img" :alt="post.caption">
                          <img :src="post.thumbnailUrl" v-else class="img-fluid img" :alt="post.caption">
                        </div> <!-- card-image end//-->
                        
                        
                        <main class="card-content" v-if="post.caption">
                         
                          <div class="media">
        
                                <div class="content">
                                    <span class="content-body" >{{ post.caption }}</span>
                                    
                                </div> <!-- content end // -->
                            </div>
                        </main>
                        
                    </article></nuxt-link>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>

const { data } = await useFetch('https://feeds.behold.so/ran2jUY85ACMmkU6mxiA')
let posts = data

</script>


<style>
.card-image img {
    max-height: 300px;
}
.card-content {
    padding: 8px;
}
.content-body {
    overflow:hidden; 
    white-space:nowrap; 
    text-overflow:ellipsis; 
    width:200px; 
    display: block;   
 
}
</style>


<!-- IGQVJYaWRJdU1ab2FyaWdLVndsMXhwajg2dXhpM1dNUGM2ZAmxMb05hVnZAGMnRvRXJqUjkwb1VoVDR3aTFRUnV5ZA0NnRW5nWGczTTdCNkl0MWVWQ0ttX0ZAHN1M1Vkk0VVNWTjhaY0lEWmY1SGZAsV3dDdgZDZD -->
