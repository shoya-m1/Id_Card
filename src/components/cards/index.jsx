
import Header from "./Header";
import Content from "./Content";
import NotFound from "../Notfound"

function Cards({datas}) {
return (
    <section className="containerCard">
      {datas.length === 0 ? (
        <NotFound/>
        
      ) : (
        datas.map((data, index) => (
          <div key={index} id="cards">
            <Header data={data} />
            <Content data={data} />
          </div>
        ))
      )}
    </section>
  );
}

export default Cards;
