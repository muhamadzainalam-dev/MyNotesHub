import { Header } from "./components/header"
import { PromoBanner } from "./components/promo-banner"
import { CategoryFilter } from "./components/category-filter"
import { RamenItem } from "./components/ramen-item"

export default function Page() {
  const ramenItems = Array(6).fill({
    name: "Chicken Ramen",
    price: 20.95,
    image: `${process.env.NEXT_PUBLIC_BASE_URL}/placeholder.svg?height=200&width=200`,
  })

  return (
    (<div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-32 px-4 pb-6">
        <PromoBanner />
        <CategoryFilter />
        <div className="grid grid-cols-2 gap-4">
          {ramenItems.map((item, index) => (
            <RamenItem key={index} {...item} />
          ))}
        </div>
      </main>
    </div>)
  );
}

