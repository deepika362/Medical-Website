import { useState } from "react";
import { Eye, RefreshCw } from "lucide-react";

export default function StudentLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [captchaText] = useState("YN4JB");

  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 py-8">
        <h1 className="text-3xl text-center text-sky-400 font-medium mb-8">
          Student Login
        </h1>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="block text-gray-600">User ID</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <Eye className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-gray-600">Captcha</label>
              <div className="border rounded-lg p-2 bg-gray-50">
                <div className="grid grid-cols-6 gap-0.5">
                  {Array(30)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="w-full h-2 border-t border-gray-200"
                      />
                    ))}
                </div>
                <div className="text-center font-bold tracking-wider">
                  {captchaText}
                </div>
                <div className="grid grid-cols-6 gap-0.5">
                  {Array(30)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="w-full h-2 border-t border-gray-200"
                      />
                    ))}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-gray-600">Enter Captcha</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                <button type="button" className="p-3">
                  <RefreshCw className="w-5 h-5 text-sky-400" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <button
              type="submit"
              className="w-full py-3 bg-sky-400 text-white rounded-lg hover:bg-green-300 transition-colors"
            >
              Sign In
            </button>
            <button
              type="reset"
              className="w-full py-3 bg-amber-600 text-white rounded-lg hover:bg-red-300 transition-colors"
            >
              Reset
            </button>
          </div>

          <div className="text-center pt-4">
            <a href="#" className="text-sky-400 hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
