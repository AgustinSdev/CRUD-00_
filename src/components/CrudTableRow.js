import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, age, id } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Borrar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
