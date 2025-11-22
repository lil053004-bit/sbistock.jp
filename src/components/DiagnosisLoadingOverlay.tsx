import { useEffect, useState } from 'react';

interface DiagnosisLoadingOverlayProps {
  isVisible: boolean;
  progress: number;
  onComplete?: () => void;
}

export default function DiagnosisLoadingOverlay({
  isVisible,
  progress,
  onComplete
}: DiagnosisLoadingOverlayProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (progress >= 100 && isVisible) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        if (onComplete) {
          onComplete();
        }
      }, 500);
      return () => clearTimeout(timer);
    } else if (!isVisible) {
      setIsExiting(false);
    }
  }, [progress, isVisible, onComplete]);

  useEffect(() => {
    if (isVisible) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-modal-open', 'true');

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.removeAttribute('data-modal-open');
        window.scrollTo(0, scrollY);
      };
    }
  }, [isVisible]);

  if (!isVisible && !isExiting) return null;

  return (
    <div
      className={`fixed inset-0 z-[9997] flex items-center justify-center p-4 backdrop-blur-md transition-opacity duration-500 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        touchAction: 'none',
        background: 'linear-gradient(135deg, rgba(26, 40, 65, 0.95) 0%, rgba(45, 74, 124, 0.95) 50%, rgba(61, 90, 153, 0.95) 100%)'
      }}
    >
      <div className={`w-full max-w-lg transition-transform duration-500 ${
        isExiting ? 'scale-95' : 'scale-100'
      }`}>
        <div className="relative bg-white/95 backdrop-blur-sm border-4 border-gold-400 rounded-2xl shadow-2xl p-8 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: 'linear-gradient(135deg, rgba(61, 90, 153, 0.2) 0%, rgba(217, 119, 6, 0.15) 50%, rgba(61, 90, 153, 0.2) 100%)'
            }}
          />

          <div className="relative">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-navy-700 to-navy-600 mb-2 text-center">市場データ分析中</h3>
              <p className="text-sm font-semibold text-navy-600 text-center">参考情報を生成しています...</p>
            </div>

            <div className="relative w-full h-4 bg-neutral-200 rounded-full overflow-hidden mb-3 border-2 border-gold-400 shadow-inner">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 transition-all duration-300 ease-out shadow-lg"
                style={{
                  width: `${Math.min(progress, 100)}%`
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_ease-in-out_infinite]"
              />
            </div>

            <div className="mb-6 text-center">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-500">
                {Math.floor(Math.min(progress, 100))}%
              </span>
            </div>

            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 border-3 border-navy-600/20 rounded-xl p-6 shadow-lg">
              <div className="space-y-3 text-sm">
                <p className="text-navy-800 font-bold text-center text-base">
                  AIによる情報分析中（参考資料作成）
                </p>
                <p className="text-navy-700 font-semibold text-center">
                  しばらくお待ちください
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
