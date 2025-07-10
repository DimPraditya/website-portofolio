"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Kopi Titik jadi teman setia saya setiap pagi setelah mengantar anak sekolah. Rasanya pas, nggak bikin perut perih, dan selalu fresh. Favorit saya yang kopi susu klasik!",
    name: "Rina Kartika",
    title: "Ibu Rumah Tangga",
  },
  {
    quote:
      "Suka banget sama konsep ‘made to order’-nya Kopi Titik. Bikin kopi terasa lebih personal dan segar. Cocok banget buat nemenin kerja seharian di depan laptop.",
    name: "Dimas Prasetyo",
    title: "Karyawan Kantoran",
  },
  {
    quote: "Harga bersahabat, rasa nggak kalah sama brand besar. Kopi Titik tuh pilihan tepat buat anak kuliahan kayak aku yang pengen kopi enak tapi tetap hemat.",
    name: " Ayu Lestari",
    title: "Mahasiswi",
  },
  {
    quote:
      "Kalau lagi nunggu orderan, saya suka mampir ke Kopi Titik. Tempatnya nyaman, kopinya mantap, dan yang paling penting cepat disajikan. Pas banget buat saya yang sering buru-buru.",
    name: "Hendra Saputra",
    title: "Driver Ojek Online",
  },
  {
    quote:
      "Sebagai pekerja remote, saya butuh tempat yang tenang dengan kopi yang enak. Kopi Titik selalu jadi pilihan karena konsistensi rasa dan pelayanannya yang ramah.",
    name: "Melati Anggraini",
    title: "Freelancer Desain Grafis",
  },
];
