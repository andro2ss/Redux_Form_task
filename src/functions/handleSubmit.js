export default (async function (values) {
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
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Something goes wrong! Try again later.");
    });
});
