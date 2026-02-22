import GiftRecommendationsList from "../GiftRecommendationsList";

export default function GiftRecommendationsListExample() {
  const sampleGifts = [
    {
      id: "1",
      name: "Wireless Noise-Canceling Headphones",
      description:
        "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and exceptional sound quality. Perfect for music lovers and frequent travelers.",
      priceRange: "$250-350",
      purchaseUrl: "https://example.com",
      imageGradient: "from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20",
    },
    {
      id: "2",
      name: "Professional Coffee Maker Set",
      description:
        "Complete pour-over coffee brewing kit with precision kettle, ceramic dripper, and premium filters. Ideal for coffee enthusiasts who appreciate the art of brewing.",
      priceRange: "$80-120",
      purchaseUrl: "https://example.com",
      imageGradient: "from-amber-100 to-brown-100 dark:from-amber-900/20 dark:to-brown-900/20",
    },
    {
      id: "3",
      name: "Smart Fitness Watch",
      description:
        "Advanced fitness tracker with heart rate monitoring, GPS, sleep tracking, and smartphone notifications. Great for health-conscious individuals and athletes.",
      priceRange: "$200-300",
      purchaseUrl: "https://example.com",
      imageGradient: "from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20",
    },
  ];

  return <GiftRecommendationsList gifts={sampleGifts} isLoading={false} />;
}
