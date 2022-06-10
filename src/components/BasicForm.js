import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: fNameValue,
    isValid: fNameIsValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: resetfName,
  } = useInput(isNotEmpty);

  const {
    value: lNameValue,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: resetlName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (fNameIsValid && lNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Form Submitting....");
    console.log(fNameValue, lNameValue, emailValue);

    resetfName();
    resetlName();
    resetEmail();
  };

  const fNameClasses = fNameHasError ? "form-control invalid" : "form-control";
  const lNameClasses = lNameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={fNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={fNameValue}
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
          />
          {fNameHasError && (
            <p className="error-text">Please enter First name.</p>
          )}
        </div>
        <div className={lNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lNameValue}
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
          />
          {lNameHasError && (
            <p className="error-text">Please enter Last name.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter Valid Email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
