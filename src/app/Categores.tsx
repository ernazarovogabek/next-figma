


"use client";

import { useState } from "react";

type Category = {
  id: number;
  title: string;
  img?: string;
};

const categories: Category[] = [
  { id: 1, title: "Beton va qorishmalar", img: "/img/MA1.png" },
  { id: 2, title: "Kabel mahsulotlari" },
  { id: 3, title: "To'ldiruvchilar" },
  { id: 4, title: "Metall profil buyumlar" },
  { id: 5, title: "Yog'och material va buyumlar" },
  { id: 6, title: "Plastmassalar" },
  { id: 7, title: "Keramika materiallari va buyumlar" },
  { id: 8, title: "Issiqlik izolyatsiyasi va akustik materiallar" },
  { id: 9, title: "Tom yopish va gidroizolyatsiya materiallari" },
  { id: 10, title: "Qoplamali va yopishtiruvchi materiallar va buyumlar" },
];

export default function Home() {
  // 👇 MUAMMO SHU YERDA EDI — TYPE TO‘G‘RILANDI
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow cursor-pointer"
              onMouseEnter={() => setActiveMenu(category.id)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800 mb-1">
                  {category.title}
                </h3>

                {/* Faqat 4-id bo‘lganda hover menyu chiqadi */}
                {category.id === 4 && activeMenu === 4 && (
                  <div className="mt-3 bg-gray-50 rounded-lg p-3 border border-gray-200 space-y-1">
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition">
                      Aloqa
                    </div>
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition">
                      Biz haqimizda
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
