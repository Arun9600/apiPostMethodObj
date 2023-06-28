let input = document.querySelectorAll("input");
input.forEach((i) => {
  i.style.display = "block";
  i.style.marginBottom = "10px";
});
var submit = document.getElementById("submit");
var form = document.getElementById("postForm");
submit.style.marginTop = "20px";
submit.style.padding = "10px 15px";
submit.style.backgroundColor = "green";
submit.style.color = "#fff";
submit.style.cursor = "pointer";
submit.onclick = function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;
  var datas = { name: name, message: message };
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(datas),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      let op = document.getElementById("op");
      output = JSON.stringify(data);
      op.innerHTML = output;
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};
