window.addEventListener('DOMContentLoaded',()=>{

    addLikes();
    showShareBox();

    const returnTopButton=document.querySelector(".return-top-button");
    returnTopButton.addEventListener("click",()=>{
        window.scrollTo({top:0, left:0, behavior:'smooth'});
    });
});

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

}

const showShareBox=()=>{

    const sharebox=document.querySelector(".share-box");
    const shareButton=document.querySelector("#shareButton");

    shareButton.addEventListener("click",()=>{
        sharebox.classList.remove("share-box");
        sharebox.classList.add("show");
        shareButton.style.display="none";
    });

}

const closeShareBox=()=>{
    const closeButton=document.querySelector("#close-button");

}


