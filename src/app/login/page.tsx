





"use client";

import { useState, FormEvent, ChangeEvent } from "react";

type SearchResult = {
  id: number;
  name: string;
  type: string;
  price: number;
  city: string;
  district: string;
};

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [productType, setProductType] = useState<string>("materiallar");
  const [city, setCity] = useState<string>("barchasi");
  const [district, setDistrict] = useState<string>("barchasi");
  console.log(city, setCity, district ,setDistrict)
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
   
  // ✅ TYPE BERILDI
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (searchQuery.trim() === "" && productType === "barchasi") {
        setSearchResults([]);
      } else {
        const results: SearchResult[] = [
          { id: 1, name: "Knauf beton", type: "Materiallar", price: 450000, city: "Navoiy", district: "Barchasi" },
          { id: 2, name: "Gips karton", type: "Materiallar", price: 320000, city: "Navoiy", district: "Navoiy" },
          { id: 3, name: "Armatur", type: "Materiallar", price: 680000, city: "Samarqand", district: "Bulung" },
          { id: 4, name: "Tsement", type: "Materiallar", price: 280000, city: "Navoiy", district: "Konimex" },
        ];

        const filteredResults = results.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.type.toLowerCase().includes(productType)
        );

        setSearchResults(filteredResults);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">QIDIRUV</h1>
          <p className="text-gray-600">Qurilish materiallari va xizmatlarini qidirish</p>
        </div>

        <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Qidiruv maydoni
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
                className="w-full px-4 py-2.5 border rounded-lg"
                placeholder="Knauf beton..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tanlangan mahsulot turi
              </label>
              <select
                value={productType}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setProductType(e.target.value)
                }
                className="w-full px-4 py-2.5 border rounded-lg"
              >
                <option value="barchasi">Barchasi</option>
                <option value="materiallar">Materiallar</option>
                <option value="mashinalar">Mashina mexanizmlar</option>
                <option value="qurilish-ishlari">Qurilish ishlari</option>
                <option value="usklunalar">Uskunalar</option>
              </select>
            </div>
          </div>

          <div className="mt-6 text-right">
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-60"
            >
              {isLoading ? "Qidirilmoqda..." : "Qidirish"}
            </button>
          </div>
        </form>

        {searchResults.length > 0 ? (
          <div className="bg-white rounded-xl shadow-md p-6">
            <table className="w-full">
              <tbody>
                {searchResults.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.price.toLocaleString()} so‘m</td>
                    <td>{item.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500">
            Natija topilmadi
          </p>
        )}
      </div>
    </div>
  );
}
