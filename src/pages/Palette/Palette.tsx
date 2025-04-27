import React from "react";
import Palette from "components/Palette";

/**
 * PalettePage – standalone page that displays the Neo‑Teal palette.
 * Adjust the import path if you use a different alias or relative paths.
 */
const PalettePage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="min-h-screen bg-surface-100 dark:bg-surface-800 p-8 flex flex-col gap-8">
        <header>
          <h1 className="text-3xl font-bold text-cyan-800 dark:text-teal-300">
            Color Palette
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-lg">
            Esta página muestra la paleta Neo‑Teal utilizada por AgentsGT
            Lisa AI. Úsala como referencia de diseño y verifica todas las
            variantes de color.
          </p>
        </header>

        <Palette />
      </section>
    </div>
  );
};

export default PalettePage;
