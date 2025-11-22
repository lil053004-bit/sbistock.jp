export default function ServicesInfoCard() {
  const services = [
    { icon: '📊', title: 'AI株式診断', subtitle: 'サービス' },
    { icon: '⚡', title: 'リアルタイム', subtitle: '株価情報' },
    { icon: '🔍', title: '銘柄', subtitle: 'スクリーニング' },
    { icon: '📈', title: 'テクニカル', subtitle: '分析ツール' }
  ];

  return (
    <div className="px-4 py-3">
      <div className="max-w-lg mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg,
                  rgba(59, 130, 246, 0.95) 0%,
                  rgba(37, 99, 235, 0.95) 50%,
                  rgba(29, 78, 216, 0.95) 100%
                )
              `,
              boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.2)'
            }}
          />

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 15px,
                  rgba(255, 255, 255, 0.1) 15px,
                  rgba(255, 255, 255, 0.1) 30px
                )
              `
            }}
          />

          <div className="relative p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 drop-shadow-lg">
              提供サービス一覧
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl sm:text-4xl text-center mb-2">
                    {service.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-sm sm:text-base">
                      {service.title}
                    </div>
                    <div className="text-white/90 text-xs sm:text-sm">
                      {service.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
