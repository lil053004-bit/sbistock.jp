export default function FooterInfoBar() {
  const infoItems = [
    { title: 'AI株式診断', subtitle: 'サービス' },
    { title: 'リアルタイム', subtitle: '株価情報' },
    { title: '銘柄', subtitle: 'スクリーニング' },
    { title: 'データ提供:', subtitle: '公開市場情報' }
  ];

  return (
    <div className="w-full py-2">
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg,
                  #3DD598 0%,
                  #4ADE80 50%,
                  #3DD598 100%
                )
              `,
              boxShadow: `
                0 4px 20px rgba(61, 213, 152, 0.4),
                inset 0 1px 2px rgba(255, 255, 255, 0.2),
                inset 0 -1px 2px rgba(0, 0, 0, 0.2)
              `
            }}
          />

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)
              `
            }}
          />

          <div className="absolute inset-0 border-2 border-white/20 rounded-xl pointer-events-none" />

          <div className="relative grid grid-cols-4 gap-2 sm:gap-4 text-center py-4 px-2">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="text-white"
              >
                <div className="text-xs sm:text-sm font-bold leading-tight drop-shadow-lg">
                  {item.title}
                </div>
                <div className="text-xs sm:text-sm font-bold leading-tight drop-shadow-lg">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
