"use client";
import React from "react";

export default function BackButton() {
  return (
    <div className="border-t border-gray-200 pt-8 mt-8">
      <a
        href="#"
        onClick={() => window.history.back()}
        className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
      >
        ← Voltar
      </a>
    </div>
  );
}
