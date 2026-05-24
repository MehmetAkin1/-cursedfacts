export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/MehmetAkin1/cursedfacts/refs/heads/main/cursedfacts.json"
    );

    const text = await response.text();
    const data = JSON.parse(text);

    const facts = data.facts;

    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(randomFact);

  } catch (err) {
    console.error(err);
    res.status(200).send("Cursed facts system is currently broken (even geography gave up).");
  }
}
