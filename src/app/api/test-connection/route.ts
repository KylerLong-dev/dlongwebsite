export async function GET() {
  try {
    const response = await fetch(`${process.env.STRAPI_URL}`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    });
    
    return Response.json({ 
      status: 'connected', 
      strapiUrl: process.env.STRAPI_URL,
      httpStatus: response.status 
    });
  } catch (error) {
    return Response.json({ status: 'failed', error: String(error) }, { status: 500 });
  }
}