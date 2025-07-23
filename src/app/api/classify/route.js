export async function POST(request) {
  const { text } = await request.json();

  if (!text) {
    return Response.json({ error: "Text is required" }, { status: 400 });
  }

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/j-hartmann/emotion-english-distilroberta-base",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: text,
          options: { return_all_scores: true },
        }),
      }
    );

    const result = await response.json();
    return Response.json(result);
  } catch (error) {
    console.error("Classification error:", error);
    return Response.json({ error: "Classification failed" }, { status: 500 });
  }
}