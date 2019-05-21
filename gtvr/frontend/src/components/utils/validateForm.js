export default function validateForm(values) {
    let errors = {};
    // Email Errors
    if (!values.email) {
      errors.email = "Required Email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    // Password Errors
    if (!values.password) {
      errors.password = "Required Password";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    // Name Errors
    if (!values.name) {
      errors.name = "Name is Required ";
    }
    // Teacher Errors
    if (!values.teacher) {
      errors.teacher = "Teacher is Required ";
    }
    // Description Errors
    if (!values.description) {
      errors.description = "A Description is Required ";
    }
    // Lesson number Errors
    if (!values.number) {
      errors.number = "A Lesson number is Required ";
    }
    // Title Errors
    if (!values.title) {
      errors.title = "A Title is Required ";
    }
    // Link Errors
    let regex = new RegExp("(https?://)?(www\\.)?(yotu\\.be/|youtube\\.com/)?((.+/)?(watch(\\?v=|.+&v=))?(v=)?)([\\w_-]{11})(&.+)?");
    if (!values.link) {
      errors.link = "A Valid Youtube link is Required ";
    } else if (!regex.test(values.link)) {
      errors.link = "Invalid Youtube link";
    }
    return errors;
  }