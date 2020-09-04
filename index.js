document.querySelectorAll('.viewImage').forEach(img => {
    img.addEventListener('click', (e)=>{
        document.getElementById('imageView').firstChild.nextSibling.src = e.target.src;
        document.getElementById('imageView').style.display="block";
    });
});

document.getElementById('imageView').addEventListener('click',(e)=>{
    document.getElementById('imageView').style.display = "none";
});

const imagesUrl = ['placeholder.jpg','placeholder2.jpg','placeholder3.jpg'];
let index = 0;

const slideShow = ()=>{
    setTimeout(()=>{
        document.getElementById('section0').style.backgroundImage = `url(${imagesUrl[index]})`;;
        index = (index+1) % 3;
        slideShow();
    }, 5000);
}

slideShow();
