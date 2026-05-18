import React from 'react';

export default function BillingForm() {
  return (
    <div className="min-h-screen bg-[#F4F4F5] px-6 py-3 font-sans">


      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-sm">

        <div className="mb-8">
          <h1 className="mb-5 text-2xl font-semibold text-[#111827]">Review your details</h1>
          <h2 className="text-xl font-bold text-[#374151]">Billing Information</h2>
        </div>

        <form>
          <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2">

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#353535]">Company Name</label>
              <input
                type="text"
                defaultValue="abhigyan"
                readOnly
                className="w-full rounded-md border border-gray-100 bg-[#F8FAFC] px-4 py-2.5 text-sm text-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

           
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#353535]">Email</label>
              <input
                type="email"
                defaultValue="abhigyan.pandey@getreelax.com"
                readOnly
                className="w-full rounded-md border border-gray-100 bg-[#F8FAFC] px-4 py-2.5 text-sm text-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#353535]">
                GST Number <span className="font-normal text-gray-400">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="GST Number"
                className="w-full rounded-md border border-gray-100 bg-[#F8FAFC] px-4 py-2.5 text-sm text-gray-400 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#353535]">
                PAN Number <span className="font-normal text-gray-400">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="PAN Number"
                className="w-full rounded-md border border-gray-100 bg-[#F8FAFC] px-4 py-2.5 text-sm text-gray-400 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#353535]">Premise/House no.</label>
              <input
                type="text"
                placeholder="Premise/House no."
                className="w-full rounded-md border border-gray-100 bg-[#F8FAFC] px-4 py-2.5 text-sm text-gray-400 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#353535]">Street</label>
              <input
                type="text"
                placeholder="Street"
                className="w-full rounded-md border border-gray-100 bg-[#F8FAFC] px-4 py-2.5 text-sm text-gray-400 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#353535]">State</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-md border border-gray-100 bg-[#F8FAFC] px-4 py-2.5 text-sm text-gray-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer">
                  <option value="" disabled selected>Select state</option>
                  <option value="delhi">Delhi</option>                          // just added few options for display purpose, ideally this should be a complete list of states in India
                  <option value="maharashtra">Maharashtra</option>
                  <option value="karnataka">Karnataka</option>
                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </div>
            </div>


            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">City</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-md border border-gray-100 bg-[#F8FAFC] px-4 py-2.5 text-sm text-gray-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer">
                  <option value="" disabled selected>Select city</option>
                  <option value="new-delhi">New Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                </select>
 
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Country</label>
              <input
                type="text"
                defaultValue="India"
                readOnly
                className="w-full rounded-md border border-gray-100 bg-[#F8FAFC] px-4 py-2.5 text-sm text-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Pin Code</label>
              <input
                type="text"
                placeholder="Pincode"
                className="w-full rounded-md border border-gray-100 bg-[#F8FAFC] px-4 py-2.5 text-sm text-gray-600 placeholder:text-gray-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>


          <hr className="my-8  border-gray-200" />

          <div className="flex items-center justify-end gap-4 pb-5.5">
            <button 
              type="button" 
              className="rounded-md border border-gray-200 px-6 py-2.5 text-sm font-bold text-gray-800 transition-colors hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="rounded-md bg-[#2563EB] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-700"
            >
              Save Details
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
}