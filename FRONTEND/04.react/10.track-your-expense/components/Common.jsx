import { useRef, useState } from "react"

const Common = () => {
    const inputRef = useRef(null);
    const componentRenderCountRef = useRef(0);
    const [text, setText] = useState("");

    function handleClick(){
        componentRenderCountRef.current +=1;
        console.log(componentRenderCountRef.current);
        inputRef.current.focus();

        setText(componentRenderCountRef.current)
    }
  return (
    <div>
        <p>Component rerender : {componentRenderCountRef.current}</p>
        <input type="text" name="text" id="text" ref={inputRef} />
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Common