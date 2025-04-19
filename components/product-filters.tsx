"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const CATEGORIES = [
  { id: "tops", label: "トップス" },
  { id: "bottoms", label: "ボトムス" },
  { id: "outerwear", label: "アウター" },
  { id: "dresses", label: "ワンピース" },
  { id: "accessories", label: "アクセサリー" },
];

const SIZES = [
  { id: "xs", label: "XS" },
  { id: "s", label: "S" },
  { id: "m", label: "M" },
  { id: "l", label: "L" },
  { id: "xl", label: "XL" },
];

const COLORS = [
  { id: "black", label: "ブラック" },
  { id: "white", label: "ホワイト" },
  { id: "gray", label: "グレー" },
  { id: "navy", label: "ネイビー" },
  { id: "beige", label: "ベージュ" },
];

export function ProductFilters() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">フィルター</h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="categories">
          <AccordionTrigger>カテゴリー</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {CATEGORIES.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox id={category.id} />
                  <Label htmlFor={category.id}>{category.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="sizes">
          <AccordionTrigger>サイズ</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {SIZES.map((size) => (
                <div key={size.id} className="flex items-center space-x-2">
                  <Checkbox id={size.id} />
                  <Label htmlFor={size.id}>{size.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="colors">
          <AccordionTrigger>カラー</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {COLORS.map((color) => (
                <div key={color.id} className="flex items-center space-x-2">
                  <Checkbox id={color.id} />
                  <Label htmlFor={color.id}>{color.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}