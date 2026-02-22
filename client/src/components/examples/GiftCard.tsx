import GiftCard from "../GiftCard";

export default function GiftCardExample() {
  const sampleGift = {
    id: "1",
    name: "Premium Leather Journal",
    description:
      "A beautifully crafted leather-bound journal with thick, cream-colored pages. Perfect for writers, journalers, and anyone who loves to put pen to paper.",
    priceRange: "$35-45",
    purchaseUrl: "https://example.com",
    imageGradient: "from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20",
  };

  return <GiftCard gift={sampleGift} />;
}
