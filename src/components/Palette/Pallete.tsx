import React from "react";

export default function Pallete() {
  return (
    <section className="space-y-12 p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Brand
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-primary p-6 rounded shadow flex flex-col items-center">
            <span className="text-white font-bold">primary</span>
            <span className="text-xs text-white/80">#004E64</span>
          </div>
          <div className="bg-secondary p-6 rounded shadow flex flex-col items-center">
            <span className="text-white font-bold">secondary</span>
            <span className="text-xs text-white/80">#AEC3B0</span>
          </div>
        </div>
      </div>

      {/* Semantic States */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          States
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          <div className="bg-success p-6 rounded shadow flex flex-col items-center">
            <span className="text-white font-bold">success</span>
            <span className="text-xs text-white/80">#22C55E</span>
          </div>
          <div className="bg-warning p-6 rounded shadow flex flex-col items-center">
            <span className="text-white font-bold">warning</span>
            <span className="text-xs text-white/80">#EAB308</span>
          </div>
          <div className="bg-error p-6 rounded shadow flex flex-col items-center">
            <span className="text-white font-bold">error</span>
            <span className="text-xs text-white/80">#DC2626</span>
          </div>
        </div>
      </div>

      {/* Surfaces */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Surface
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-light p-6 rounded shadow flex flex-col items-center">
            <span className="text-gray-900 font-bold">surface.light</span>
            <span className="text-xs text-gray-700">#F9FAFB</span>
          </div>
          <div className="bg-surface-dark p-6 rounded shadow flex flex-col items-center">
            <span className="text-white font-bold">surface.dark</span>
            <span className="text-xs text-white/80">#1E293B</span>
          </div>
        </div>
      </div>
    </section>
  );
}
