import type { LoaderFunctionArgs } from 'react-router';

// Server-side environment variables (no VITE_ prefix needed)
const API_KEY = process.env.OMDB_API_KEY || process.env.VITE_API_KEY;
const BASE_URL =
  process.env.OMDB_BASE_URL ||
  process.env.VITE_BASE_URL ||
  'https://www.omdbapi.com/';

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get('s');
  const page = url.searchParams.get('page') || '1';
  const type = url.searchParams.get('type') || 'movie';

  if (!search) {
    return Response.json(
      { Response: 'False', Error: 'Search term is required' },
      { status: 400 }
    );
  }

  if (!API_KEY || !BASE_URL) {
    console.error('Missing environment variables:', {
      API_KEY: !!API_KEY,
      BASE_URL: !!BASE_URL,
    });
    return Response.json(
      { Response: 'False', Error: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    const apiUrl = `${BASE_URL}?apikey=${API_KEY}&s=${search}&page=${page}&type=${type}`;
    // eslint-disable-next-line no-undef
    const response = await fetch(apiUrl);
    const data = await response.json();
    return Response.json(data, {
      headers: {
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
      },
    });
  } catch (err) {
    console.error('Fetch error:', err);
    return Response.json(
      { Response: 'False', Error: 'Failed to fetch movies' },
      { status: 500 }
    );
  }
}
