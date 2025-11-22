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
            radial-gradient(circle at 20% 20%, rgba(61, 90, 153, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(45, 74, 124, 0.08) 0%, transparent 50%),
            linear-gradient(180deg, #0a1628 0%, #1a2841 40%, #2d4a7c 100%)
          `
        }}
      />
      {children}
    </div>
  );
}
