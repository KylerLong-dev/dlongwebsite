export async function GET() {
  try {
    const response = await fetch(`${process.env.STRAPI_URL}/api`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    });

    if (response.ok) {
      return Response.json({ status: 'connected', strapiUrl: process.env.STRAPI_URL });
    } else {
      return Response.json({ status: 'error', code: response.status }, { status: 500 });
    }
  } catch (error) {
    return Response.json({ status: 'failed', error: String(error) }, { status: 500 });
  }
}