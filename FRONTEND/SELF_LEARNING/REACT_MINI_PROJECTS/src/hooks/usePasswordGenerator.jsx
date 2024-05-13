import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");

  function pwdGenerator(checkboxData, len) {
    const checkboxItem = [...checkboxData];
    const checkedItems = checkboxItem.filter((cur) => cur.status);

    // console.log({ checkedItems, len });

    let characterList = "";
    let generatedPwd = "";

    checkedItems.forEach((item) => {
      switch (item.title) {
        case "Include UpperCase Letter":
          characterList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;

        case "Include LowerCase Letter":
          characterList += "abcdefghijklmnopqrstuvwxyz";
          break;

        case "Include Symbols":
          characterList += "$%&*^@!";
          break;

        case "Include Numbers":
          characterList += "0123456789";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * characterList.length);
      generatedPwd += characterList[randomIndex];
    }

    setPassword(generatedPwd);
  }

  const copyPassword = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return { password, pwdGenerator, copyPassword };
};

export default usePasswordGenerator;
