function InputForm({ handleSubmit, handleChange, formData }) {
  return (
    <form onSubmit={handleSubmit} id="formInput">
      <div>
        <label htmlFor="name">Nama Lengkap</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="job">Pekerjaan</label>
        <input
          type="text"
          name="job"
          id="job"
          value={formData.job}
          onChange={handleChange}
          required
        />
      </div>
      <div className="gender">
        <legend>Gender:</legend>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
              required
            />
            Female
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="skill">Skill</label>
        <input
          type="text"
          name="skill"
          id="skill"
          value={formData.skill}
          onChange={handleChange}
          required
        />
      </div>
      <div className="info">
        <label htmlFor="info">Info Tambahan</label>
        <textarea
          name="info"
          id="info"
          cols="30"
          rows="10"
          value={formData.info}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputForm;
