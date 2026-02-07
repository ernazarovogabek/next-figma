// pages/index.js




"use client";




import { useState } from 'react';

const categories = [
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
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className=" bg-gray-50">
      {/* Asosiy konteyner */}
      <div className="container mx-auto px-4 py-8">
        {/* Kategoriyalar grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-start hover:shadow-md transition-shadow cursor-pointer"
              onMouseEnter={() => setActiveMenu(category.id)}
              onMouseLeave={() => setActiveMenu(null)}
            >
             
              
              {/* Matn va qo'shimcha menyu */}
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800 mb-1">{category.title}</h3>
                
                {/* "Aloqa" va "Biz haqimizda" menyu (faqat to'g'ri tomondagi elementda) */}
                {category.id === 4 && activeMenu === 4 && (
                  <div className="mt-2 bg-gray-50 rounded-lg p-2 border border-gray-100">
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Aloqa</div>
                    <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Biz haqimizda</div>
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