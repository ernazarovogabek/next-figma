



"use client";

import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import { BiBox } from "react-icons/bi";
import { GrDocument } from "react-icons/gr";

export default function Home() {
  // Misol ma'lumotlar (real loyihada API dan olinadi)
  const products = [
    { id: 1, image: "/img/GR1.png", type: "Materiallar", code: "#010101-0002", description: "Lorem ipsum dolor sit amet...", price: 500000, weight: 5000, date: "25.01.2023 10:44" },
    { id: 2, image: "/img/GR2.png", type: "Materiallar", code: "#010101-0002", description: "Lorem ipsum dolor sit amet...", price: 550000, weight: 15000, date: "20.01.2023 11:45" },
    { id: 3, image: "/img/GR3.png", type: "Materiallar", code: "#010101-0002", description: "Lorem ipsum dolor sit amet...", price: 500000, weight: 5000, date: "25.01.2023 10:44" },
    { id: 4, image: "/img/GR4.png", type: "Materiallar", code: "#010101-0002", description: "Lorem ipsum dolor sit amet...", price: 550000, weight: 15000, date: "20.01.2023 11:45" },
    { id: 5, image: "/img/GR5.png", type: "Materiallar", code: "#010101-0002", description: "Lorem ipsum dolor sit amet...", price: 500000, weight: 5000, date: "25.01.2023 10:44" },
    { id: 6, image: "/img/GR6.png", type: "Materiallar", code: "#010101-0002", description: "Lorem ipsum dolor sit amet...", price: 550000, weight: 15000, date: "20.01.2023 11:45" },
     { id: 7, image: "/img/GR7.png", type: "Materiallar", code: "#010101-0002", description: "Lorem ipsum dolor sit amet...", price: 550000, weight: 15000, date: "20.01.2023 11:45" },
    { id: 8, image: "/img/GR8.png", type: "Materiallar", code: "#010101-0002", description: "Lorem ipsum dolor sit amet...", price: 500000, weight: 5000, date: "25.01.2023 10:44" },
    { id: 9, image: "/img/GR9.png", type: "Materiallar", code: "#010101-0002", description: "Lorem ipsum dolor sit amet...", price: 550000, weight: 15000, date: "20.01.2023 11:45" },
    { id: 10, image: "/img/GR10.png", type: "Materiallar", code: "#010101-0002", description: "Lorem ipsum dolor sit amet...", price: 500000, weight: 5000, date: "25.01.2023 10:44" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Logo va kompaniya nomi */}
          <div className="flex items-center gap-3">
            <Image
              src="/img/GR.png"
              alt="Qurilish kompaniyasi"
              width={150}
              height={75}
              className="rounded"
            />
            <div>
              <h1 className="text-lg md:text-xl font-bold">"QIZILOUMEMENT" aktsiyadorlik jamiyati</h1>
              <p className="text-sm text-gray-600">2548 ta mavjud</p>
            </div>
          </div>

          {/* Rahbar ma'lumotlari */}
          <div className="text-left md:text-right text-sm space-y-1">
            <p><span className="font-semibold">Rahbar:</span> Mavlonov Sergey Nikolayevich</p>
            <p><span className="font-semibold">Email:</span> 79-2236490</p>
            <p><span className="font-semibold">Telefon:</span> 79-2236490</p>
            <p><span className="font-semibold">Manzil:</span> Navoiy viloyati, Navoiy sh., Navoiy ko'chasi, 3-uy</p>
          </div>

          {/* Map */}
          <div className="mt-4 md:mt-0">
            <Image
              src="/img/MAP.png"
              alt="Kompaniya joylashuvi"
              width={250}
              height={120}
              className="rounded-lg"
            />
          </div>
        </div>
      </header>

      {/* Mahsulotlar jadvali */}
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">KORXONANING BARCHA TAKLIFLARI</h2>

        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rasm</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resurs turi</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kodi</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E'lon tavsifi</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sertifikat</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Narxi (so'm)</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Miqdori, kg</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joylangan vaqt</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 text-sm font-medium text-gray-900">{product.id}</td>
                  <td className="px-3 py-2">
                    <Image
                      src={product.image}
                      alt={`Mahsulot ${product.id}`}
                      width={50}
                      height={50}
                      className="rounded object-cover"
                    />
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-500">{product.type}</td>
                  <td className="px-3 py-2 text-sm text-gray-500">{product.code}</td>
                  <td className="px-3 py-2 text-sm text-gray-500">{product.description}</td>
                  <td className="px-3 py-2 text-sm">
                    <GrDocument className="text-gray-700" />
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-500">{product.price.toLocaleString()} so'm</td>
                  <td className="px-3 py-2 text-sm text-gray-500">{product.weight} kg</td>
                  <td className="px-3 py-2 text-sm text-gray-500">{product.date}</td>
                  <td className="px-3 py-2 text-sm font-medium">
                    <div className="flex space-x-2 text-lg">
                      <BiBox className="text-gray-700" />
                      <CiBookmark className="text-gray-700" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Sahifalash */}
          <div className="bg-gray-50 px-3 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
            <span className="text-sm text-gray-700">
              Barcha 2548 ta elementdan 1-10 tasini ko'rsatish
            </span>
           
          </div>
        </div>
      </main>
    </div>
  );
}
