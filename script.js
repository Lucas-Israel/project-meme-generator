const input = document.querySelector('#text-input');
const memeTxtArea = document.querySelector('#meme-text');
const imageArea = document.querySelector('#meme-image');
const memeInsert = document.querySelector('#meme-insert');
const memeImgCont = document.querySelector('#meme-image-container');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');
const meme0 = document.querySelector('#meme-1');
const meme1 = document.querySelector('#meme-2');
const meme2 = document.querySelector('#meme-3');
const meme3 = document.querySelector('#meme-4');

input.addEventListener('keyup', () => {
  memeTxtArea.innerHTML = input.value;
});

memeInsert.addEventListener('change', () => {
  if (memeInsert.files && memeInsert.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageArea.src = e.target.result;
      localStorage.setItem('imgMemeGen', imageArea.src);
    };
    reader.readAsDataURL(memeInsert.files[0]);
  }
});
// https://javascript.plainenglish.io/how-to-add-an-image-preview-when-an-image-file-is-selected-in-the-file-input-62609ac92a4f

// https://stackoverflow.com/questions/16215771/how-to-open-select-file-dialog-via-js

fire.addEventListener('click', () => {
  memeImgCont.style.border = '3px dashed red';
});

water.addEventListener('click', () => {
  memeImgCont.style.border = '5px double blue';
});

earth.addEventListener('click', () => {
  memeImgCont.style.border = '6px groove green';
});

meme0.addEventListener('click', () => {
  imageArea.src = meme0.src;
  localStorage.setItem('imgMemeGen', imageArea.src);
});

meme1.addEventListener('click', () => {
  imageArea.src = meme1.src;
  localStorage.setItem('imgMemeGen', imageArea.src);
});

meme2.addEventListener('click', () => {
  imageArea.src = meme2.src;
  localStorage.setItem('imgMemeGen', imageArea.src);
});

meme3.addEventListener('click', () => {
  imageArea.src = meme3.src;
  localStorage.setItem('imgMemeGen', imageArea.src);
});

window.onload = function loadPage() {
  const dataImg = localStorage.getItem('imgMemeGen');
  imageArea.src = dataImg;
};
