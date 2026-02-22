import { Sparkles, ShoppingBag, DollarSign } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(242,114,82,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(242,114,82,0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-6 py-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="text-8xl">🎁</div>
              <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-primary animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find the Perfect Present.{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Instantly
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            AI-powered gift recommendations tailored to your recipient's interests,
            occasion, and budget
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-sm text-foreground">Tell Us What They Love</h3>
                <p className="text-xs text-muted-foreground mt-1">Share their interests and hobbies</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-sm text-foreground">Set Your Budget</h3>
                <p className="text-xs text-muted-foreground mt-1">Any amount or no limit at all</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                <ShoppingBag className="w-7 h-7 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-sm text-foreground">Get Curated Ideas</h3>
                <p className="text-xs text-muted-foreground mt-1">Personalized recommendations instantly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
