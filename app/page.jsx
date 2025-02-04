import { PromoBanner } from "@/components/ui/promo-banner";
import { Category } from "@/components/ui/category";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-4 pb-6">
      <PromoBanner />
      <Category />
    </div>
  );
}
