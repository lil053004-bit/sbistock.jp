interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientButton({ children, className = "" }: GradientButtonProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        background: 'linear-gradient(135deg, #3DD598 0%, #4ADE80 25%, #3DD598 50%, #4ADE80 75%, #3DD598 100%)',
        backgroundSize: '200% 100%',
        borderRadius: '12px',
        border: '3px solid #3DD598',
        boxShadow: '0 4px 14px 0 rgba(61, 213, 152, 0.5), 0 0 20px rgba(74, 222, 128, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
        willChange: 'box-shadow'
      }}
    >
      <div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          border: '2px solid rgba(61, 213, 152, 0.3)',
          borderRadius: '10px',
          margin: '2px'
        }}
      />
      {children}
    </div>
  );
}
