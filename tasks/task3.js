async function updateUser(id, updatedData) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedData)
  });

  const data = await response.json();
  return data;
}

module.exports = updateUser;

// Тест виклику
updateUser(1, { name: "New Name" }).then(console.log);
