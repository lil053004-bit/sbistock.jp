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
                  color: '#f59e0b',
                  fontFamily: "'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif"
                }}
              >
                情報
              </span>
              <span
                className="font-bold"
                style={{
                  fontSize: '2rem',
                  color: '#e9ecef',
                  fontFamily: "'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif",
                  textShadow: '2px 2px 8px rgba(10, 22, 40, 0.6)'
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
                color: '#fbbf24',
                fontSize: '3rem',
                textShadow: '3px 3px 0 #0a1628, -1px -1px 0 #0a1628, 1px -1px 0 #0a1628, -1px 1px 0 #0a1628, 2px 2px 8px rgba(217, 119, 6, 0.4)'
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
