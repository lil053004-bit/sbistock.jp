interface HeroSectionProps {
  stockCode?: string;
  stockName?: string;
  onDiagnosis?: () => void;
  disabled?: boolean;
}

export default function HeroSection({ stockCode = '----', stockName = '', onDiagnosis, disabled = false }: HeroSectionProps) {
  const hasStockData = stockCode !== '----' && stockName;

  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-primary/10 blur-[150px] rounded-full animate-pulse-slow pointer-events-none" />

      <div className="w-full px-4 py-0 flex flex-col items-center relative">
        <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="text-center" style={{ marginTop: '20px' }}>
            <h1 className="inline-block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-primary/5 via-green-light/10 to-green-primary/5 blur-2xl rounded-full animate-pulse-slow" />
              <span
                className="font-bold relative z-10"
                style={{
                  fontSize: '3rem',
                  color: '#3DD598',
                  fontFamily: "'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif",
                  textShadow: '0 2px 20px rgba(61, 213, 152, 0.3)'
                }}
              >
                情報
              </span>
              <span
                className="font-bold relative z-10"
                style={{
                  fontSize: '2rem',
                  color: '#03142d',
                  fontFamily: "'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif"
                }}
              >
                銘柄基本
              </span>
            </h1>
          </div>

          <div className="text-center relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-green-primary/5 to-transparent blur-xl rounded-full" />
            <h2
              className="font-bold whitespace-nowrap relative z-10"
              style={{
                fontFamily: "'HYYaKuHeiW', 'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif",
                color: '#03142d',
                fontSize: '3rem'
              }}
            >
              銘柄無料診断
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
