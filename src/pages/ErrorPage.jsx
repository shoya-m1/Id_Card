import { Link } from "react-router-dom";
import "../App.css";


function Error() {
  return (
    <section className="errorPage">
      <h1>404</h1>
      <b className="error">Halaman Tidak Ditemukan. Silahkan kembali</b>
      <Link to="/">
        <button>Kembali</button>
      </Link>
    </section>
  );
}

export default Error;
