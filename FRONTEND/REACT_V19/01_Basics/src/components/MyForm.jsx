import { useActionState } from "react";

const MyForm = () => {
  async function submitForm(prevState, formData) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const resInJSON = await res.json();

    return resInJSON;
  }

  const [state, formAction] = useActionState(submitForm, {
    data: null,
  });

  

  return (
    <form action={formAction}>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
