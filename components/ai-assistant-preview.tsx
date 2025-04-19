"use client";

import { useState } from "react";
import { Bot, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

export function AIAssistantPreview() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "こんにちは！本日はどのようなスタイルをお探しですか？" },
  ]);
  const [input, setInput] = useState("");
  const API_KEY = "app-fpOLi0RCWEj8GgCnutj6go0a";
  const API_URL = "https://api.dify.ai/v1/chat-messages";

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          inputs: [{ role: "user", content: input }], // 必須フィールド
          user: "user-12345", // 必須フィールド: 任意のユーザーID
          query: input, // 通常は必要なフィールド
        }),
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("Dify API Response Error:", errorDetails);
        throw new Error(`Failed to fetch response: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = {
        sender: "bot",
        text: data.outputs?.[0]?.content || "回答を取得できませんでした。",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error communicating with Dify API:", error);
      const errorMessage = { sender: "bot", text: "エラーが発生しました。もう一度お試しください。" };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setInput("");
    }
  };

  return (
    <section className="py-12 bg-muted rounded-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">
              AIファッションデザイナーと相談
            </h2>
            <p className="text-base text-muted-foreground mb-6">
              好みや体型、ライフスタイルに基づいて、あなた専用のファッションアドバイスを提供します。
            </p>
            <Link href="/chat">
              <Button className="bg-primary text-white px-4 py-2 rounded-md mt-4">
                詳しく見る
              </Button>
            </Link>
          </div>
          <div className="hidden md:block">
            <Image
              src="https://media.glamour.com/photos/56e1f5681632e6ca44c17428/master/pass/fashion-2016-02-group-Instagram-main.jpg"
              alt="AIファッションデザイナー"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

