<template>
    <main>
        <div class="board-title">
            <div id="board-title">
                <h2>페어 정보 등록</h2>
            </div>
            <div id="board-btn">
                <button class="addBtn" type="button" @click="addNewPost"> 등록하기 </button>
            </div>
        </div>
        <div class="others">
            <div class="thumImage">
                섬네일 이미지 등록창
            </div>
            <div class="other-content">
                <div class="oc-title">
                    <div class="oc-title-1"> 제목 </div>
                    <div class="oc-title-2">
                        <input type="text" v-model.trim="fairInfo.fairTitle">
                    </div>
                </div>
                <div class="oc-location-area">
                    <div class="oc-location-area-1"> 지역 / 장소 </div>
                    <div class="oc-location-area-2">
                        <select class="form-control" name="fairArea" v-model="fairInfo.fairArea"
                            style="height: 30px; width: auto; font-size: 12px;">
                            <option value="서울특별시">서울특별시</option>
                            <option value="인천광역시">인천광역시</option>
                            <option value="대전광역시">대전광역시</option>
                            <option value="대구광역시">대구광역시</option>
                            <option value="부산광역시">부산광역시</option>
                            <option value="광주광역시">광주광역시</option>
                            <option value="세종특별자치시">세종특별자치시</option>
                            <option value="경기도">경기도</option>
                            <option value="강원특별자치도">강원특별자치도</option>
                            <option value="충청북도">충청북도</option>
                            <option value="충청남도">충청남도</option>
                            <option value="전북특별자치도">전북특별자치도</option>
                            <option value="전라남도">전라남도</option>
                            <option value="경상북도">경상북도</option>
                            <option value="경상남도">경상남도</option>
                            <option value="제주특별자치도">제주특별자치도</option>
                        </select>
                        <div>
                            <input type="text" v-model.trim="fairInfo.fairLocation" placeholder="개최 장소를 입력해주세요!">
                        </div>
                    </div>
                </div>
                <div class="oc-during-date">
                    <div class="oc-during-date-1">개최일</div>
                    <div class="oc-during-date-2">
                        <div>
                            <input type="date" v-model="fairInfo.fairStartdate">
                        </div>
                        <div>
                            <input type="date" v-model="fairInfo.fairEnddate">
                        </div>
                    </div>
                </div>
                <div class="oc-tags">
                    <div class="oc-tags-1">태그</div>
                    <div class="oc-tags-2">
                        <div class="col-sm-8">
                            <div class="form-check form-check-inline">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="와인"
                                        v-model="fairInfo.fairTags" @click="tagCheck"> 와인
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="위스키"
                                        v-model="fairInfo.fairTags" @click="tagCheck"> 위스키
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="브랜디"
                                        v-model="fairInfo.fairTags" @click="tagCheck"> 브랜디
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="맥주"
                                        v-model="fairInfo.fairTags" @click="tagCheck"> 맥주
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="칵테일"
                                        v-model="fairInfo.fairTags" @click="tagCheck"> 칵테일
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="전통주"
                                        v-model="fairInfo.fairTags" @click="tagCheck"> 전통주
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="일본주"
                                        v-model="fairInfo.fairTags" @click="tagCheck"> 일본주
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="기타 주류"
                                        v-model="fairInfo.fairTags" @click="tagCheck"> 기타주류
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="oc-files">
                </div>
            </div>
        </div>
        <div class="content">
            <textarea name="fairContent" id="summernote" placeholder="내용을 입력해주세요!">
            </textarea>
        </div>
        <!-- <button type='button' @click="summernotecheck">확인하기 </button> -->
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// function summernotecheck() {
//     console.log($('#summernote').summernote('code'));
// }

const router = useRouter();

const fairInfo = ref({
    fairTitle: '',
    fairArea: '',
    fairStartdate: '',
    fairEnddate: '',
    fairTags: [],
    fairLocation: '',
    fairContent: ''
})

function tagCheck() {
    if (fairInfo.value.fairTags.value > 4) {
        alert('최대 3개의 태그를 선택할 수 있습니다.');
        return false;
    }
}

async function addNewPost() {

    fairInfo.value.fairContent = $('#summernote').summernote('code');

    console.log(JSON.stringify(fairInfo.value));
    // axios.post('http://localhost:8000/board/fairs/new', post)
    //     .then((res) => {
    //         console.log(res.data);
    //         router.push('/board/fairs');
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
}



// console.log('fairContent 반응하나?', fairContent.value);


$(document).ready(function () {
    $('#summernote').summernote({
        codeviewFilter: false, // 코드 보기 필터 비활성화
        codeviewIframeFilter: false, // 코드 보기 iframe 필터 비활성화

        height: 500, // 에디터 높이
        minHeight: null, // 최소 높이
        maxHeight: null, // 최대 높이
        focus: true, // 에디터 로딩 후 포커스 설정
        lang: 'ko-KR', // 언어 설정 (한국어)

        toolbar: [
            ['style', ['style']], // 글자 스타일 설정 옵션
            ['fontsize', ['fontsize']], // 글꼴 크기 설정 옵션
            ['font', ['bold', 'underline', 'clear']], // 글자 굵게, 밑줄, 포맷 제거 옵션
            ['color', ['color']], // 글자 색상 설정 옵션
            ['table', ['table']], // 테이블 삽입 옵션
            ['para', ['ul', 'ol', 'paragraph']], // 문단 스타일, 순서 없는 목록, 순서 있는 목록 옵션
            ['height', ['height']], // 에디터 높이 조절 옵션
            ['insert', ['picture', 'link', 'video']], // 이미지 삽입, 링크 삽입, 동영상 삽입 옵션
            ['view', ['codeview', 'help']], // 코드 보기, 전체 화면, 도움말 옵션
        ],

        fontSizes: [
            '8', '9', '10', '11', '12', '14', '16', '18',
            '20', '22', '24', '28', '30', '36', '50', '72',
        ], // 글꼴 크기 옵션

        callbacks: {
            onImageUpload: function (files) {
                // for (var i = files.length - 1; i >= 0; i--) {
                //     uploadSummernoteImageFile(files[i],
                //         this);   
                RealTimeImageUpdate(files, this);
            }
        }
    })
});

function RealTimeImageUpdate(files, editor) {
    var formData = new FormData();
    var fileArr = Array.prototype.slice.call(files);
    fileArr.forEach(function (f) {
        if (f.type.match("image/jpg") || f.type.match("image/jpeg" || f.type.match("image/jpeg"))) {
            alert("JPG, JPEG, PNG 확장자만 업로드 가능합니다.");
            return;
        }
    });
    for (var xx = 0; xx < files.length; xx++) {
        formData.append("file", files[xx]);
    }

    $.ajax({
        url: "http://localhost:10000/upload",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        enctype: 'multipart/form-data',
        type: 'POST',
        success: function (result) {

            //항상 업로드된 파일의 url이 있어야 한다.
            if (result === -1) {
                alert('이미지 파일이 아닙니다.');
                return;
            }
            console.log(JSON.parse(result));
            var data = JSON.parse(result);
            for (var x = 0; x < data.length; x++) {
                var img = $("<img>").attr({ src: data[x], width: "100%" });   // Default 100% ( 서비스가 앱이어서 이미지 크기를 100% 설정 - But 수정 가능 )
                console.log(img);
                $(editor).summernote('pasteHTML', "<img src='" + data[x] + "' style='width:100%;' />");
            }

        }
    });
}


// function uploadSummernoteImageFile(file, el) {
//     var data = new FormData();
//     data.append("file", file);
//     var response = $.ajax({
//         data: data,
//         type: "POST",
//         url: "http://localhost:8000/board/fairs/uploadSummernoteImageFile",
//         contentType: false,
//         enctype: 'multipart/form-data',
//         processData: false,
//         success: function (data) {
//             $(el).summernote('editor.insertImage', data.url);
//         }
//     });

//     console.log(response);

// }

</script>

<style scoped>
main {
    display: grid;
    min-width: 100%;
    min-height: 700px;
    grid-template-columns: 1.3fr 3fr 1.3fr;
    grid-template-rows: 70px 400px auto;
    grid-template-areas:
        "left   board-title   right"
        "left   input-other   right"
        "left   input-content    right";
    padding: 0;
    margin-top: 50px;
}

.board-title {
    grid-area: board-title;
    border: 1px solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#board-title {
    width: 50%;
    display: flex;
    align-items: flex-end;
}

#board-btn {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.others {
    grid-area: input-other;
    border: 1px solid;
    display: flex;
    flex-direction: row;
    min-height: 300px;
}


.thumImage {
    width: 30%;
    border: 1px solid;
}

.other-content {
    width: 70%;
}

.oc-title {
    height: 12%;
    display: flex;
    flex-direction: row;

    border-bottom: solid 1px;
}

.oc-title-1 {
    width: 15%;

    border-right: solid 1px;
}

.oc-title-2 {
    width: 85%;

}

.oc-title-2 input {
    width: 90%;
}

.oc-location-area {
    height: 12%;
    display: flex;
    flex-direction: row;

    border-bottom: solid 1px;
}

.oc-location-area-1 {
    width: 15%;

    border-right: solid 1px;
}

.oc-location-area-2 {
    width: 85%;
    display: flex;
    flex-direction: row;
}


.oc-during-date {
    height: 12%;
    display: flex;
    flex-direction: row;

    border-bottom: solid 1px;
}

.oc-during-date-1 {
    width: 15%;

    border-right: solid 1px;
}

.oc-during-date-2 {
    width: 85%;
    display: flex;
    flex-direction: row;
}


.oc-tags {
    height: 12%;
    display: flex;
    flex-direction: row;
    border-bottom: solid 1px;
}

.oc-tags-1 {
    width: 15%;

    border-right: solid 1px;
}

.oc-tags-2 {
    width: 85%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.oc-files {
    display: flex;
    flex-direction: row;
}

.content {
    grid-area: input-content;
    border: 1px solid;
}
</style>