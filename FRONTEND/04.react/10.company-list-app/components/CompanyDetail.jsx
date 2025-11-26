import { useParams } from "react-router";
import { useFetchData } from "../hooks/useFetchData";

const dataDetail = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetchData(
    `https://json-placeholder.mock.beeceptor.com/companies/${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div>
        <p>
          <strong>CEO:</strong> {data.ceoName}
        </p>
        <p>
          <strong>Employees:</strong> {data.employeeCount}
        </p>
        <p>
          <strong>Country:</strong> {data.country}
        </p>
        <p>
          <strong>Zip:</strong> {data.zip}
        </p>
        <p>
          <strong>Address:</strong> {data.address}
        </p>
        <p>
          <strong>Domain:</strong> {data.domain}
        </p>
      </div>
    </div>
  );
};

export default dataDetail;
