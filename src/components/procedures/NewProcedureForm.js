import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

// props, as we are sending inputted data to NewMeetup.js, the parent component for this component
function NewProcedureForm(props) {

  const procTitleInputRef = useRef();
  const departmentInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = procTitleInputRef.current.value;
    const enteredDepartment = departmentInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const procedureData = {
      title: enteredTitle,
      department: enteredDepartment,
      description: enteredDescription,
    };

    props.onAddMeetup(procedureData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="procedure-name">Procedure Name</label>
          <input type="text" required id="title" ref={procTitleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="department">Department</label>
          <input type="text" required id="department" ref={departmentInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Procedure</button>
        </div>
      </form>
    </Card>
  );
}

export default NewProcedureForm;