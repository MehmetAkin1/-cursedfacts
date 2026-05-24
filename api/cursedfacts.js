export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/MehmetAkin1/cursedfacts/main/cursedfacts.json"
    );

    if (!response.ok) {
      throw new Error("GitHub fetch failed: " + response.status);
    }

    const text = await response.text();
    const data = JSON.parse(text);

    if (!data.facts || !Array.isArray(data.facts)) {
      throw new Error("Invalid JSON structure");
    }

    const facts = data.facts;
    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.status(200).send(randomFact);

  } catch (err) {
    console.error(err);
    res.status(200).send("Geography is broken. Try again later.");
  }
}
