import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GiftRecommendationForm, {
  type FormData,
} from "@/components/GiftRecommendationForm";
import GiftRecommendationsList from "@/components/GiftRecommendationsList";
import { type Gift } from "@/components/GiftCard";

export default function Home() {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  //todo: remove mock functionality
  const mockGifts: Gift[] = [
    {
      id: "1",
      name: "Wireless Noise-Canceling Headphones",
      description:
        "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and exceptional sound quality. Perfect for music lovers and frequent travelers.",
      priceRange: "$250-350",
      purchaseUrl: "https://www.amazon.com/s?k=wireless+noise+canceling+headphones",
      imageGradient: "from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20",
    },
    {
      id: "2",
      name: "Professional Coffee Maker Set",
      description:
        "Complete pour-over coffee brewing kit with precision kettle, ceramic dripper, and premium filters. Ideal for coffee enthusiasts who appreciate the art of brewing.",
      priceRange: "$80-120",
      purchaseUrl: "https://www.amazon.com/s?k=pour+over+coffee+set",
      imageGradient: "from-amber-100 to-brown-100 dark:from-amber-900/20 dark:to-brown-900/20",
    },
    {
      id: "3",
      name: "Smart Fitness Watch",
      description:
        "Advanced fitness tracker with heart rate monitoring, GPS, sleep tracking, and smartphone notifications. Great for health-conscious individuals and athletes.",
      priceRange: "$200-300",
      purchaseUrl: "https://www.amazon.com/s?k=smart+fitness+watch",
      imageGradient: "from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20",
    },
    {
      id: "4",
      name: "Artisan Cooking Class Experience",
      description:
        "A hands-on cooking workshop with a professional chef, learning to prepare gourmet meals. Includes all ingredients, wine pairing, and recipes to take home.",
      priceRange: "$150-200",
      purchaseUrl: "https://www.amazon.com/s?k=cooking+class+gift+certificate",
      imageGradient: "from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20",
    },
    {
      id: "5",
      name: "Premium Leather Weekender Bag",
      description:
        "Handcrafted full-grain leather duffle bag with brass hardware and interior pockets. Perfect for weekend getaways and business trips. Ages beautifully over time.",
      priceRange: "$180-250",
      purchaseUrl: "https://www.amazon.com/s?k=leather+weekender+bag",
      imageGradient: "from-stone-100 to-slate-100 dark:from-stone-900/20 dark:to-slate-900/20",
    },
    {
      id: "6",
      name: "Personalized Jewelry Box",
      description:
        "Elegant wooden jewelry box with custom engraving, velvet-lined compartments, and mirror. A timeless keepsake for storing treasured pieces.",
      priceRange: "$60-90",
      purchaseUrl: "https://www.amazon.com/s?k=personalized+jewelry+box",
      imageGradient: "from-rose-100 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20",
    },
    {
      id: "7",
      name: "Gourmet Food & Wine Basket",
      description:
        "Curated selection of artisanal cheeses, crackers, chocolates, and premium wine. Perfect for food lovers who appreciate quality ingredients.",
      priceRange: "$100-150",
      purchaseUrl: "https://www.amazon.com/s?k=gourmet+gift+basket",
      imageGradient: "from-yellow-100 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/20",
    },
  ];

  const handleFormSubmit = async (formData: FormData) => {
    console.log("Finding gifts for:", formData);
    setIsLoading(true);

    try {
      const response = await fetch("/api/gift-recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch gift recommendations");
      }

      const data = await response.json();
      setGifts(data.gifts);
    } catch (error: any) {
      console.error("Error fetching gift recommendations:", error);
      // Fallback to mock data if API fails
      setGifts(mockGifts);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <GiftRecommendationForm
              onSubmit={handleFormSubmit}
              isLoading={isLoading}
            />
          </div>
          <div className="lg:col-span-3">
            <GiftRecommendationsList gifts={gifts} isLoading={isLoading} />
          </div>
        </div>
      </main>
    </div>
  );
}
