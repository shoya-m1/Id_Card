import { useState, useEffect } from "react";

import Search from "../components/search";
import Cards from "../components/cards";

function Home() {
  const [getData, setData] = useState([]);
  const [getDataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    const savedItems = localStorage.getItem("submitData");
    if (savedItems) {
      setData(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    setDataFilter(getData);
  }, [getData]);

  function onChangeSearch(value) {
    const filterData = getData.filter((data) =>
      data.name.toLowerCase().includes(value.toLowerCase())
    );
    setDataFilter(filterData);
  }
  return (
    <>
      <Search {...{ onChangeSearch }} />
      <Cards datas={getDataFilter} />
    </>
  );
}

export default Home;
