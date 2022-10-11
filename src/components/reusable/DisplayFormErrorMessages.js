const DisplayFormErrorMessages = ({ inputName, formErrors, setState }) => {
   let message;
   setState(false)
   //console.log(formErrors)
   formErrors.forEach(el => {
      if (el.propName === inputName) {
         //console.log(el.errMessage)
         message = el.errMessage;
         setState(true)
      }
   });
   return <p className="form-text text-danger">{message}</p>;
}

export default DisplayFormErrorMessages;