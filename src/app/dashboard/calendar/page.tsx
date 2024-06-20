"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  return (
    <div className="flex-col sm:flex sm:flex-wrap sm:flex-row gap-4">
      {/* Disable = Desabilitar los días de la semana */}
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      {/* Disable = Desabilitar los días despúes del día actual */}
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date > new Date()}
      />
      {/* Seleccionar y mostrar multipes fechas */}
      <Calendar
        mode="multiple"
        selected={multipleDate}
        onSelect={setMultipleDate}
        className="rounded-md border"
      />

      <div>
        <h1 className="text-3xl">Información</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        <p>
          {multipleDate?.map((date) => date.toLocaleDateString()).join(", ")}
        </p>
      </div>
    </div>
  );
}
