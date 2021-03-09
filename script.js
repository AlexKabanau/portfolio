let page = document.querySelector('.page');
let themeButtom = document.querySelector('.theme-button');
themeButtom.onclick = function () {
    
    page.classList.toggle('dark-theme');
    page.classList.toggle('light-theme');
};

/* likes counter */
 let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');


heart.onclick = function () {
  if (heart.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }

  heart.classList.toggle('added');
}; 

/* comment list */

/*let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('user-comment');
  newComment.textContent = commentField.value;
  commentField.value = '';

  commentList.append(newComment);
};*/

/* tooltips */


let tooltip = document.querySelector('.tooltip');
let closeButton = document.querySelector('.close-button');
let tooltipButtons = document.querySelectorAll('.tooltip-button');
let tooltipText = document.querySelector('.tooltip-text');





closeButton.onclick = function () {
  tooltip.classList.remove('opened');
};

for (let tooltipButton of tooltipButtons) {
  
  tooltipButton.onclick = function () {
  tooltipText.textContent = tooltipButton.dataset.tooltipText;
  tooltip.classList.add('opened');
};
}



/*submit form length*/

let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');
let charCounter = document.querySelector('.char-counter');
let submitButton = document.querySelector('.submit-button');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('user-comment');
  newComment.textContent = commentField.value;
  commentField.value = '';
  commentList.append(newComment);
  charCounter.textContent = 0;
  // Добавьте код сюда

};

commentField.oninput = function () {
  charCounter.textContent = commentField.value.length;

  if (commentField.value.length > 142) {
    commentForm.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentForm.classList.remove('warning');
    submitButton.disabled = false;
  }
};