async function deleteUser(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE"
  });

  return response.status; // повертаємо статус (200/204)
}

module.exports = deleteUser;

// Тест виклику
deleteUser(1).then(console.log);
