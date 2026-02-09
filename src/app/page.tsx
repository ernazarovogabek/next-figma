



'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, Info, Bookmark } from 'lucide-react';

interface ClassifierItem {
  id: string;
  code: string;
  name: string;
  resourceType: string;
  measureUnit: string;
  status: string;
  hasChildren?: boolean;
  level: number;
  group?: string;
}

// Mock data
const mockData: ClassifierItem[] = [
  { id: '1', code: '01.01.01-0001', name: 'Ferma qo\'shimcha', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '2', code: '01.01.01-0002', name: 'Ferma qo\'shimcha 2', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '3', code: '01.01.01-0003', name: 'Ferma qo\'shimcha 3', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '4', code: '01.01.01-0004', name: 'Ferma qo\'shimcha 4', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '5', code: '01.01.01-0005', name: 'Ferma qo\'shimcha 5', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '6', code: '01.01.01-0006', name: 'Ferma qo\'shimcha 6', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '7', code: '01.01.01-0007', name: 'Ferma qo\'shimcha 7', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '8', code: '01.01.01-0008', name: 'Ferma qo\'shimcha 8', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '9', code: '01.01.01-0009', name: 'Ferma qo\'shimcha 9', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '10', code: '01.01.01-0010', name: 'Ferma qo\'shimcha 10', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '11', code: '01.01.01-0011', name: 'Ferma qo\'shimcha 11', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '12', code: '01.01.01-0012', name: 'Ferma qo\'shimcha 12', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '13', code: '01.01.01-0013', name: 'Ferma qo\'shimcha 13', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '14', code: '01.01.01-0014', name: 'Ferma qo\'shimcha 14', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '15', code: '01.01.01-0015', name: 'Ferma qo\'shimcha 15', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '16', code: '01.01.01-0016', name: 'Ferma qo\'shimcha 16', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '17', code: '01.01.01-0017', name: 'Ferma qo\'shimcha 17', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '18', code: '01.01.01-0018', name: 'Ferma qo\'shimcha 18', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '19', code: '01.01.01-0019', name: 'Ferma qo\'shimcha 19', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '20', code: '01.01.01-0020', name: 'Ferma qo\'shimcha 20', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '21', code: '01.01.01-0021', name: 'Ferma qo\'shimcha 21', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '22', code: '01.01.01-0022', name: 'Ferma qo\'shimcha 22', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '23', code: '01.01.01-0023', name: 'Ferma qo\'shimcha 23', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '24', code: '01.01.01-0024', name: 'Ferma qo\'shimcha 24', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '25', code: '01.01.01-0025', name: 'Ferma qo\'shimcha 25', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '26', code: '01.01.01-0026', name: 'Ferma qo\'shimcha 26', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '27', code: '01.01.01-0027', name: 'Ferma qo\'shimcha 27', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '28', code: '01.01.01-0028', name: 'Ferma qo\'shimcha 28', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '29', code: '01.01.01-0029', name: 'Ferma qo\'shimcha 29', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
  { id: '30', code: '01.01.01-0030', name: 'Ferma qo\'shimcha 30', resourceType: 'Qurilish 01', measureUnit: '1', status: '10 yevro', level: 0, group: 'Klassifikator 01' },
];

// Takrorlanishlarni olib tashladim
const treeData = [
  { id: '1', label: 'Klassifikator 01 - Qurilish va ta\'mirlash materiallari', hasChildren: true, level: 0 },
  { id: '2', label: 'Klassifikator 02 - Betonlar, beton aralashmalari, Tuproqlar, Toshlar', hasChildren: true, level: 0 },
  { id: '3', label: 'Klassifikator 03 - Tuproq, Qum, Graviy', hasChildren: true, level: 0 },
  { id: '4', label: 'Klassifikator 04 - Metall konstruksiyalar', hasChildren: true, level: 0 },
  { id: '5', label: 'Klassifikator 05 - Yog\'och materiallar', hasChildren: true, level: 0 },
   { id: '1', label: 'Klassifikator 01 - Qurilish va ta\'mirlash materiallari', hasChildren: true, level: 0 },
  { id: '2', label: 'Klassifikator 02 - Betonlar, beton aralashmalari, Tuproqlar, Toshlar', hasChildren: true, level: 0 },
  { id: '3', label: 'Klassifikator 03 - Tuproq, Qum, Graviy', hasChildren: true, level: 0 },
  { id: '4', label: 'Klassifikator 04 - Metall konstruksiyalar', hasChildren: true, level: 0 },
  { id: '5', label: 'Klassifikator 05 - Yog\'och materiallar', hasChildren: true, level: 0 }, { id: '1', label: 'Klassifikator 01 - Qurilish va ta\'mirlash materiallari', hasChildren: true, level: 0 },
  { id: '2', label: 'Klassifikator 02 - Betonlar, beton aralashmalari, Tuproqlar, Toshlar', hasChildren: true, level: 0 },
  { id: '3', label: 'Klassifikator 03 - Tuproq, Qum, Graviy', hasChildren: true, level: 0 },
  { id: '4', label: 'Klassifikator 04 - Metall konstruksiyalar', hasChildren: true, level: 0 },
  { id: '5', label: 'Klassifikator 05 - Yog\'och materiallar', hasChildren: true, level: 0 }, { id: '1', label: 'Klassifikator 01 - Qurilish va ta\'mirlash materiallari', hasChildren: true, level: 0 },
  { id: '2', label: 'Klassifikator 02 - Betonlar, beton aralashmalari, Tuproqlar, Toshlar', hasChildren: true, level: 0 },
  { id: '3', label: 'Klassifikator 03 - Tuproq, Qum, Graviy', hasChildren: true, level: 0 },
  { id: '4', label: 'Klassifikator 04 - Metall konstruksiyalar', hasChildren: true, level: 0 },
  { id: '5', label: 'Klassifikator 05 - Yog\'och materiallar', hasChildren: true, level: 0 }, { id: '1', label: 'Klassifikator 01 - Qurilish va ta\'mirlash materiallari', hasChildren: true, level: 0 },
  { id: '2', label: 'Klassifikator 02 - Betonlar, beton aralashmalari, Tuproqlar, Toshlar', hasChildren: true, level: 0 },
  { id: '3', label: 'Klassifikator 03 - Tuproq, Qum, Graviy', hasChildren: true, level: 0 },
  { id: '4', label: 'Klassifikator 04 - Metall konstruksiyalar', hasChildren: true, level: 0 },
  { id: '5', label: 'Klassifikator 05 - Yog\'och materiallar', hasChildren: true, level: 0 },
];


export default function ConstructionClassifier() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [codeSearch, setCodeSearch] = useState('');
  
  // Filtrlash
  const filteredData = mockData.filter(item => 
    (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     item.resourceType.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (item.code.includes(codeSearch) || codeSearch === '')
  );

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (

    
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-center">
            QURILISH RESURSLARI KLASSIFIKATORI
          </h1>
          <p className="text-center mt-2 text-blue-100 text-sm">
            Klassifikatorning asosiy yozuvchisi
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow">
          {/* Sidebar and Table Container */}
          <div className="flex flex-col lg:flex-row">
            {/* Left Sidebar - Mobile first */}
            <div className="lg:w-64 border-b lg:border-b-0 lg:border-r bg-gray-50 p-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Qidiruv
                  </label>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Qidiruv so'zi kiriting"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Resurs kodi
                  </label>
                  <input
                    type="text"
                    value={codeSearch}
                    onChange={(e) => setCodeSearch(e.target.value)}
                    placeholder="Resurs kodi yozing"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Tree Navigation - Scroll olib tashlandi */}
                <div className="mt-6">
                  <div className="text-sm font-semibold text-gray-700 mb-3">
                    Klassifikatorlar
                  </div>
                  <div className="space-y-1">
                    {treeData.map((item) => (
                      <TreeItem
                        key={item.id}
                        item={item}
                        isExpanded={expandedItems.has(item.id)}
                        onToggle={() => toggleExpand(item.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Table - Barcha 30 ta element ko'rsatiladi */}
            <div className="flex-1 overflow-x-auto">
              <div className="min-w-[600px]">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                        №
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                        Resurs kodi
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                        Resurs nomi
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                        O'zlashtirilgan
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                        Xarit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredData.map((item, index) => (
                      <tr
                        key={item.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-4 py-3 text-sm font-medium text-blue-600 whitespace-nowrap">
                          {item.code}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {item.name}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                          {item.status}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                          {item.measureUnit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Elementlar soni ko'rsatiladi */}
                <div className="px-4 py-3 border-t bg-white text-sm text-gray-700">
                  Jami: {filteredData.length} ta element topildi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TreeItemProps {
  item: {
    id: string;
    label: string;
    hasChildren?: boolean;
    level: number;
  };
  isExpanded: boolean;
  onToggle: () => void;
}

function TreeItem({ item, isExpanded, onToggle }: TreeItemProps) {
  const paddingLeft = item.level * 16;

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-1.5 px-2 rounded w-full text-left transition-colors"
        style={{ paddingLeft }}
      >
        {item.hasChildren && (
          isExpanded ? (
            <ChevronDown className="w-4 h-4 flex-shrink-0 text-blue-600" />
          ) : (
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
          )
        )}
        <span>{item.label}</span>
      </button>
      
      {isExpanded && item.hasChildren && (
        <div className="ml-4 mt-1 border-l-2 border-gray-200 pl-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="text-xs text-gray-600 py-1 hover:text-blue-600 cursor-pointer"
            >
              {item.label} - Qo'shimcha {i}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}