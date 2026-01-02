import Card from "./Card";

const Countries = () => {
  return (
    <div className="countries-container">
      <Card
        name="Moldova"
        flag="https://flagcdn.com/md.svg"
        population={2617820}
        region="Europe"
        capital="Chișinău"
      />
    </div>
  )
}

export default Countries;