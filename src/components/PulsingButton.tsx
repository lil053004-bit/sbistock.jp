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
          <div className="relative w-full h-24 flex items-center justify-center rounded-2xl overflow-hidden shadow-card-lg">
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(135deg,
                    #d97706 0%,
                    #f59e0b 50%,
                    #fbbf24 100%
                  )
                `,
                boxShadow: `
                  0 4px 20px rgba(217, 119, 6, 0.3),
                  inset 0 2px 4px rgba(255, 255, 255, 0.15),
                  inset 0 -2px 4px rgba(10, 22, 40, 0.2)
                `
              }}
            />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 10px,
                    rgba(255, 255, 255, 0.1) 10px,
                    rgba(255, 255, 255, 0.1) 20px
                  )
                `
              }}
            />
            <div className="absolute inset-0 border-2 border-gold-300/40 rounded-2xl pointer-events-none" />
            <div className="relative flex items-center justify-center px-8 z-10">
              <span className="font-bold text-base sm:text-lg text-navy-950 drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]">
                {buttonText}
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
