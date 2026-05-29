const input = document.querySelector("input");

input.addEventListener("change", async () => {
  const file = input.files[0];
  // console.log(file);
  const stream = file.stream();
  const reader = stream.getReader();

  // const data = await reader.read();
  // const data1 = await reader.read();
  // console.log(data);
  // console.log(data1);

  while (true) {
    const { done, value } = await reader.read();

    console.log({ done, value });
    if (done) break;
  }
});
