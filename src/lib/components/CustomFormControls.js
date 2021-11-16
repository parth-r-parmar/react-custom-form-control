import React from "react";
import Select from "react-select";
import "../style/bootstrap.min.css";

export const InputControl = (props) => {
  const {
    label,
    type = "text",
    name,
    isValid = { valid: true, message: "" },
    required,
    wrap,
    className = "",
    wrapperClass = "mt-5",
    labelClass = "font-weight-bolder",
    ...otherProps
  } = props;
  return (
    <>
      <div className={`d-flex row ${wrapperClass}`}>
        {label && (
          <div className={`col-lg-${wrap ? 3 : 12} col-sm-${wrap ? 3 : 12}`}>
            <label htmlFor={name} className={labelClass}>
              {label}
              {required && <span className="text-danger ml-1">*</span>}
            </label>
          </div>
        )}
        {type.toLowerCase() === "textarea" ? (
          <div className={`col-lg-${wrap ? 9 : 12} col-sm-${wrap ? 9 : 12}`}>
            <textarea
              id={name}
              className={`form-control ${className} ${
                !isValid.valid ? "is-invalid" : ""
              }`}
              name={name}
              {...otherProps}
            />
          </div>
        ) : (
          <div className={`col-lg-${wrap ? 9 : 12} col-sm-${wrap ? 9 : 12}`}>
            <input
              id={name}
              type={type}
              className={`form-control ${className} ${
                !isValid.valid ? "is-invalid" : ""
              }`}
              name={name}
              {...otherProps}
            />
          </div>
        )}
        {!isValid.valid && (
          <>
            <div
              className={`col-lg-${wrap ? 3 : 0} col-sm-${wrap ? 3 : 0}`}
            ></div>
            <div className={`col-lg-${wrap ? 9 : 12} col-sm-${wrap ? 9 : 12}`}>
              <span className="text-danger">{isValid.message}</span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export const SelectControl = (props) => {
  const {
    label,
    name,
    required,
    wrap,
    wrapperClass = "mt-5",
    labelClass = "font-weight-bolder",
    isValid = { valid: true, message: "" },
    onChange,
    options,
    value,
    placeholder,
    ...otherProps
  } = props;
  var colourStyles = {};
  if (!isValid.valid) {
    colourStyles = {
      control: (styles) => ({
        ...styles,
        borderColor: "#F64E60",
        "&:hover": {
          borderColor: "#F64E60",
        },
      }),
    };
  } else {
    colourStyles = {
      control: (styles) => ({
        ...styles,
        borderColor: "#E4E6EF",
        boxShadow: "none",
        "&:hover": {
          borderColor: "#E4E6EF",
        },
      }),
    };
  }
  let valueItem = null;
  if (!!value) {
    valueItem = options?.find((x) => x.value === value);
  }
  return (
    <>
      <div className={`d-flex row align-items-center ${wrapperClass}`}>
        {label && (
          <div className={`col-lg-${wrap ? 3 : 12} col-sm-${wrap ? 3 : 12}`}>
            <label htmlFor={name} className={labelClass}>
              {label}
              {required && <span className="text-danger ml-1">*</span>}
            </label>
          </div>
        )}
        <div className={`col-lg-${wrap ? 9 : 12} col-sm-${wrap ? 9 : 12}`}>
          <Select
            placeholder={
              <div className="text-muted">{placeholder ?? "Select...."}</div>
            }
            id={name}
            name={name}
            styles={colourStyles}
            onChange={(e) => {
              var event = { target: { name: "", value: "" } };
              event.target.name = name;
              event.target.value = e?.value;
              onChange(event);
            }}
            options={options}
            value={valueItem}
            menuPlacement="auto"
            {...otherProps}
          />
        </div>
        {!isValid.valid && (
          <>
            <div
              className={`col-lg-${wrap ? 3 : 0} col-sm-${wrap ? 3 : 0}`}
            ></div>
            <div className={`col-lg-${wrap ? 9 : 12} col-sm-${wrap ? 9 : 12}`}>
              <span className="text-danger">{isValid.message}</span>
            </div>
          </>
        )}
      </div>
    </>
  );
};
