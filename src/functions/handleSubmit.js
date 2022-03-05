export default (async function (values) {
  document.getElementById("curtain").classList.add("show");

  fetch("https://frosty-wood-6558.getsandbox.com:443/dishes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      document.getElementById("addDishForm").classList.add("hidden");
      document.querySelector(".alert").classList.add("alert--show");
      document.getElementById("curtain").classList.remove("show");
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("curtain").classList.remove("show");

      alert("Something goes wrong! Try again later.");
    });
});
