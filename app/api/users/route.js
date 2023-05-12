export async function GET(request) {
  return new Response(<p>This is GET from route.js</p>);
}

// You can change that GET into 
// - POST, PUT, DELETE, HEAD, PATCH