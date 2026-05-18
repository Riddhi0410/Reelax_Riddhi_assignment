import React from 'react';

export default function OrderSummary() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md rounded-lg border border-gray-100 bg-white p-8 font-sans shadow-[0_2px_12px_rgba(0,0,0,0.04)] ">

      <h2 className="text-[24px] font-bold text-[#111827]">
        Order Summary
      </h2>

      <div className="flex flex-col justify-between gap-4 rounded-[1px] border border-blue-200 bg-white p-5 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-extrabold tracking-tight text-[#111827]">
              ₹4,999
            </span>
            <span className="text-sm font-semibold text-gray-500">
              /month
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-gray-500">
            Includes 5,000 credits/mo.
          </p>
        </div>

        <div className="flex flex-col">
          <span className="mb-0.5 text-[11px] font-bold uppercase tracking-wider text-blue-600">
            Selected Plan
          </span>
          <span className="text-xl font-bold text-[#0F172A]">
            Startup
          </span>
        </div>

      </div>

      <button className="flex w-full items-center justify-center gap-2 rounded-full border border-blue-200 bg-[#FAFAFC] py-2.5 text-sm font-bold text-blue-600 transition-colors hover:bg-blue-50">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m16 12-4-4-4 4" />
          <path d="M12 16V8" />
        </svg>
        Upgrade to Growth Plan
      </button>

    </div>
  );
}