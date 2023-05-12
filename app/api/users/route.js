export async function GET(request) {
  const users = [
    { id: 1, name: "name01" },
    { id: 2, name: "name02" },
  ];
  return new Response(JSON.stringify(users));
}

// You can change that GET into
// - POST, PUT, DELETE, HEAD, PATCH
