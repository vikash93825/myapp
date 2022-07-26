import { Button, Grid, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import DisplayList from "./DisplayList";

const defaultData = {
  birthday: "",
  gestationalAge: "",
  sex: "",
  bmi: "",
  weight: "",
  height: "",
};

function FormHandle({ fields }) {
  const [values, setValues] = useState({ ...defaultData });
  const [list, setList] = useState([]);
  const changeHandler = (value, fieldName) => {
    setValues({
      ...values,
      [fieldName]: value,
    });
  };

  console.log(list);
  const handleSubmit = () => {
    setList([...list, values]);
    setValues({ ...defaultData });
  };
  return (
    <Grid>
      {fields.map((field, i) => {
        return (
          <div key={field.key} style={{ margin: "10px" }}>
            {field.type !== "dropdown" ? (
              <TextField
                label={field.label}
                required={field.isRequired}
                readOnly={field.isReadonly}
                value={values[field.key]}
                type={field.type}
                name={field.key}
                style={{ width: "350px" }}
                onChange={(e) => changeHandler(e.target.value, field.key)}
              />
            ) : (
              <TextField
                select
                label={field.label}
                required={field.isRequired}
                value={values[field.key]}
                onChange={(e) => changeHandler(e.target.value, field.key)}
                name={field.key}
                style={{ width: "350px" }}
              >
                {field.items &&
                  field.items.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.text}
                    </MenuItem>
                  ))}
              </TextField>
            )}
          </div>
        );
      })}

      <Button
        variant="contained"
        style={{ marginLeft: "130px" }}
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
      <div style={{ marginTop: "10px" }}>
        <DisplayList
          list={list.map((_, i) => {
            return { ...list[i], id: i };
          })}
        />
      </div>
    </Grid>
  );
}

export default FormHandle;
