interface BlueHeaderCardProps {
  children: React.ReactNode;
  headerText?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function BlueHeaderCard({ children, headerText = "三井金″株式″会社診断開始 ≫≫≫", className = "", style }: BlueHeaderCardProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(30, 58, 95, 0.5) 0%, rgba(45, 74, 124, 0.45) 100%)',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(61, 90, 153, 0.4)',
        borderRadius: '12px',
        boxShadow: '0 8px 32px 0 rgba(10, 22, 40, 0.3), inset 0 0 30px rgba(217, 119, 6, 0.08)',
        ...style
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          border: '1px solid rgba(251, 191, 36, 0.2)',
          borderRadius: '11px',
          margin: '4px'
        }}
      />

      <div
        className="relative z-10"
        style={{
          background: 'linear-gradient(90deg, #1e3a5f 0%, #2d4a7c 100%)',
          padding: '12px 20px',
          borderBottom: '3px solid #f59e0b'
        }}
      >
        <h2 className="text-white font-bold text-lg md:text-xl text-center tracking-wide">
          {headerText}
        </h2>
      </div>

      {children}
    </div>
  );
}
