export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/MehmetAkin1/cursedfacts/main/cursedfacts.json"
    );

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      throw new Error("JSON parse failed. GitHub response is not valid JSON.");
    }

    if (!data?.facts?.length) {
      throw new Error("Facts array missing or empty");
    }

    const randomFact =
      data.facts[Math.floor(Math.random() * data.facts.length)];

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.status(200).send(randomFact);

  } catch (err) {
    console.error("API ERROR:", err.message);
    res.status(200).send("Geography is broken (GitHub connection failed).");
  }
}
