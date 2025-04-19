import { Hero } from "@/components/hero";
import { FeaturedProducts } from "@/components/featured-products";
import { AIAssistantPreview } from "@/components/ai-assistant-preview";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Hero />
      <FeaturedProducts />
      <AIAssistantPreview />
    </div>
  );
}