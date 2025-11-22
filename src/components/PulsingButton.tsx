interface PulsingButtonProps {
  onClick: () => void;
  stockName?: string;
  disabled?: boolean;
}

export default function PulsingButton({ onClick, stockName = '', disabled = false }: PulsingButtonProps) {
  const buttonText = stockName ? `【${stockName}】の情報を表示` : '銘柄情報を表示';

  const handleClick = () => {
    onClick();
  };

  return (
    <div className="flex justify-center px-4 my-3">
      <div className="max-w-lg w-full">
        <button
          onClick={handleClick}
          disabled={disabled}
          className="relative group disabled:opacity-50 disabled:cursor-not-allowed w-full transform transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className="relative w-full h-24 flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(135deg,
                    rgba(236, 72, 153, 0.95) 0%,
                    rgba(219, 39, 119, 0.95) 25%,
                    rgba(244, 63, 94, 0.95) 50%,
                    rgba(236, 72, 153, 0.95) 75%,
                    rgba(219, 39, 119, 0.95) 100%
                  )
                `,
                boxShadow: `
                  0 0 30px rgba(236, 72, 153, 0.6),
                  inset 0 2px 4px rgba(255, 255, 255, 0.2),
                  inset 0 -2px 4px rgba(0, 0, 0, 0.3)
                `
              }}
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 10px,
                    rgba(255, 255, 255, 0.05) 10px,
                    rgba(255, 255, 255, 0.05) 20px
                  )
                `
              }}
            />
            <div className="absolute inset-0 border-2 border-white/30 rounded-2xl pointer-events-none" />
            <div className="relative flex items-center justify-center px-8 z-10">
              <span className="font-bold text-base sm:text-lg text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {buttonText}
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
