// Integration based on blueprint:javascript_gemini
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export interface GiftRecommendation {
  name: string;
  description: string;
  priceRange: string;
  purchaseUrl: string;
  category: string;
}

export interface GiftRequest {
  age: string;
  interests: string;
  occasion: string;
  relationship: string;
  budgetMin?: string;
  budgetMax?: string;
}

export async function generateGiftRecommendations(
  request: GiftRequest
): Promise<GiftRecommendation[]> {
  try {
    const budgetText = request.budgetMin || request.budgetMax
      ? `with a budget between $${request.budgetMin || 0} and $${request.budgetMax || "unlimited"}`
      : "with no specific budget constraint";

    const prompt = `You are an expert gift advisor. Generate 7 personalized gift recommendations for the following recipient:
    
Age: ${request.age} years old
Interests/Hobbies: ${request.interests}
Occasion: ${request.occasion}
Relationship: ${request.relationship}
Budget: ${budgetText}

For each gift recommendation, provide:
1. A specific, real product name (not generic categories)
2. A detailed, compelling description (2-3 sentences) explaining why this gift is perfect for them
3. A realistic price range based on current market prices
4. A search URL that will help find this product on Amazon or similar retailers
5. A category for the gift type

Make the recommendations diverse, thoughtful, and tailored to their interests and the occasion. Include a mix of physical products, experiences, and unique finds. Use Google Search to find current, real products that exist in the market.

Provide exactly 7 recommendations.`;

    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            recommendations: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  description: { type: "string" },
                  priceRange: { type: "string" },
                  purchaseUrl: { type: "string" },
                  category: { type: "string" },
                },
                required: ["name", "description", "priceRange", "purchaseUrl", "category"],
              },
            },
          },
          required: ["recommendations"],
        },
        tools: [{ googleSearch: {} }],
      },
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    const rawJson = result.text;
    
    if (!rawJson) {
      throw new Error("Empty response from Gemini API");
    }

    const data = JSON.parse(rawJson);
    
    if (!data.recommendations || !Array.isArray(data.recommendations)) {
      throw new Error("Invalid response format from Gemini API");
    }

    if (data.recommendations.length !== 7) {
      console.warn(`Expected 7 recommendations, but got ${data.recommendations.length}`);
    }

    return data.recommendations;
  } catch (error) {
    console.error("Error generating gift recommendations:", error);
    throw new Error(`Failed to generate gift recommendations: ${error}`);
  }
}
