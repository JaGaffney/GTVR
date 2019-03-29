
// Setup config with token and user deatils - helper function
export const tokenConfig = () => {
    // Get token from state
    //const token = getState().auth.token
  
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-CSRFToken" : getCsrfToken() 
      }
    }

    return config;
}

const getCsrfToken = () => {
  const csrf = document.cookie.match('(^|;)\\s*csrftoken\\s*=\\s*([^;]+)');
  return csrf ? csrf.pop() : '';
};