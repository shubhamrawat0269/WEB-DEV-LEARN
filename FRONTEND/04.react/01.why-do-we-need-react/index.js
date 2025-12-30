const bucketOne = document.querySelector(".basket-1 span");
const bucketTwo = document.querySelector(".basket-2 span");
const buttonRight = document.querySelector(".shift-right");
const buttonLeft = document.querySelector(".shift-left");

const totalApples = 10;
let bucketOneApple = totalApples;
let bucketTwoApple = 0;


bucketOne.textContent = bucketOneApple;
bucketTwo.textContent = bucketTwoApple;

buttonRight.addEventListener('click', function(){
  if(bucketTwoApple < totalApples){
    bucketOneApple--;
    bucketTwoApple++;
  
    bucketOne.textContent = bucketOneApple;
    bucketTwo.textContent = bucketTwoApple;
  }
})

buttonLeft.addEventListener('click', function(){
  if(bucketOneApple < totalApples){
    bucketOneApple++;
    bucketTwoApple--;

    bucketOne.textContent = bucketOneApple;
    bucketTwo.textContent = bucketTwoApple;
  }
})