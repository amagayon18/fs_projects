function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      {/* Animated Keyboard */}
      <div className="text-6xl animate-[typing_0.8s_steps(4)_infinite]">
        ⌨️
      </div>

      <style>{`
        @keyframes typing {
          0% { transform: translateY(0); }
          25% { transform: translateY(-5px); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Loading;
