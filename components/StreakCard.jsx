import React from "react";

export default function StreakCard() {
  const currentStreak = 26;
  const maxStreak = 30; // used to calculate circle progress
  const percentage = (currentStreak / maxStreak) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl rounded-xl border border-gray-700 bg-gradient-to-br from-[#0b0f14] to-[#111827] shadow-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center text-gray-300">

          {/* Left */}
          <div>
            <div className="text-4xl font-bold text-white">596</div>
            <div className="mt-2 text-sm tracking-wide text-gray-400">
              Total Contributions
            </div>
            <div className="mt-1 text-xs text-gray-500">
              Feb 26, 2025 – Present
            </div>
          </div>

          {/* Center */}
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32">
              {/* Background Circle */}
              <svg className="absolute inset-0 w-full h-full">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#1f2937"
                  strokeWidth="8"
                  fill="none"
                />
                {/* Progress Circle */}
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#f59e0b"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 56}
                  strokeDashoffset={
                    2 * Math.PI * 56 * (1 - percentage / 100)
                  }
                  className="transition-all duration-700"
                />
              </svg>

              {/* Fire Icon */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-yellow-400 text-xl drop-shadow-lg">
                🔥
              </div>

              {/* Number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-yellow-400">
                  {currentStreak}
                </span>
              </div>
            </div>

            <div className="mt-4 text-yellow-400 font-medium">
              Current Streak
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Jan 7, 2026 – Feb 1
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="text-4xl font-bold text-white">26</div>
            <div className="mt-2 text-sm tracking-wide text-gray-400">
              Longest Streak
            </div>
            <div className="mt-1 text-xs text-gray-500">
              Jan 7, 2026 – Feb 1
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
