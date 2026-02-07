

"use client";


// app/materiallar/page.js
import { useState } from 'react'

export default function MaterialsPage() {
  // Filtrlash ma'lumotlari
  const [searchQuery, setSearchQuery] = useState('')
  const [materialType, setMaterialType] = useState('')
  const [city, setCity] = useState('barchasi')
  const [district, setDistrict] = useState('barchasi')
  
  // Sahifalash
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">KOP/KO'RILGANLAR</h1>
          <p className="text-gray-600">Qurilish materiallarini ko'rish va sotib olish</p>
        </div>

        {/* Filtrlash bloki */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Tanlangan mahsulot turi */}
            <div className="col-span-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Tanlangan mahsulot turi
              </label>
              <input
                type="text"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Knauf beton..."
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Tanlangan kategoriya */}
            <div className="col-span-1">
              <label htmlFor="materialType" className="block text-sm font-medium text-gray-700 mb-1">
                Material turi
              </label>
              <select
                id="materialType"
                value={materialType}
                onChange={(e) => setMaterialType(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
              >
                <option value="">Barchasi</option>
                <option value="beton">Beton</option>
                <option value="gips">Gips</option>
                <option value="tsement">Tsement</option>
                <option value="quruviy">Quruviy materiallar</option>
                <option value="metall">Metall materiallar</option>
              </select>
            </div>

            {/* Shahar / viloyat */}
            <div className="col-span-1">
              <label htmlFor="city" className="sr-only">Shahar / viloyat</label>
              <select
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
              >
                <option value="barchasi">Barchasi</option>
                <option value="navoiy">Navoiy</option>
                <option value="samarqand">Samarqand</option>
                <option value="toshkent">Toshkent</option>
                <option value="buxoro">Buxoro</option>
              </select>
            </div>
            
            {/* Tuman */}
            <div className="col-span-1">
              <label htmlFor="district" className="sr-only">Tuman</label>
              <select
                id="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
              >
                <option value="barchasi">Barchasi</option>
                <option value="navoiy">Navoiy</option>
                <option value="konimex">Konimex</option>
                <option value="zomin">Zomin</option>
                <option value="qiziltepa">Qiziltepa</option>
              </select>
            </div>
          </div>
        </div>

        {/* Materiallar bo'limi */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">MATERIALLAR</h2>
              <p className="text-gray-600">16 ta natija topildi</p>
            </div>
          </div>

          {/* Materiallar grid - To'g'ridan-to'g'ri JSX da yozilgan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Material 1 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/QR1.png" alt="Knauf beton" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">402.02.01-0002</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Knauf beton</h3>
                <p className="text-gray-600 text-sm mb-2">Knauf betonlar yordamida qurilish ishlari, qavatlar orasidagi masofani to'ldirishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">120,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Material 2 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/QR2.png" alt="Gips karton" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">402.02.01-0001</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Gips karton</h3>
                <p className="text-gray-600 text-sm mb-2">Gips kartonlar yordamida qavatlar orasidagi masofani to'ldirishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">95,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Material 3 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/QR3.png" alt="Tsement" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">402.02.01-0003</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Tsement</h3>
                <p className="text-gray-600 text-sm mb-2">Tsementlar yordamida qurilish ishlari, qavatlar orasidagi masofani to'ldirishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">85,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Material 4 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/QR4.png" alt="Quruviy materiallar" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">402.02.01-0004</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Quruviy materiallar</h3>
                <p className="text-gray-600 text-sm mb-2">Quruviy materiallar yordamida qurilish ishlari, qavatlar orasidagi masofani to'ldirishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">145,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Material 5 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/QR5.png" alt="Metall materiallar" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">402.02.01-0005</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Metall materiallar</h3>
                <p className="text-gray-600 text-sm mb-2">Metall materiallar yordamida qurilish ishlari, qavatlar orasidagi masofani to'ldirishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">180,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Material 6 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/QR6.png" alt="Quruviy materiallar 2" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">402.02.01-0006</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Quruviy materiallar</h3>
                <p className="text-gray-600 text-sm mb-2">Quruviy materiallar yordamida qurilish ishlari, qavatlar orasidagi masofani to'ldirishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">160,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Material 7 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/QR7.png" alt="Knauf beton 2" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">402.02.01-0007</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Knauf beton</h3>
                <p className="text-gray-600 text-sm mb-2">Knauf betonlar yordamida qurilish ishlari, qavatlar orasidagi masofani to'ldirishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">130,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Material 8 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/QR8.png" alt="Gips karton 2" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">402.02.01-0008</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Gips karton</h3>
                <p className="text-gray-600 text-sm mb-2">Gips kartonlar yordamida qavatlar orasidagi masofani to'ldirishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">100,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Material 9 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/QR9.png" alt="Tsement 2" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">402.02.01-0009</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Tsement</h3>
                <p className="text-gray-600 text-sm mb-2">Tsementlar yordamida qurilish ishlari, qavatlar orasidagi masofani to'ldirishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">90,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Material 10 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/QR5.png" alt="Quruviy materiallar 3" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">402.02.01-0010</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Quruviy materiallar</h3>
                <p className="text-gray-600 text-sm mb-2">Quruviy materiallar yordamida qurilish ishlari, qavatlar orasidagi masofani to'ldirishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">150,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Material 11 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/QR11.png" alt="Metall materiallar 2" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">402.02.01-0011</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Metall materiallar</h3>
                <p className="text-gray-600 text-sm mb-2">Metall materiallar yordamida qurilish ishlari, qavatlar orasidagi masofani to'ldirishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">190,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Material 12 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/QR12.png" alt="Knauf beton 3" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">402.02.01-0012</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Knauf beton</h3>
                <p className="text-gray-600 text-sm mb-2">Knauf betonlar yordamida qurilish ishlari, qavatlar orasidagi masofani to'ldirishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">140,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Material 13 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/QR13.png" alt="Gips karton 3" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">402.02.01-0013</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Gips karton</h3>
                <p className="text-gray-600 text-sm mb-2">Gips kartonlar yordamida qavatlar orasidagi masofani to'ldirishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">110,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Material 14 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/QR14.png" alt="Tsement 3" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">402.02.01-0014</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Tsement</h3>
                <p className="text-gray-600 text-sm mb-2">Tsementlar yordamida qurilish ishlari, qavatlar orasidagi masofani to'ldirishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">95,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Material 15 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/QR15.png" alt="Quruviy materiallar 4" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">402.02.01-0015</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Quruviy materiallar</h3>
                <p className="text-gray-600 text-sm mb-2">Quruviy materiallar yordamida qurilish ishlari, qavatlar orasidagi masofani to'ldirishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">165,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Material 16 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/QR16.png" alt="Metall materiallar 3" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">402.02.01-0016</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Metall materiallar</h3>
                <p className="text-gray-600 text-sm mb-2">Metall materiallar yordamida qurilish ishlari, qavatlar orasidagi masofani to'ldirishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">200,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>
          </div>

          {/* Sahifalash */}
          <div className="mt-8 flex flex-wrap items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-sm text-gray-700">
              16 natijadan 1-12 tasini ko'rsatish
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Oldingi
              </button>
              <button className="px-4 py-2 border rounded-md text-sm font-medium bg-blue-600 text-white border-blue-600">1</button>
              <button 
                onClick={() => setCurrentPage(2)}
                className="px-4 py-2 border rounded-md text-sm font-medium text-gray-700 border-gray-300 hover:bg-gray-50"
              >
                2
              </button>
              <button 
                onClick={() => setCurrentPage(2)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Keyingi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}