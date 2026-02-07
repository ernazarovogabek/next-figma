"use client";
import Categores from "@/app/Categores"
import { TfiShoppingCartFull } from "react-icons/tfi";
// pages/index.js
export default function Home() {
  return (
    <>
    <Categores />
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Sarlavha */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">KO'P KO'RILGANLAR</h1>
         <img  src="/img/AD1.PNG"  alt="MKS124-01-0001"  className="w-50 h-32 object-contain mb-3"/>
        
        {/* Mahsulotlar grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Mahsulot 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <img 
                src="/img/US1.png" 
                alt="MKS124-01-0001" 
                className="w-70 h-32 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">MKS124-01-0001</h3>
              <p className="text-sm text-gray-600 mb-3">
                Beto... qo'shimcha ma'lumotlar
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">Ko'rish</button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
                 <TfiShoppingCartFull />
                </button>
              </div>
            </div>
          </div>

          {/* Mahsulot 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <img 
                src="/img/US2.png" 
                alt="MKS125-01-0001" 
                className="w-70 h-32 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">MKS125-01-0001</h3>
              <p className="text-sm text-gray-600 mb-3">
                Elektr... qo'shimcha ma'lumotlar
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">Ko'rish</button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
                 <TfiShoppingCartFull />
                </button>
              </div>
            </div>
          </div>

          {/* Mahsulot 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <img 
                src="/img/US3.png" 
                alt="MKS126-01-0001" 
                className="w-70 h-32 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">MKS126-01-0001</h3>
              <p className="text-sm text-gray-600 mb-3">
                Quvvat... qo'shimcha ma'lumotlar
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">Ko'rish</button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
                 <TfiShoppingCartFull />
                </button>
              </div>
            </div>
          </div>





  {/* Mahsulot 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <img 
                src="/img/US4.png" 
                alt="MKS124-01-0001" 
                className="w-70 h-32 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">MKS124-01-0001</h3>
              <p className="text-sm text-gray-600 mb-3">
                Beto... qo'shimcha ma'lumotlar
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">Ko'rish</button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
                <TfiShoppingCartFull />
                </button>
              </div>
            </div>
          </div>

          {/* Mahsulot 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <img 
                src="/img/US5.png" 
                alt="MKS125-01-0001" 
                className="w-70 h-32 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">MKS125-01-0001</h3>
              <p className="text-sm text-gray-600 mb-3">
                Elektr... qo'shimcha ma'lumotlar
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">Ko'rish</button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
                 <TfiShoppingCartFull />
                </button>
              </div>
            </div>
          </div>

          {/* Mahsulot 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <img 
                src="/img/US6" 
                alt="MKS126-01-0001" 
                className="w-70 h-32 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">MKS126-01-0001</h3>
              <p className="text-sm text-gray-600 mb-3">
                Quvvat... qo'shimcha ma'lumotlar
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">Ko'rish</button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
                  <TfiShoppingCartFull />
                </button>
              </div>
            </div>
          </div>



              {/* Mahsulot 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <img 
                src="/img/US7.png" 
                alt="MKS124-01-0001" 
                className="w-70 h-32 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">MKS124-01-0001</h3>
              <p className="text-sm text-gray-600 mb-3">
                Beto... qo'shimcha ma'lumotlar
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">Ko'rish</button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
                  <TfiShoppingCartFull />
                </button>
              </div>
            </div>
          </div>

          {/* Mahsulot 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <img 
                src="/img/US8.png" 
                alt="MKS125-01-0001" 
                className="w-70 h-32 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">MKS125-01-0001</h3>
              <p className="text-sm text-gray-600 mb-3">
                Elektr... qo'shimcha ma'lumotlar
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">Ko'rish</button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
                 <TfiShoppingCartFull />
                </button>
              </div>
            </div>
          </div>

          {/* Mahsulot 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <img 
                src="/img/US9.png" 
                alt="MKS126-01-0001" 
                className="w-70 h-32 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">MKS126-01-0001</h3>
              <p className="text-sm text-gray-600 mb-3">
                Quvvat... qo'shimcha ma'lumotlar
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">Ko'rish</button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
                 <TfiShoppingCartFull />
                </button>
              </div>
            </div>
          </div>




            {/* Mahsulot 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <img 
                src="/img/US10.png" 
                alt="MKS124-01-0001" 
                className="w-70 h-32 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">MKS124-01-0001</h3>
              <p className="text-sm text-gray-600 mb-3">
                Beto... qo'shimcha ma'lumotlar
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">Ko'rish</button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
                 <TfiShoppingCartFull />
                </button>
              </div>
            </div>
          </div>

          {/* Mahsulot 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <img 
                src="/img/US11.png" 
                alt="MKS125-01-0001" 
                className="w-70 h-32 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">MKS125-01-0001</h3>
              <p className="text-sm text-gray-600 mb-3">
                Elektr... qo'shimcha ma'lumotlar
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">Ko'rish</button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
                <TfiShoppingCartFull />
                </button>
              </div>
            </div>
          </div>

          {/* Mahsulot 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <img 
                src="/img/US12,png" 
                alt="MKS126-01-0001" 
                className="w-13 h-32 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">MKS126-01-0001</h3>
              <p className="text-sm text-gray-600 mb-3">
                Quvvat... qo'shimcha ma'lumotlar
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">Ko'rish</button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
                  <TfiShoppingCartFull />
                </button>
              </div>
            </div>
          </div>



              {/* Mahsulot 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <img 
                src="/img/US13.png" 
                alt="MKS126-01-0001" 
                className="w-70 h-32 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">MKS126-01-0001</h3>
              <p className="text-sm text-gray-600 mb-3">
                Quvvat... qo'shimcha ma'lumotlar
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">Ko'rish</button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
                 <TfiShoppingCartFull />
                </button>
              </div>
            </div>
          </div>
              



                {/* Mahsulot 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <img 
                src="/img/US14.png" 
                alt="MKS126-01-0001" 
                className="w-70 h-32 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">MKS126-01-0001</h3>
              <p className="text-sm text-gray-600 mb-3">
                Quvvat... qo'shimcha ma'lumotlar
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">Ko'rish</button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
                 <TfiShoppingCartFull />
                </button>
              </div>
            </div>
          </div>


            {/* Mahsulot 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <img 
                src="/img/US15.png" 
                alt="MKS126-01-0001" 
                className="w-70 h-32 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">MKS126-01-0001</h3>
              <p className="text-sm text-gray-600 mb-3">
                Quvvat... qo'shimcha ma'lumotlar
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">Ko'rish</button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
                 <TfiShoppingCartFull />
                </button>
              </div>
            </div>
          </div>

          {/* Mahsulot 4 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <img 
                src="/img/US16.png" 
                alt="MKS127-01-0001" 
                className="w-70 h-32 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-1">MKS127-01-0001</h3>
              <p className="text-sm text-gray-600 mb-3">
                Kabel... qo'shimcha ma'lumotlar
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">Ko'rish</button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition">
                 <TfiShoppingCartFull />
                </button>
              </div>
            </div>
          </div>

          {/* Boshqa mahsulotlar uchun 16 ta element qo'shishingiz mumkin... */}
        </div>

        {/* Pastki qism */}
        <div className="mt-12 text-center">
          <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition">
            Barcha mahsulotlarni ko'rish
          </button>
        </div>
      </div>
    </div>
    </>
  );
}