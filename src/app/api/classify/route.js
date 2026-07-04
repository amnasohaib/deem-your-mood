import { InferenceClient } from "@huggingface/inference";

export async function POST(request) {
  const { text } = await request.json();

  if (!text) {
    return Response.json({ error: "Text is required" }, { status: 400 });
  }

  try {
    const client = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

    const output = await client.textClassification({
      model: "j-hartmann/emotion-english-distilroberta-base",
      inputs: text,
      provider: "hf-inference",
    });

    return Response.json([output]); // wrapped in array to keep data[0] shape your frontend expects
  } catch (error) {
    console.error("Classification error:", error);
    return Response.json({ error: error.message ?? "Classification failed" }, { status: 500 });
  }
}