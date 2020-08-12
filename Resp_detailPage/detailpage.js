window.addEventListener('DOMContentLoaded',()=>{

    addLikes();
    showShareBox();
    showcancel();

    const returnTopButton=document.querySelector(".return-top-button");
    returnTopButton.addEventListener("click",()=>{
        window.scrollTo({top:0, right:0, behavior:'smooth'});
    });

});

//좋아요 버튼
const addLikes=()=>{

    const noncoloredHeart=document.querySelector(".noncolored-heart");
    const coloredHeart=document.querySelector(".colored-heart");
    const likesNumber=document.querySelector(".main-likes-number");

    noncoloredHeart.addEventListener("click",()=>{

        noncoloredHeart.style.display = "none";
        coloredHeart.style.display="initial";

        /*누르면 숫자 +1*/
        let count=Number(likesNumber.textContent);
        likesNumber.textContent=count+1;

    });

    coloredHeart.addEventListener("click",()=>{

        noncoloredHeart.style.display = "initial";
        coloredHeart.style.display="none";

        /*누르면 숫자 -1*/
        let count=Number(likesNumber.textContent);
        likesNumber.textContent=count-1;

    });

}


//공유 sns 채널 박스
const showShareBox=()=>{

    const sharebox=document.querySelector(".share-box");
    const shareButton=document.querySelector("#shareButton");
    const closeButton=document.querySelector("#close-button");

    shareButton.addEventListener("click",()=>{
        sharebox.classList.remove("share-box");
        sharebox.classList.add("show");
        shareButton.style.display="none";
    });

    closeButton.addEventListener("click",()=>{
        sharebox.classList.remove("show");
        sharebox.classList.add("share-box");
        shareButton.style.display="initial";
    });

}



//예매하기/booking 버튼 누르면 티켓예매 페이지로 이동


//예매/취소안내 이동시 보여질 section 고르기

const showcancel=()=> {

    const cancel = document.querySelector(".cancel");//버튼
    const info=document.querySelector(".info");
    const reviewbutton=document.querySelector(".post");
    //section nodes

    const review=document.querySelector(".review");
    const caution=document.querySelector(".caution");
    const detail=document.querySelector(".detail");
    const refund=document.querySelector(".refund");
    const map=document.querySelector(".map");
    const notice=document.querySelector(".notice");


    cancel.addEventListener("click", () => {

        notice.classList.remove("hide");
        caution.classList.add("hide");
        detail.classList.add("hide");
        refund.classList.add("hide");
        map.classList.add("hide");
        review.classList.add("hide");

        cancel.classList.add("on");
        info.classList.remove("on");
        reviewbutton.classList.remove("on");


    });

    info.addEventListener("click", () => {

        notice.classList.add("hide");
        caution.classList.remove("hide");
        detail.classList.remove("hide");
        refund.classList.remove("hide");
        map.classList.remove("hide");
        review.classList.remove("hide");

        info.classList.add("on");
        cancel.classList.remove("on");
        reviewbutton.classList.remove("on");

    });

    reviewbutton.addEventListener("click", () => {

        notice.classList.add("hide");
        caution.classList.remove("hide");
        detail.classList.remove("hide");
        refund.classList.remove("hide");
        map.classList.remove("hide");
        review.classList.remove("hide");

        reviewbutton.classList.add("on");
        info.classList.remove("on");
        cancel.classList.remove("on");

    });


}


//maincategory 클릭 시 상단에 style



