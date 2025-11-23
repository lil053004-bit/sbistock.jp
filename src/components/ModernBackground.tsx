interface ModernBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function ModernBackground({ children, className = "" }: ModernBackgroundProps) {
  return (
    <div className={`min-h-screen relative ${className}`}>
      <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(61, 213, 152, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(74, 222, 128, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 40% 80%, rgba(61, 213, 152, 0.1) 0%, transparent 35%),
              radial-gradient(circle at 90% 20%, rgba(74, 222, 128, 0.1) 0%, transparent 35%)
            `
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                rgba(61, 213, 152, 0.03) 0px,
                transparent 1px,
                transparent 60px,
                rgba(61, 213, 152, 0.03) 61px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(74, 222, 128, 0.03) 0px,
                transparent 1px,
                transparent 60px,
                rgba(74, 222, 128, 0.03) 61px
              )
            `
          }}
        />

        <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-green-primary/5 rounded-full blur-[100px] animate-float" />
        <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] bg-green-light/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[20%] left-[15%] w-[250px] h-[250px] bg-green-primary/4 rounded-full blur-[90px] animate-float" style={{ animationDelay: '2s' }} />

        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L32 28 L60 30 L32 32 L30 60 L28 32 L0 30 L28 28 Z' fill='%233DD598' fill-opacity='0.4'/%3E%3C/svg%3E")
            `,
            backgroundSize: '120px 120px'
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.008]"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(61, 213, 152, 0.02) 0%, transparent 50%, rgba(74, 222, 128, 0.02) 100%)
            `
          }}
        />
      </div>
      {children}
    </div>
  );
}
