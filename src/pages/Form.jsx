import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import InputForm from "../components/forms";
import Alerts from "../components/Alerts";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    gender: "",
    skill: "",
    info: "",
  });

  const [showAlerts, setShowAlerts] = useState(false);

  const [submitData, setSubmitData] = useState(() => {
    const savedItems = localStorage.getItem("submitData");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // fungsi menhandel text ketika input form
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  // fungsi menerima input value
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitData((prevSubmitData) => [...prevSubmitData, formData]);

    setShowAlerts(true);
    setTimeout(() => {
      setShowAlerts(false);
    }, 3000);
    setFormData({
      name: "",
      job: "",
      gender: "",
      skill: "",
      info: "",
    });
  }

  useEffect(() => {
    localStorage.setItem("submitData", JSON.stringify(submitData));
  }, [submitData]);

  return (
    <>
      <Link to="/" className="arrowIcon">
        <FaRegArrowAltCircleLeft />
      </Link>
      {showAlerts && <Alerts />}
      <h1>Tambahkan Id Card Anda</h1>
      <InputForm {...{ handleSubmit, handleChange, formData }} />
    </>
  );
}

export default Form;
