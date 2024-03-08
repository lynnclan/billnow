import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className="hidden fixed lg:flex flex-col items-start justify-between h-screen w-64 bg-slate-900 p-4">
        {/* Shop Advertisement Section */}
        <div className="mb-4 p-4 bg-yellow-200 rounded-lg">
        <h2 className="text-pink-700 text-lg font-semibold mb-1">
    Website advertisement
  </h2>
          {/* Shop Image
          <img src="/your-shop-logo.png" alt="Shop Logo" className="w-full h-auto mb-2 rounded-lg" />
          {/* Shop Name */}
          {/* <h2 className="text-gray-900 text-lg font-semibold mb-1">Shop Name</h2> */}
          {/* Shop Link */}
          {/* <a href="https://your-shop-website.com" className="text-blue-600 hover:underline mb-2" target="_blank" rel="noopener noreferrer">Visit Website</a> */}
          {/* Shop Specialty */}
          {/* <p className="text-gray-800">{`Specialty: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis eget quam tincidunt dignissim. In hac habitasse platea dictumst.`}</p> */}
        </div> 

        <Button variant="secondary">Welcome</Button>

        <ul className="space-y-4">
          <li>
            <Button variant="customOutline">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </li>
          <li>
            {/* <Button variant="customOutline">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </Button> */}
          </li>
        </ul>

        <p className="text-slate-400 text-xs">&copy; Bill V2 2024</p>
      </div>
    </>
  );
}
