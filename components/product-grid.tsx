import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link';

const PRODUCTS = [
  {
    id: 1,
    name: "ヘビーウェイトコットンジャージーTシャツ",
    price: "¥9,000",
    image: "https://images.lululemon.com/is/image/lululemon/LM3FBSS_0001_1?size=800,800",
    category: "トップス",
    description: "快適でスタイリッシュなオーバーサイズTシャツ。",
    link: "https://www.lululemon.co.jp/ja-jp/p/%E3%83%98%E3%83%93%E3%83%BC%E3%82%A6%E3%82%A7%E3%82%A4%E3%83%88%E3%82%B3%E3%83%83%E3%83%88%E3%83%B3%E3%82%B8%E3%83%A3%E3%83%BC%E3%82%B8%E3%83%BCt%E3%82%B7%E3%83%A3%E3%83%84/151550617.html?&cid=ps_google_alwayson_lower_dm_jp-ja_a_na_google-pmax-do-always-on-q2june-fy23-na&gad_source=1&gclid=EAIaIQobChMIpPb9g4_iiQMVpgh7Bx1UCwtmEAQYAyABEgIBdfD_BwE&gclsrc=aw.ds",
  },
  {
    id: 2,
    name: "オーガニックコットン12ozデニム",
    price: "¥47,300",
    image: "https://markaware.jp/cdn/shop/files/M24A-04PT23C_77-FRONT_3000x3000.jpg?v=1699250378",
    category: "ボトムス",
    description: "環境に優しいオーガニックコットンを使用したデニム。",
    link: "https://markaware.jp/products/organic-cotton-12oz-denim-regular-fit-jeans-used-washed?variant=44102208094456&currency=JPY&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=EAIaIQobChMIj4nzkYjiiQMVi8dMAh0OxxEcEAQYAiABEgIqFfD_BwE",
  },
  {
    id: 3,
    name: "リネンブレザー",
    price: "¥13,900",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop",
    category: "アウター",
    description: "軽量で通気性の良いリネン素材のブレザー。",
    link: "https://japan.mango.com/commodity/SPUN0477D/MA1658EW32614/",
  },
  {
    id: 4,
    name: "ストライプシャツ",
    price: "¥8,235",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop",
    category: "トップス",
    description: "クラシックなストライプデザインのシャツ。",
    link: "https://karakubuy.com/products/krk-lg-ae5387c?variant=45935977890011&stkn=b4cb12954ae9&utm_source=GG&utm_medium=wing&utm_campaign=standardshopping0222&gad_source=1&gclid=EAIaIQobChMIspe1m4fiiQMVcNEWBR1JOiZqEAQYASABEgIRzPD_BwE",
  },
  {
    id: 5,
    name: "チノパン",
    price: "¥5,038",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=500&fit=crop",
    category: "ボトムス",
    description: "カジュアルで多用途なチノパン。",
    link: "https://www.askul.co.jp/p/HP70967/?sc_e=cp_p_as_go_pl_c_law_c_HP70967&utm_source=go&utm_medium=PLA&utm_campaign=PLA_SSC_All&gad_source=1&gclid=EAIaIQobChMIn4XIsIfiiQMVKg57Bx03Mj1mEAQYAiABEgKV2fD_BwE",
  },
  {
    id: 6,
    name: "ニットカーディガン",
    price: "¥2,290",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop",
    category: "アウター",
    description: "暖かくて柔らかいニットカーディガン。",
    link: "https://www.gu-global.com/jp/ja/products/E351923-000/00?colorDisplayCode=34&sizeDisplayCode=007&utm_source=google&utm_medium=cpc&utm_campaign=pl_organic&utm_term=428",
  },
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PRODUCTS.map((product) => (
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
  );
}