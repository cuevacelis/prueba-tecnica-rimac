export async function getUserById(idUser) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${idUser}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const resp = await response.json();
  return resp;
}
