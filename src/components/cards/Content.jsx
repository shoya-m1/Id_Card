function Content({ data }) {
  const { skill, info } = data;
  return (
    <section className="content">
      <p className="contentInfo">
       {info}
      </p>
      <div className="skils">
        <small>{skill}</small>
      </div>
    </section>
  );
}
export default Content;
