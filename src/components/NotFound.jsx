import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <h1 className="text-9xl font-extrabold tracking-widest">
        404
      </h1>
      <div className="bg-red-600 px-2 py-1 text-sm rounded rotate-12 absolute text-white mt-2">
        صفحه‌ای پیدا نشد
      </div>
      <div className="mt-16 text-center">
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          متاسفانه صفحه‌ای که شما دنبالش می‌گردید وجود ندارد
        </p>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          ممکن است این صفحه پاک شده باشد یا آدرس آن تغییر کرده باشد
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-lg font-medium rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
