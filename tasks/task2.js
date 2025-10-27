async function createUser(user) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email
    })
  });

  const data = await response.json();
  return data;
}

module.exports = createUser;

// Тест виклику
createUser({ name: "Sam", email: "fjsnfkjns2342@gmail.com" }).then(console.log);
