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
      <div className="w-full px-4 py-0 flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="text-center mb-4" style={{ marginTop: '20px' }}>
            <h1 className="inline-block">
              <span
                className="font-bold"
                style={{
                  fontSize: '3rem',
                  color: '#ef4444',
                  fontFamily: "'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif"
                }}
              >
                情報
              </span>
              <span
                className="font-bold text-white"
                style={{
                  fontSize: '2rem',
                  fontFamily: "'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif",
                  textShadow: '2px 2px 4px rgba(239, 68, 68, 0.8), -1px -1px 2px rgba(239, 68, 68, 0.6)'
                }}
              >
                銘柄基本
              </span>
            </h1>
          </div>

          <div className="text-center" style={{ marginTop: '160px' }}>
            <h2
              className="font-bold whitespace-nowrap"
              style={{
                fontFamily: "'HYYaKuHeiW', 'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif",
                color: '#ef4444',
                fontSize: '3rem',
                textShadow: '2px 2px 0 #ffffff, -2px -2px 0 #ffffff, 2px -2px 0 #ffffff, -2px 2px 0 #ffffff, 1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff'
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
