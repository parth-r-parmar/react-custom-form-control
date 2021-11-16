import {
  InputControl,
  SelectControl,
} from "./lib/components/CustomFormControls";

function App() {
  return (
    <div className="d-flex">
      <InputControl
        name="name_and_id"
        label="label"
        placeholder="placeholder"
        wrapperClass="mt-2 px-2 align-items-center"
        isValid={{ valid: false, message: "Invalid field" }}
        required
        // className
        // labelClass
        // wrap
        // onChange , onKeyPress , onKeyUp , etc..
      />
      <SelectControl
        options={[
          { value: "value1", label: "Option1" },
          { value: "value2", label: "Option2" },
        ]}
        name="name_and_id"
        label="label"
        placeholder="placeholder"
        wrapperClass="mt-2 px-2 align-items-center"
        isValid={{ valid: false, message: "Invalid field" }}
        required
        // labelClass
        // wrap
        // onChange , onKeyPress , onKeyUp , etc..
      />
    </div>
  );
}

export default App;
