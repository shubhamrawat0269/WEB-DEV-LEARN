import styles from "./CompanyCard.module.css";

const CompanyCard = ({ company }) => {
  return (
    <div className={styles.card}>
      <div className={styles.logoWrapper}>
        <img
          src="https://images.pexels.com/photos/273665/pexels-photo-273665.jpeg"
          alt={company.name}
          className={styles.logo}
        />
      </div>
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

      <button className={styles.button}>View Company</button>
    </div>
  );
};

export default CompanyCard;
