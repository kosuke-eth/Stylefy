"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Bot, Send, User } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Image from "next/image";

interface Message {
  role: "assistant" | "user";
  content: string;
}

interface Product {
  id: number;            // number に修正
  image: string;         // プロパティ名を image に統一
  name: string;
  description: string;
  price: string;
  category: string;
  link?: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "こんにちは！本日のファッションアドバイスをさせていただきます。お探しのアイテムや、ご要望をお聞かせください。",
    },
  ]);
  const [input, setInput] = useState("");
  const [userId, setUserId] = useState("");
  const API_KEY = "app-fpOLi0RCWEj8GgCnutj6go0a";
  const API_URL = "https://api.dify.ai/v1/chat-messages";

  const recommendedProducts: Product[] = [
    {
      id: 1,
      name: "ヘビーウェイトコットンジャージーTシャツ",
      price: "¥9,000",
      image:
        "https://images.lululemon.com/is/image/lululemon/LM3FBSS_0001_1?size=800,800",
      category: "トップス",
      description: "快適でスタイリッシュなオーバーサイズTシャツ。",
      link: "https://www.lululemon.co.jp/ja-jp/p/%E3%83%98%E3%83%93%E3%83%BC%E3%82%A6%E3%82%A7%E3%82%A4%E3%83%88%E3%82%B3%E3%83%83%E3%83%84/151550617.html",
    },
    {
      id: 2,
      name: "オーガニックコットン12ozデニム",
      price: "¥47,300",
      image:
        "https://markaware.jp/cdn/shop/files/M24A-04PT23C_77-FRONT_3000x3000.jpg?v=1699250378",
      category: "ボトムス",
      description: "環境に優しいオーガニックコットンを使用したデニム。",
      link: "https://markaware.jp/products/organic-cotton-12oz-denim-regular-fit-jeans-used-washed",
    },
    {
      id: 3,
      name: "リネンブレザー",
      price: "¥13,900",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop",
      category: "アウター",
      description: "軽量で通気性の良いリネン素材のブレザー。",
      link: "https://japan.mango.com/commodity/SPUN0477D/MA1658EW32614/",
    },
  ];

  useEffect(() => {
    setUserId(uuidv4());
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          user: userId,
          query: input,
          inputs: newMessages,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("APIエラー詳細:", errorData);
        throw new Error(`APIエラー: ${errorData.message}`);
      }

      const data = await response.json();
      const assistantMessage = formatMessage(data.answer || "AIからの返答がありません。");

      setMessages((prev) => [...prev, { role: "assistant", content: assistantMessage }]);
    } catch (error) {
      console.error("エラー:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "申し訳ありません。応答の取得に失敗しました。" },
      ]);
    }

    setInput("");
  };

  const formatMessage = (content: string): string =>
    content
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
      .replace(/\*(.*?)\*/g, "<i>$1</i>")
      .replace(/\n/g, "<br />");

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col h-[600px]">
          {/* ヘッダー */}
          <div className="p-4 border-b">
            <h2 className="text-2xl font-semibold">AIスタイリスト</h2>
            <p className="text-sm text-muted-foreground">
              あなたの好みに合わせたファッションアドバイスを提供します
            </p>
          </div>

          {/* チャットエリア */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 ${message.role === "user" ? "justify-end" : ""}`}
                >
                  {message.role === "assistant" && (
                    <Avatar>
                      <Bot className="h-5 w-5" />
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg p-3 max-w-[80%] ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                    dangerouslySetInnerHTML={{ __html: message.content }}
                  />
                  {message.role === "user" && (
                    <Avatar>
                      <User className="h-5 w-5" />
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* 入力フォーム */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="メッセージを入力..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* おすすめ商品セクション */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">おすすめ商品</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 bg-white shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover rounded-lg"
              />
              <h4 className="font-semibold text-lg mt-4">{product.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{product.description}</p>
              <p className="font-bold text-primary mt-2">{product.price}</p>
              {product.link ? (
                <Link href={product.link} className="w-full" target="_blank">
                  <Button className="w-full mt-4">商品を購入</Button>
                </Link>
              ) : (
                <Button className="w-full mt-4" disabled>
                  リンクがありません
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
