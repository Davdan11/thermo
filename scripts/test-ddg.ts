import axios from 'axios';

async function searchDDG(query: string) {
  try {
    const res = await axios.get(`https://duckduckgo.com/?q=${encodeURIComponent(query)}&t=h_&iar=images&iax=images&ia=images`);
    const match = res.data.match(/vqd=([0-9-]+)/);
    if (!match) throw new Error("No vqd found");
    const vqd = match[1];

    const imgRes = await axios.get(`https://duckduckgo.com/i.js?q=${encodeURIComponent(query)}&o=json&p=-1&s=0&u=bing&f=,,,,,&l=us-en`, {
      headers: {
        'x-vqd-4': vqd
      }
    });

    console.log(imgRes.data.results.slice(0, 3).map((r: any) => r.image));
  } catch (e) {
    console.error(e);
  }
}

searchDDG("Ameristar heat pump outdoor unit");
