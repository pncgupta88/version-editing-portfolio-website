import { GoogleGenerativeAI } from '@google/generative-ai';

// Netlify function handler
export default async (request: Request) => {
  try {
    const { topic, style, audience } = await request.json();

    if (!topic || !style || !audience) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // --- FINAL PROMPT FOR IMPRESSIVE ENGLISH IDEAS ---
    const prompt = `
      You are 'VisionAI', a world-class Creative Director for a top video production house. You are known for creating viral, award-winning content.
      A user needs groundbreaking, impressive, and highly creative video concepts. Your response should be in English, packed with actionable content and inspiration.

      Your goal is to provide 2 absolutely brilliant and deeply detailed video concepts.

      For EACH of the 2 concepts, you MUST provide the following detailed structure using Markdown for clear formatting:
      - **Title:** A very catchy and professional title.
      - **Logline:** A single, powerful sentence that tells the whole story of the video.
      - **Visual Treatment:** What will the look and feel of the video be? (e.g., gritty, dreamy, vibrant). Give specific suggestions for color grading (e.g., "crushed blacks with a teal and orange look").
      - **Shot-by-Shot Idea (First 10 seconds):** Provide a list of 3-4 shots for the first 10 seconds to help the user imagine the opening.
      - **Editing Style & Pace:** What will be the editing style (e.g., "fast-paced montage with match cuts") and pace? Also, suggest a specific transition idea.
      - **Music & Sound Design:** Don't just give a genre, give an example of a specific artist or track (e.g., "something like Ritviz's 'Liggi'") and mention sound design elements (e.g., "ambient city sounds, train screeches").
      - **X-Factor:** What is the one unique idea that will make this video stand out and go viral?

      Here are the user's requirements:
      - Video Topic: "${topic}"
      - Desired Style: "${style}"
      - Target Audience: "${audience}"

      Generate the 2 incredibly detailed and impressive video concepts now. Be bold and creative.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ resultText: text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate ideas' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};