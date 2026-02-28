'use client'

import { useState } from 'react'

export default function RoomFilters({ onFilterChange }: { onFilterChange: (filters: any) => void }) {
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [capacity, setCapacity] = useState(1)

  const handleApply = () => {
    onFilterChange({ minPrice: priceRange[0], maxPrice: priceRange[1], capacity })
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-lg font-semibold">Filtrele</h3>
      
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">Fiyat Aralığı</label>
        <input
          type="range"
          min="0"
          max="10000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
          className="w-full"
        />
        <p className="mt-2 text-sm text-gray-600">0 - {priceRange[1]} TRY</p>
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">Kapasite</label>
        <select
          value={capacity}
          onChange={(e) => setCapacity(parseInt(e.target.value))}
          className="w-full rounded-lg border p-2"
        >
          <option value="1">1 Kişi</option>
          <option value="2">2 Kişi</option>
          <option value="3">3 Kişi</option>
          <option value="4">4+ Kişi</option>
        </select>
      </div>

      <button onClick={handleApply} className="btn-primary w-full">
        Uygula
      </button>
    </div>
  )
}
