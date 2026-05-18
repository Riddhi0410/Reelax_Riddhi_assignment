import { useState } from "react";
import { Plus, User, Menu } from "lucide-react";
import { IoDiamondOutline, IoSearchOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200  shadow-sm bg-[#f1f3f9]">
            <div className="flex items-center justify-between gap-4 px-6 py-2.5">

                <div className="flex flex-1 max-w-md items-center gap-2 rounded-sm border border-gray-200 bg-gray-50 px-3 py-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-200">

                    <input
                        type="text"
                        placeholder="Find influencers to collaborate with"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="w-full border-none bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                    />
                    <IoSearchOutline size={17} className="text-gray-700" />
                </div>

                <div className="flex items-center gap-3">

                    <button className="flex h-10 items-center justify-center gap-1.5 rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-500">
                        <IoDiamondOutline size={18} className="mt-[px]" />
                        <span className="leading-none">Upgrade</span>
                    </button>

                    <button className="flex h-10 items-center gap-1.5 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600">
                        <Plus size={18} />
                        Create Campaign
                    </button>

                    <div className="flex p-0.5 items-center gap-1 rounded-full bg-white">
                        <button className="flex h-9 w-9 items-center justify-center rounded-full border-none">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <clipPath id="circle-clip">
                                        <circle cx="20" cy="19" r="17" />
                                    </clipPath>
                                </defs>
                                <circle cx="20" cy="19" r="17" fill="#A5BEFA" />
                                <g clip-path="url(#circle-clip)">
                                    <circle cx="20" cy="16" r="6" fill="#4B73D7" />
                                    <path
                                        d="M8 35C8 27.5 13.5 24 20 24C26.5 24 32 27.5 32 35H8Z"
                                        fill="#4B73D7"
                                    />
                                </g>
                            </svg>

                        </button>

                        <button className="rounded p-1 transition-colors hover:bg-gray-100">
                            <RxHamburgerMenu size={20} className="text-gray-800" />
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;