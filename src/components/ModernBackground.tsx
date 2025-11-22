interface ModernBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function ModernBackground({ children, className = "" }: ModernBackgroundProps) {
  return (
    <div className={`min-h-screen relative ${className}`}>
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            linear-gradient(135deg,
              rgba(59, 130, 246, 0.1) 0%,
              rgba(147, 51, 234, 0.1) 25%,
              rgba(236, 72, 153, 0.1) 50%,
              rgba(251, 146, 60, 0.1) 75%,
              rgba(34, 197, 94, 0.1) 100%
            ),
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 70%),
            linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #334155 100%)
          `
        }}
      />
      {children}
    </div>
  );
}
