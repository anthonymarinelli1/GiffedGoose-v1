import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateGiftRecommendations, type GiftRequest } from "./gemini";
import { z } from "zod";

const giftRequestSchema = z.object({
  age: z.string().min(1, "Age is required"),
  interests: z.string().min(1, "Interests are required"),
  occasion: z.string().min(1, "Occasion is required"),
  relationship: z.string().min(1, "Relationship is required"),
  budgetMin: z.string().optional(),
  budgetMax: z.string().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/gift-recommendations", async (req, res) => {
    try {
      // Validate request body
      const validationResult = giftRequestSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: "Invalid request data",
          details: validationResult.error.errors 
        });
      }

      const giftRequest: GiftRequest = validationResult.data;

      // Check if API key is configured
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ 
          error: "Gemini API key is not configured. Please add GEMINI_API_KEY to your environment." 
        });
      }

      // Generate recommendations using Gemini
      const recommendations = await generateGiftRecommendations(giftRequest);

      // Transform recommendations to include unique IDs
      const giftsWithIds = recommendations.map((rec, index) => ({
        id: `${Date.now()}-${index}`,
        name: rec.name,
        description: rec.description,
        priceRange: rec.priceRange,
        purchaseUrl: rec.purchaseUrl,
        imageGradient: getGradientForCategory(rec.category),
      }));

      return res.json({ gifts: giftsWithIds });
    } catch (error: any) {
      console.error("Error in gift recommendations endpoint:", error);
      return res.status(500).json({ 
        error: "Failed to generate gift recommendations",
        message: error.message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Helper function to assign gradient colors based on category
function getGradientForCategory(category: string): string {
  const gradients: Record<string, string> = {
    technology: "from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20",
    fashion: "from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20",
    home: "from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20",
    sports: "from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20",
    books: "from-purple-100 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20",
    food: "from-yellow-100 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/20",
    jewelry: "from-rose-100 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20",
    experience: "from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20",
    art: "from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20",
    gaming: "from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20",
  };

  const categoryLower = category.toLowerCase();
  
  for (const [key, gradient] of Object.entries(gradients)) {
    if (categoryLower.includes(key)) {
      return gradient;
    }
  }

  // Default gradient
  return "from-slate-100 to-gray-100 dark:from-slate-900/20 dark:to-gray-900/20";
}
