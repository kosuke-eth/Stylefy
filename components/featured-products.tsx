"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "ヘビーウェイトコットンジャージーTシャツ",
    price: "¥9,000",
    image: "https://images.lululemon.com/is/image/lululemon/LM3FBSS_0001_1?size=800,800",
    link:"https://www.lululemon.co.jp/ja-jp/p/%E3%83%98%E3%83%93%E3%83%BC%E3%82%A6%E3%82%A7%E3%82%A4%E3%83%88%E3%82%B3%E3%83%83%E3%83%88%E3%83%B3%E3%82%B8%E3%83%A3%E3%83%BC%E3%82%B8%E3%83%BCt%E3%82%B7%E3%83%A3%E3%83%84/151550617.html?&cid=ps_google_alwayson_lower_dm_jp-ja_a_na_google-pmax-do-always-on-q2june-fy23-na&gad_source=1&gclid=EAIaIQobChMIpPb9g4_iiQMVpgh7Bx1UCwtmEAQYAyABEgIBdfD_BwE&gclsrc=aw.ds",
    description: "快適でスタイリッシュなオーバーサイズTシャツ。",
  },
  {
    id: 2,
    name: "オーガニックコットン12ozデニム",
    price: "¥47,300",
    image: "https://markaware.jp/cdn/shop/files/M24A-04PT23C_77-FRONT_3000x3000.jpg?v=1699250378",
    link:"https://markaware.jp/products/organic-cotton-12oz-denim-regular-fit-jeans-used-washed?variant=44102208094456&currency=JPY&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=EAIaIQobChMIj4nzkYjiiQMVi8dMAh0OxxEcEAQYAiABEgIqFfD_BwE",
    description: "環境に優しいオーガニックコットンを使用したデニム。",
  },
  {
    id: 3,
    name: "リネンブレザー",
    price: "¥13,900",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop",
    link:"https://japan.mango.com/commodity/SPUN0477D/MA1658EW32614/",
    description: "軽量で通気性の良いリネン素材のブレザー。",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8">おすすめアイテム</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                <p className="text-sm text-muted-foreground mb-4">{product.price}</p>
                {product.link ? (
                  <Link href={product.link} className="w-full">
                    <Button className="w-full">商品を購入</Button>
                  </Link>
                ) : (
                  <Button className="w-full" disabled>
                    リンクがありません
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}