import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export interface Gift {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  purchaseUrl: string;
  imageGradient?: string;
}

interface GiftCardProps {
  gift: Gift;
}

export default function GiftCard({ gift }: GiftCardProps) {
  const gradientClass =
    gift.imageGradient || "from-purple-100 to-pink-100 dark:from-purple-900/20 dark:dark:to-pink-900/20";

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover-elevate" data-testid={`card-gift-${gift.id}`}>
      <div
        className={`aspect-video bg-gradient-to-br ${gradientClass} flex items-center justify-center`}
      >
        <div className="text-6xl opacity-20">🎁</div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`text-gift-name-${gift.id}`}>
            {gift.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {gift.description}
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Badge className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20" data-testid={`badge-price-${gift.id}`}>
            {gift.priceRange}
          </Badge>
          <a
            href={gift.purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline decoration-2 underline-offset-4 hover-elevate"
            data-testid={`link-purchase-${gift.id}`}
          >
            View Product
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Card>
  );
}
