import React from 'react';

import Billinginfo from '../components/Billinginfo';
import OrderSummary from '../components/OrderSummary';
import Checkout from '../components/Checkout';

export default function CheckoutPage() {
    return (
        <div className="min-h-screen bg-[#F4F4F5] px-4 py-8 font-sans sm:px-6 lg:px-8">

            <div className="mx-auto max-w-[1200px] flex flex-col">

                <div className="flex items-center">
                    <button className="flex items-center gap-2 px-6 text-sm font-medium text-gray-500 transition-colors hover:text-gray-700">
                        
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to plans
                    </button>
                </div>

  
                <div className="flex flex-col items-start lg:flex-row">

                    <div className="w-full flex-1">
                        <Billinginfo />
                    </div>

                    <div className="flex w-full shrink-0 flex-col gap-3 lg:w-[420px] py-3">
                        <OrderSummary />
                        <Checkout />
                    </div>

                </div>

            </div>
        </div>
    );
}