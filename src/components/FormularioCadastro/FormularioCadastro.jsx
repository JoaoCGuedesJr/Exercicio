import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function FormularioTarefa({ aoEnviar }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
}
return (
  <form
    onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({ titulo, descricao, data });
    }}
  >
    <TextField
      value={titulo}
      onChange={(event) => {
        setTitulo(event.target.value);
      }}
      id="titulo"
      label="Titulo"
      variant="outlined"
      margin="normal"
      fullWidth
    />
    <TextField
      value={descricao}
      onChange={(event) => {
        setDescricao(event.target.value);
      }}
      id="descricao"
      label="Descricao"
      variant="outlined"
      margin="normal"
      fullWidth
    />
    <TextField
      value={data}
      onChange={(event) => {
        setData(event.target.value);
      }}
      id="data"
      label="date"
      variant="outlined"
      margin="normal"
      fullWidth
    />

    <Button type="submit" variant="contained" color="primary">
      Adicionar
    </Button>
  </form>
);

export default FormularioTarefa;
