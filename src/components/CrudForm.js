import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  age: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.age) {
      alert("Faltan datos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          age="age"
          placeholder="edad"
          onChange={handleChange}
          value={form.age}
        />
        <input type="submit" value="añadir" />
        <input type="reset" value="limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
