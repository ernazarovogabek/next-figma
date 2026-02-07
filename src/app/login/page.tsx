// app/qidiruv/page.js


"use client";


import { useState } from 'react'

export default function SearchPage() {
  // Form ma'lumotlari
  const [searchQuery, setSearchQuery] = useState('')
  const [productType, setProductType] = useState('materiallar')
  const [city, setCity] = useState('barchasi')
  const [district, setDistrict] = useState('barchasi')
  
  // Qidiruv natijalari (real loyihada API dan olinadi)
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Qidiruv natijalarini olish
  const handleSearch = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulyatsiya qilish uchun 1 sekund kutish
    setTimeout(() => {
      // Qidiruv natijalarini generatsiya qilish
      if (searchQuery.trim() === '' && productType === 'barchasi') {
        setSearchResults([])
      } else {
        // Misol natijalar
        const results = [
          { id: 1, name: 'Knauf beton', type: 'Materiallar', price: 450000, city: 'Navoiy', district: 'Barchasi' },
          { id: 2, name: 'Gips karton', type: 'Materiallar', price: 320000, city: 'Navoiy', district: 'Navoiy' },
          { id: 3, name: 'Armatur', type: 'Materiallar', price: 680000, city: 'Samarqand', district: 'Bulung' },
          { id: 4, name: 'Tsement', type: 'Materiallar', price: 280000, city: 'Navoiy', district: 'Konimex' }
        ]
        
        // Qidiruv so'roviga mos keladigan natijalarni filtratsiya qilish
        const filteredResults = results.filter(item => 
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.type.toLowerCase().includes(productType)
        )
        
        setSearchResults(filteredResults)
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Sarlavha */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">QIDIRUV</h1>
          <p className="text-gray-600">Qurilish materiallari va xizmatlarini qidirish</p>
        </div>

        {/* Qidiruv formas */}
        <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Qidiruv maydoni */}
            <div className="col-span-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Qidiruv maydoni
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

            {/* Mahsulot turi */}
            <div className="col-span-1">
              <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-1">
                Tanlangan mahsulot turi
              </label>
              <select
                id="productType"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
              >
                <option value="barchasi">Barchasi</option>
                <option value="materiallar">Materiallar</option>
                <option value="mashinalar">Mashina mexanizmlar</option>
                <option value="qurilish-ishlari">Qurilish ishlari</option>
                <option value="usklunalar">Uskunalar va qurilmalar</option>
              </select>
            </div>
          </div>

          {/* Qidiruv tugmasi */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-70"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Qidirilmoqda...
                </span>
              ) : 'Qidirish'}
            </button>
          </div>
        </form>

        {/* Natijalar bo'limi */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">QIDIRUV NATIJALARI</h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Natijalar */}
          {searchResults.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mahsulot nomi</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Turi</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Narxi</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joylashuvi</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {searchResults.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.price.toLocaleString()} so'm</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.city}, {item.district}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900">Ko'rish</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              {isLoading ? (
                <div className="flex flex-col items-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                  <p className="text-gray-600">Natijalar yuklanmoqda...</p>
                </div>
              ) : (
                <div className="text-gray-500">
                  <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p className="text-lg font-medium">Sizning so'rovingizga mos natija topilmadi</p>
                  <p className="mt-2 text-sm">Boshqa qidiruv so'rovini urinib ko'ring yoki filtrlarni o'zgartiring</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}