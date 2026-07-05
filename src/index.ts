export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Read a query parameter (e.g., ?name=Peter)
    const name = url.searchParams.get("name") || "Guest";
    
    const responseData = {
      message: `Hello, ${name}!`,
      timestamp: new Date().toISOString(),
      pathRequested: url.pathname
    };
    
    return Response.json(responseData);
  }
};
