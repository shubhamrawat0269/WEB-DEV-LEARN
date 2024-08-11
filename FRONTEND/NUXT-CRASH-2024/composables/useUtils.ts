export const useUtils = () => {
    const handleOnHomeClick = () => {
        console.log("I am on home page")
    }

    const handleOnAboutClick = () => {
        console.log("I am on About page")
    }

    return {handleOnHomeClick,handleOnAboutClick}
}