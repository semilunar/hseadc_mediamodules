const Auth = () => {
  const url = "http://localhost:3000";
  const correct_pass = "Mypoetryisreallycooliloveit";
  const csrfToken = document.querySelector("[name='csrf-token']").content;
  console.log("auth.js");

  function auth(pass) {
    console.log("FUNCTION");
    fetch(`${url}/auth`, {
      method: "POST",
      headers: {
        "X-CSRF-Token": csrfToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ pass })
    });
  }
  window.authFunc = auth;
};

export default Auth;
