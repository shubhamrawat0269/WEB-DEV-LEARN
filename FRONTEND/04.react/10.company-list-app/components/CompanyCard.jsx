import { useNavigate } from "react-router";
import styles from "./CompanyCard.module.css";

const CompanyCard = ({ company }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{company.name}</h2>
      <p className={styles.industry}>{company.industry}</p>
      <div className={styles.infoGrid}>
        <p>
          <strong>CEO:</strong> {company.ceoName}
        </p>
        <p>
          <strong>Employees:</strong> {company.employeeCount}
        </p>
        <p>
          <strong>Country:</strong> {company.country}
        </p>
        <p>
          <strong>Zip:</strong> {company.zip}
        </p>
        <p>
          <strong>Address:</strong> {company.address}
        </p>
        <p>
          <strong>Domain:</strong> {company.domain}
        </p>
      </div>

      <button className={styles.button} onClick={() => navigate(`/company?id=${company.id}`)}>
        View Company
      </button>
    </div>
  );
};

export default CompanyCard;
