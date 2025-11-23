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
          <div className="text-center" style={{ marginTop: '20px' }}>
            <h1 className="inline-block">
              <span
                className="font-bold"
                style={{
                  fontSize: '3rem',
                  color: '#3DD598',
                  fontFamily: "'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif"
                }}
              >
                情報
              </span>
              <span
                className="font-bold"
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

          <div className="text-center">
            <h2
              className="font-bold whitespace-nowrap"
              style={{
                fontFamily: "'HYYaKuHeiW', 'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif",
                color: '#111827',
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
