import { getCollection } from 'astro:content';

export async function GET() {
  const entries = await getCollection('entries');

  const searchData = entries
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((entry) => ({
      id: entry.id,
      title: entry.data.title,
      description: entry.data.description,
      date: entry.data.pubDate.toISOString().split('T')[0],
    }));

  return new Response(JSON.stringify(searchData), {
    headers: { 'Content-Type': 'application/json' },
  });
}
