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
          background: '#FFFFFF'
        }}
      />
      {children}
    </div>
  );
}
