import React, { useState } from 'react';

const AVAILABLE_COUPONS = [
  {
    id: 'WELCOME20',
    title: 'WELCOME20',
    description: '20% off on your first month',
  },
  {
    id: 'ANNUAL50',
    title: 'ANNUAL50',
    description: '50% off on annual plans',
  },
];

export default function CheckoutSummary() {
  const [selectedCouponId, setSelectedCouponId] =
    useState('WELCOME20');

  return (
    <div className="w-full max-w-[420px] rounded-lg border border-gray-100 bg-white p-8 pt-4 font-sans shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

      <div className="flex flex-col gap-4">

  
        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F9FF] text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900">
                Wallet Balance
              </span>

              <span className="text-[13px] font-medium text-gray-500">
                ₹500.00 available
              </span>
            </div>

          </div>

          <button className="rounded-md border border-blue-200 bg-white px-4 py-1.5 text-sm font-bold text-blue-600 transition-colors hover:bg-blue-50">
            Apply
          </button>

        </div>

        <div className="rounded-lg border border-gray-200 bg-white pt-3">

          <button className="flex w-full items-center justify-between p-4">

            <div className="flex items-center gap-3 text-gray-900">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                <path d="M7 7h.01" />
              </svg>

              <span className="text-sm font-bold">
                Apply Coupon
              </span>

            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>

          </button>

          <div className="border-t border-gray-100 p-4">

            <div className="mb-4 flex gap-2">

              <input
                type="text"
                placeholder="Enter coupon code"
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />

              <button className="rounded-md border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-600 transition-colors hover:bg-blue-50">
                Apply
              </button>

            </div>

            <div className="flex flex-col gap-3">

              {AVAILABLE_COUPONS.map((coupon) => {
                const isSelected =
                  selectedCouponId === coupon.id;

                return (
                  <div
                    key={coupon.id}
                    onClick={() =>
                      setSelectedCouponId(coupon.id)
                    }
                    className={`flex cursor-pointer items-center justify-between rounded-lg p-3 transition-colors ${
                      isSelected
                        ? 'border-2 border-blue-500'
                        : 'border border-gray-200 hover:border-gray-300'
                    }`}
                  >

                    <div className="flex items-baseline gap-2">

                      <span className="text-sm font-bold text-[#111827]">
                        {coupon.title}
                      </span>

                      <span className="text-[11px] text-gray-500">
                        {coupon.description}
                      </span>

                    </div>

                    <div
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white transition-all ${
                        isSelected
                          ? 'border-[5px] border-blue-600'
                          : 'border-2 border-blue-400'
                      }`}
                    ></div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        <div className="flex flex-col gap-3">

          <div className="flex items-center justify-between">

            <span className="text-sm font-semibold text-gray-500">
              Subtotal
            </span>

            <span className="text-sm font-semibold text-black">
              ₹14,999.00
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-sm font-semibold text-gray-500">
              Tax (18% GST)
            </span>

            <span className="text-sm font-semibold text-black">
              ₹1,079.64
            </span>

          </div>

        </div>

 
        <div className="border-t border-gray-100 pt-5">

          <div className="mb-6 flex items-center justify-between">

            <span className="text-lg font-bold text-gray-900">
              Total due today
            </span>

            <span className="text-2xl font-extrabold text-[#1977F2]"> 
              16,078.64
            </span>

          </div>

          <button className="w-full rounded-lg bg-[#2563EB] py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-700">
            Proceed to Payment
          </button>

        </div>

      </div>

    </div>
  );
}