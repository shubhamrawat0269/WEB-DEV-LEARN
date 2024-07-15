const JobTile = ({ author, id, time, title }) => {
  return (
    <div className="bg-white px-2 py-3 shadow-lg text-center" key={id}>
      <div className="flex flex-col justify-between gap-5">
        <h2>{author}</h2>
        <h4>{title}</h4>
        <p>{new Date(time).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default JobTile;
