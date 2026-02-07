





"use client";
// app/mashinalar/page.js
import { useState } from 'react'

export default function MachineryPage() {
  // Filtrlash ma'lumotlari
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('')
  const [productType, setProductType] = useState('')
  const [city, setCity] = useState('barchasi')
  const [district, setDistrict] = useState('barchasi')
  
  // Sahifalash
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">MASHINA VA MECHANIZMLAR</h1>
          <p className="text-gray-600">Qurilish mashinalari va mexanizmlarini ko'rish va sotib olish</p>
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
                placeholder="Buldozer..."
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Tanlangan kategoriya */}
            <div className="col-span-1">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Kategoriya
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
              >
                <option value="">Barchasi</option>
                <option value="buldozerlar">Buldozerlar</option>
                <option value="ekskavatorlar">Ekskavatorlar</option>
                <option value="kranlar">Kranlar</option>
                <option value="asfalt">Asfalt mashinalari</option>
                <option value="beton">Beton mashinalari</option>
              </select>
            </div>

            {/* Tanlangan turlar */}
            <div className="col-span-1">
              <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-1">
                Turlar
              </label>
              <select
                id="productType"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
              >
                <option value="">Barchasi</option>
                <option value="barchasi">Barchasi</option>
                <option value="mashina">Mashina</option>
                <option value="mexanizm">Mexanizm</option>
                <option value="qo'shimcha">Qo'shimcha</option>
              </select>
            </div>

            {/* Boshqa qidiruv maydoni */}
            <div className="col-span-1">
              <label htmlFor="other" className="block text-sm font-medium text-gray-700 mb-1">
                Boshqa qidiruv maydoni
              </label>
              <select
                id="other"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
              >
                <option value="">Barchasi</option>
                <option value="narx">Narx bo'yicha</option>
                <option value="kenglik">Kenglik bo'yicha</option>
                <option value="og'irlik">Og'irlik bo'yicha</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mahsulotlar bo'limi */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">MAHSULOTLAR</h2>
              <p className="text-gray-600">10 ta natija topildi</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
              {/* Shahar / viloyat */}
              <div className="relative">
                <label htmlFor="city" className="sr-only">Shahar / viloyat</label>
                <select
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white w-full sm:w-48"
                >
                  <option value="barchasi">Barchasi</option>
                  <option value="navoiy">Navoiy</option>
                  <option value="samarqand">Samarqand</option>
                  <option value="toshkent">Toshkent</option>
                  <option value="buxoro">Buxoro</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Tuman */}
              <div className="relative">
                <label htmlFor="district" className="sr-only">Tuman</label>
                <select
                  id="district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white w-full sm:w-48"
                >
                  <option value="barchasi">Barchasi</option>
                  <option value="navoiy">Navoiy</option>
                  <option value="konimex">Konimex</option>
                  <option value="zomin">Zomin</option>
                  <option value="qiziltepa">Qiziltepa</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Mahsulotlar - To'g'ridan-to'g'ri JSX da yozilgan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mahsulot 1 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/CR1.png" alt="Buldozer D-440" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">270 x 373</div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Buldozer D-440</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">Buldozerlar yordamida yer ishlari, yo'l qurish, qazish ishlari bajariladi. Hozirgi vaqtda eng yangi model D-440.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">45,000,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Mahsulot 2 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/CR2.png" alt="Tovushli ekskavator" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">250 x 350</div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tovushli ekskavator</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">Tovushli ekskavatorlar qazish ishlari, yer ishlari, kanal qazishda ishlatiladi. 15000 kg og'irlikda.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">68,000,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Mahsulot 3 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/CR3.png" alt="Beton aralashtiruvchi" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">200 x 300</div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Beton aralashtiruvchi</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">Beton aralashtiruvchi qurilish ishlarida ishlatiladi. 10 m3 qobiliyatga ega.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">32,000,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Mahsulot 4 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/CR4.png" alt="Kran" className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">300 x 400</div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kran</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">Kranlar baland binolar qurishda, og'ir yuklarni ko'tarishda ishlatiladi. 15 tonnaga qadar yuk ko'tara oladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">120,000,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Mahsulot 5 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/CR5.png" alt="Asfalt qo'yuvchi" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">280 x 380</div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Asfalt qo'yuvchi</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">Asfalt qo'yuvchi yo'l qurishda ishlatiladi. 1000 m2/soat tezlikda ishlaydi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">85,000,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Mahsulot 6 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/CR6.png" alt="Traktor" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">220 x 320</div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Traktor</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">Traktorlar yer ishlari, qazish ishlari, qurilish materiallarini tashishda ishlatiladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">35,000,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Mahsulot 7 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/CR7.png" alt="Kamyon" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">240 x 340</div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kamyon</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">Kamyonlar qurilish materiallarini tashishda ishlatiladi. 15 tonnaga qadar yuk olib boradi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">28,000,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Mahsulot 8 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/CR8.png" alt="Beton qo'yuvchi" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">230 x 330</div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Beton qo'yuvchi</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">Beton qo'yuvchi qurilish ishlarida ishlatiladi. 10 m3 qobiliyatga ega.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">42,000,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Mahsulot 9 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/CR9.png" alt="Pogonniq" className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">210 x 310</div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pogonniq</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">Pogonniq qurilish ishlarida ishlatiladi. 5 tonnaga qadar yuk ko'tara oladi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">18,000,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>




               {/* Mahsulot 7 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/CR10.png" alt="Kamyon" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">240 x 340</div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kamyon</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">Kamyonlar qurilish materiallarini tashishda ishlatiladi. 15 tonnaga qadar yuk olib boradi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">28,000,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Mahsulot 8 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/CR11.png" alt="Beton qo'yuvchi" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">230 x 330</div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Beton qo'yuvchi</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">Beton qo'yuvchi qurilish ishlarida ishlatiladi. 10 m3 qobiliyatga ega.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">42,000,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>
            



 {/* Mahsulot 7 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/CR12.png" alt="Kamyon" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">240 x 340</div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kamyon</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">Kamyonlar qurilish materiallarini tashishda ishlatiladi. 15 tonnaga qadar yuk olib boradi.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">28,000,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>

            {/* Mahsulot 8 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src="/img/CR13.png" alt="Beton qo'yuvchi" className="w-70 h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">230 x 330</div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Beton qo'yuvchi</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">Beton qo'yuvchi qurilish ishlarida ishlatiladi. 10 m3 qobiliyatga ega.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">42,000,000 so'm</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Ko'rish</button>
                </div>
              </div>
            </div>



        


          </div>





               


          {/* Sahifalash */}
          <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-sm text-gray-700">
              10 natijadan 1-9 tasini ko'rsatish
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