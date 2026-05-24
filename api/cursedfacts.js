export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://cdn.jsdelivr.net/gh/MehmetAkin1/cursedfacts@main/cursedfacts.json"
    );

    const data = await response.json();

    const facts = data.facts;

    if (!facts || !facts.length) {
      throw new Error("No facts found");
    }

    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.status(200).send(randomFact);

  } catch (err) {
    console.error(err);
    res.status(200).send("Geography is broken (data source unreachable).");
  }
}
