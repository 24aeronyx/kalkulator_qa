import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Qucalc() {
  const [diameter, setDiameter] = useState(null);
  const [tebal, setTebal] = useState(null);
  const [penetrasi, setPenetrasi] = useState(null);
  const [beratHammer, setBeratHammer] = useState(null);
  const [kedalaman, setKedalaman] = useState(null);
  const [qu, setQu] = useState(null);


  // Nilai konstanta
  const h = 2.5;
  const n = 0.5;
  const k1 = 0.006;
  const k3 = 0.005;
  const mutuBeton = 52; // dalam kg/m2
  const ef = 0.9;
  const pua = 162;
  const e = 4700 * mutuBeton ** 0.5 * 10;
  const lp = 0.25 * Math.PI * (diameter ** 2 - ((diameter - 2 * tebal) ** 2));
  const bt = 2.4 * kedalaman * lp;

  const handleCalculate = () => {
    if (diameter === null || tebal === null || penetrasi === null || beratHammer === null || kedalaman === null) {
      alert('Harap lengkapi semua input!');
      return;
    }

    const e = 4700 * mutuBeton ** 0.5 * 10;
    const lp = 0.25 * Math.PI * (diameter ** 2 - ((diameter - 2 * tebal) ** 2));
    const bt = 2.4 * kedalaman * lp;

    const quResult =
      ((ef * beratHammer * h) /
        ((penetrasi / 1000) + ((1 / 2) * (k1 + ((pua * kedalaman) / e) + k3)))) *
      ((beratHammer + n ** 2 * bt) / (beratHammer + bt));

    setQu(quResult);
  };

  const qa = qu / 2.5

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
      </div>
      <div className="flex gap-8 justify-center mt-6">
        <button
          onClick={handleCalculate}
          className="bg-white border-2 border-r-4 border-b-4 rounded-lg border-black text-black w-auto px-4 py-2"
        >
          Hitung Qa
        </button>
        <Link to="/qurumus" className="">
          <button className="bg-white border-2 border-r-4 border-b-4 rounded-lg border-black text-black w-auto px-4 py-2">
            Lihat Rumus
          </button></Link>
      </div>
      <div className="mt-6">
        <p className="text-center text-2xl font-bold ">
          Qa (Kapasitas Tiang Izin)
          <br />
          {qa !== null ? qa.toFixed(2) : 'Belum dihitung'} Ton
        </p>
      </div>
    </div>
  );
}
