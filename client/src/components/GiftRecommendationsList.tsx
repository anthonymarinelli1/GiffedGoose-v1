import GiftCard, { type Gift } from "./GiftCard";
import { Card } from "@/components/ui/card";
import { Gift as GiftIcon, Sparkles } from "lucide-react";

interface GiftRecommendationsListProps {
  gifts: Gift[];
  isLoading?: boolean;
}

export default function GiftRecommendationsList({
  gifts,
  isLoading = false,
}: GiftRecommendationsListProps) {
  if (isLoading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden animate-pulse">
            <div className="aspect-video bg-muted" />
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="h-6 bg-muted rounded w-3/4" />
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-5/6" />
              </div>
              <div className="flex items-center justify-between">
                <div className="h-6 bg-muted rounded w-20" />
                <div className="h-4 bg-muted rounded w-24" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  if (gifts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="relative mb-6">
          <GiftIcon className="h-24 w-24 text-muted-foreground/30" />
          <Sparkles className="h-8 w-8 text-primary absolute -top-2 -right-2" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Ready to Find the Perfect Gift?
        </h3>
        <p className="text-sm text-muted-foreground max-w-md">
          Fill out the form on the left with details about your recipient, and
          we'll generate personalized gift recommendations just for you.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-testid="list-gift-recommendations">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Gift Recommendations
        </h2>
        <p className="text-sm text-muted-foreground">
          We found {gifts.length} perfect {gifts.length === 1 ? "gift" : "gifts"} for your recipient
        </p>
      </div>
      {gifts.map((gift) => (
        <GiftCard key={gift.id} gift={gift} />
      ))}
    </div>
  );
}
