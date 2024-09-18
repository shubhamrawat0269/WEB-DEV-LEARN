export const useUtils = () => {
    const handleOnHomeClick = () => {
        console.log("I am on home page")
    }

    const handleOnAboutClick = () => {
        console.log("I am on About page")
    }

    const getData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const dataInjson = await data.json();
        return dataInjson.data;
    }
    

    return {handleOnHomeClick,handleOnAboutClick}
}