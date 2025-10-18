const bucketOne = document.querySelector(".basket-1 span");
const bucketTwo = document.querySelector(".basket-2 span");
const buttonRight = document.querySelector(".shift-right");
const buttonLeft = document.querySelector(".shift-left");

const totalApples = 10;
let transferApple = 0;

bucketOne.innerHTML = totalApples;
bucketTwo.innerHTML = transferApple;
buttonLeft.disabled = true;

buttonRight.addEventListener("click", function () {
  transferApple++;
  let firstBucketApple = totalApples - transferApple;
  console.log("First Bucket", firstBucketApple);
  console.log("Second Bucket", transferApple);

  bucketOne.textContent = firstBucketApple;
  bucketTwo.textContent = transferApple;

  if (transferApple === totalApples) {
    buttonRight.disabled = true;
  }
  if (firstBucketApple !== totalApples) buttonLeft.disabled = false;
});

buttonLeft.addEventListener("click", function () {
  transferApple--;
  let firstBucketApple = totalApples - transferApple;
  console.log("First Bucket", firstBucketApple);
  console.log("Second Bucket", transferApple);

  bucketOne.textContent = firstBucketApple;
  bucketTwo.textContent = transferApple;

  if (transferApple !== totalApples) {
    buttonRight.disabled = false;
  }

  if (firstBucketApple === totalApples) buttonLeft.disabled = true;
});
