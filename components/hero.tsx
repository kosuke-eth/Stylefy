import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            AIがあなたの
            <span className="text-primary">パーソナルスタイリスト</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            最新のAI技術があなたの好みを学習し、パーソナライズされたファッションアドバイスを提供します。
            あなたらしさを引き出す新しいスタイルを見つけましょう。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/chat">
              <Button size="lg">AIスタイリストに相談する</Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" size="lg">
                商品を見る
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}