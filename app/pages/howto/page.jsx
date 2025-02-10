"use client";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

export default function HowToUse() {
  const { toast } = useToast();

  return (
    <div className="bg-gray-100 px-4 py-12">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-amber-400 mb-8">
          How to Use?
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Step 1: Find the Required File
        </h2>
        <p className="text-gray-600 mb-4">
          Browse through our collection of study materials. Find the file that
          matches your requirements.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Step 2: Click on the File
        </h2>
        <p className="text-gray-600 mb-4">
          Click on the file you need. This will redirect you to a drive folder
          where you can access the document.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Step 3: Share with Classmates
        </h2>
        <p className="text-gray-600 mb-4">
          Once you've accessed the file, share it with your classmates for easy
          collaboration and study.
        </p>
        <div className="mt-6">
          <Link href="/">
            <button className="w-full py-2 bg-amber-400 text-white font-semibold rounded-lg shadow-md hover:bg-amber-500 transition">
              Start Exploring Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
