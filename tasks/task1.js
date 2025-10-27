async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const result = [];
  for (let i = 0; i < data.length; i++) {
    result.push({
      id: data[i].id,
      name: data[i].name
    });
  }

  return result;
}

module.exports = fetchUsers;

// Тест виклику (приклад)
fetchUsers().then(console.log);
