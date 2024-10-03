import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Rucalc() {
  const [diameter, setDiameter] = useState(null);
  const [tebal, setTebal] = useState(null);
  const [penetrasi, setPenetrasi] = useState(null);
  const [beratHammer, setBeratHammer] = useState(null);
  const [kedalaman, setKedalaman] = useState(null);
  const [kAverage, setKAverage] = useState(null); 
  const [h, setH] = useState(null); 
  const [qu, setQu] = useState(null);

  // Cek jika nilai state tidak null
  const lp = diameter && tebal ? 0.25 * Math.PI * (diameter ** 2 - ((diameter - 2 * tebal) ** 2)) : 0;
  const bt = kedalaman ? 2.4 * kedalaman * lp : 0;

  const handleCalculate = () => {
    if (diameter === null || tebal === null || penetrasi === null || beratHammer === null || kedalaman === null || kAverage === null || h === null) {
      alert('Harap lengkapi semua input!');
      return;
    }

    const quResult =
      ((2 * beratHammer * h) / ((penetrasi / 1000) + kAverage / 100)) * // Menggunakan k average
      ((beratHammer + 0.25 ** 2 * bt) / (beratHammer + bt));

    setQu(quResult);
  };

  const qa = qu !== null ? qu / 2.5 : null;

  return (
    <div className="relative">
      <Link
        to="/"
        className="absolute top-14 left-1 bg-white border-2 border-black rounded-full p-2 shadow-md duration-300 lg:top-10 lg:left-4 hover:bg-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </Link>
      <h1 className="text-center text-3xl font-bold mb-8 mt-6">
        Perhitungan Kapasitas <br />
        Tiang Izin (Qa)
      </h1>
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        <label className="text-right">Diameter Tiang (m): </label>
        <input
          type="number"
          value={diameter ?? ''}
          onChange={(e) => setDiameter(parseFloat(e.target.value))}
          className="border rounded px-2 py-1"
        />
        <label className="text-right">Tebal Tiang (m): </label>
        <input
          type="number"
          value={tebal ?? ''}
          onChange={(e) => setTebal(parseFloat(e.target.value))}
          className="border rounded px-2 py-1"
        />
        <label className="text-right">Penetrasi (S) (mm): </label>
        <input
          type="number"
          value={penetrasi ?? ''}
          onChange={(e) => setPenetrasi(parseFloat(e.target.value))}
          className="border rounded px-2 py-1"
        />
        <label className="text-right">Berat Hammer (Ton): </label>
        <input
          type="number"
          value={beratHammer ?? ''}
          onChange={(e) => setBeratHammer(parseFloat(e.target.value))}
          className="border rounded px-2 py-1"
        />
        <label className="text-right">Kedalaman (m): </label>
        <input
          type="number"
          value={kedalaman ?? ''}
          onChange={(e) => setKedalaman(parseFloat(e.target.value))}
          className="border rounded px-2 py-1"
        />
        <label className="text-right">k (cm): </label>
        <input
          type="number"
          value={kAverage ?? ''}
          onChange={(e) => setKAverage(parseFloat(e.target.value))}
          className="border rounded px-2 py-1"
        />
        <label className="text-right">Tinggi Jatuh Pemukul (m): </label>
        <input
          type="number"
          value={h ?? ''}
          onChange={(e) => setH(parseFloat(e.target.value))}
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="flex gap-8 justify-center mt-6">
        <button
          onClick={handleCalculate}
          className="bg-white border-2 border-r-4 border-b-4 rounded-lg border-black text-black w-auto px-4 py-2"
        >
          Hitung Qa
        </button>
        <Link to="/rurumus" className="">
          <button className="bg-white border-2 border-r-4 border-b-4 rounded-lg border-black text-black w-auto px-4 py-2">
            Lihat Rumus
          </button>
        </Link>
      </div>
      <div className="mt-6 flex justify-center">
        <p className="text-center text-2xl font-bold bg-white center border-2 border-r-4 border-b-4 rounded-lg border-black inline-block px-4 py-2">
          (Metode Wijaya Karya)
          <br />
          {qa !== null ? qa.toFixed(2) : 'Belum dihitung'} Ton
        </p>
      </div>
    </div>
  );
}
