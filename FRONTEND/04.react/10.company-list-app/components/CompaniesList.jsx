import { useFetchData } from "../hooks/useFetchData";
import CompanyCard from "./CompanyCard";

const CompaniesList = () => {
  const { data, loading, error } = useFetchData(
    "https://json-placeholder.mock.beeceptor.com/companies"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="container">
      {data?.map((country) => (
        <CompanyCard key={country.id} company={country} />
      ))}
    </section>
  );
};

export default CompaniesList;
