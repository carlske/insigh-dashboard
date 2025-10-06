"use client";
import React from "react";

export default function ChartSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="h-8 bg-slate-200 rounded-lg w-64 animate-pulse"></div>
            <div className="flex gap-2">
              <div className="h-9 bg-slate-200 rounded-lg w-16 animate-pulse"></div>
              <div className="h-9 bg-slate-200 rounded-lg w-16 animate-pulse"></div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-6">
            <div className="flex justify-center items-end h-80 space-x-2">
              <div className="bg-slate-200 rounded-t w-12 h-32 animate-pulse"></div>
              <div className="bg-slate-200 rounded-t w-12 h-48 animate-pulse"></div>
              <div className="bg-slate-200 rounded-t w-12 h-20 animate-pulse"></div>
              <div className="bg-slate-200 rounded-t w-12 h-40 animate-pulse"></div>
              <div className="bg-slate-200 rounded-t w-12 h-60 animate-pulse"></div>
              <div className="bg-slate-200 rounded-t w-12 h-28 animate-pulse"></div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="h-6 bg-slate-200 rounded-lg w-48 animate-pulse"></div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-4 border-l-4 border-slate-200"
              >
                <div className="h-4 bg-slate-200 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-8 bg-slate-200 rounded w-1/2 mb-2 animate-pulse"></div>
                <div className="h-3 bg-slate-200 rounded w-1/4 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
