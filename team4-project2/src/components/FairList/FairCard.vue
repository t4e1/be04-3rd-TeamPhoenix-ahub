<template>
    <div class="postCard" @click="changeRoute(fair.fairId)">
                    <div class="listImg" >
                        <!-- <img class="listThumnail" :src="fair.thumImage" alt="thumb"> -->
                        <img class="listThumnail" src="https://bsiwse.com/data/designImages/POPUP_1709860556.png" alt="thumb">
                    </div>
                    <div class="listContent">
                        <div id="content-title">
                            <div id="postTitle">
                                {{ fair.fairTitle }}
                            </div>
                            <div id="postNum">
                                #{{ fair.fairId }}
                            </div>
                        </div>
                        <div id="content-description">
                            <div>
                                {{ fair.fairContent }}
                            </div>
                        </div>
                        <div id="content-location">
                            <div class="locationitem" style="margin: 0 5px 0 0;">
                                {{ fair.fairStartdate }}
                            </div>
                            <p style="padding: 5px">~</p>
                            <div class="locationitem" style="margin: 0 5px 0 0;">
                                {{ fair.fairEnddate }}
                            </div>
                            <div class="locationitem" id="event-location">
                                {{ fair.fairLocation }}
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const props = defineProps(['fair']);
    const fair = props.fair;

    function changeRoute(fairId) {
        console.log(props);
        router.push(`/board/fairs/${fairId}`);
    }
</script>

<style scoped>
.postCard {
    height: 150px;
    display: flex;
    flex-direction: row;
    width: 100%;
}

.postCard :hover {
    cursor: pointer;
}

.listImg {
    border: 0.5px solid rgb(227, 224, 224);
    width: 27%;
    height: 150px;
    overflow: hidden;
}

.listImg img {
    transition: 0.3s;
}

.listImg img:hover {
    transform: scale(1.1);
}

.listThumnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.listContent {
    padding: 0;
    margin: 0;
    border: 0.5px solid rgb(227, 224, 224);
    overflow: hidden;
    transition: border-color 0.3s;
    width: 73%;
}

.postCard:hover .listContent {
    filter: blur(0.5px);
    border-color: #d490e0;
}

#content-title{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    height: 50px;

}

#postTitle{
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 0 3px;
}

#postNum{
    font-size: 10px;
    margin: 15 0 0 0;
    color: rgb(220, 218, 218);
}

#content-description {
    height: 50px;
    display: flex;
    align-items: center;
    margin: 0 0 0 3px;
    color:rgb(73, 70, 70);
    font-size: 12px;
}

#content-location {
    display: flex;
    flex-direction: row;
    height: 50px;
}
.locationitem {
    font-size:9pt ;
    width: 80px;
    height: 30px;
    padding: 5px 0 0 3px;
    color:rgb(87, 85, 85);
}

#event-location{
    width: 400px;
}
</style>