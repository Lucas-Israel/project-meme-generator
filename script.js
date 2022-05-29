const input = document.querySelector('#text-input');
const memeTxtArea = document.querySelector('#meme-text');
const imageArea = document.querySelector('#meme-image');
const memeInsert = document.querySelector('#meme-insert')
const fileInput = document.querySelector('#file-input')

input.addEventListener('keyup', (event) => {
  memeTxtArea.innerHTML = input.value;
});

memeInsert.addEventListener('change', () => {
  if (memeInsert.files && memeInsert.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageArea.src = e.target.result;
      localStorage.setItem('imgMemeGen', imageArea.src)
    }
    reader.readAsDataURL(memeInsert.files[0]);
  }
})
// https://javascript.plainenglish.io/how-to-add-an-image-preview-when-an-image-file-is-selected-in-the-file-input-62609ac92a4f

// https://stackoverflow.com/questions/16215771/how-to-open-select-file-dialog-via-js










window.onload = function loadPage() {
  const dataImg = localStorage.getItem('imgMemeGen')
  imageArea.src = dataImg;
}