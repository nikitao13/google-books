const validateForm = (formData) => {
  let isValid = true;
  let error = "";

  if(!formData) {
    isValid = false;
    error = null;
  }

  if(formData.length < 3 && formData.length !== 0) {
    isValid = false;
    error = "search must have at least 3 characters."
  }
  
  if(formData.length > 30) {
    isValid = false;
    error = "search must be less than 30 characters."
  }

  return { isValid, error };
}

export default validateForm;
