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
        <div className="relative rounded-2xl overflow-hidden shadow-card-lg">
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg,
                  rgba(30, 58, 95, 0.95) 0%,
                  rgba(45, 74, 124, 0.95) 50%,
                  rgba(61, 90, 153, 0.95) 100%
                )
              `,
              boxShadow: 'inset 0 2px 4px rgba(251, 191, 36, 0.15)'
            }}
          />

          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 15px,
                  rgba(251, 191, 36, 0.1) 15px,
                  rgba(251, 191, 36, 0.1) 30px
                )
              `
            }}
          />

          <div className="relative p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-primary text-center mb-6 drop-shadow-lg">
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
                    <div className="text-primary font-bold text-sm sm:text-base">
                      {service.title}
                    </div>
                    <div className="text-primary/90 text-xs sm:text-sm">
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
