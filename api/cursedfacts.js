export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/MehmetAkin1/cursedfacts/refs/heads/main/cursedfacts.json"
    );

    const data = await response.json();

    const facts = data.facts;

    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    res.status(200).send(randomFact);
  } catch (err) {
    res.status(500).send("Something went wrong with cursed facts.");
  }
}
