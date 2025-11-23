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
        background: 'rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className={`w-full max-w-lg transition-transform duration-500 ${
        isExiting ? 'scale-95' : 'scale-100'
      }`}>
        <div className="relative bg-white backdrop-blur-sm border-4 border-green-primary rounded-2xl shadow-2xl p-8 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: 'linear-gradient(135deg, rgba(61, 213, 152, 0.1) 0%, rgba(74, 222, 128, 0.1) 100%)'
            }}
          />

          <div className="relative">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2 text-center">市場データ分析中</h3>
              <p className="text-sm font-semibold text-text-gray text-center">参考情報を生成しています...</p>
            </div>

            <div className="relative w-full h-4 bg-neutral-200 rounded-full overflow-hidden mb-3 border-2 border-green-primary shadow-inner">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-primary via-green-light to-green-primary transition-all duration-300 ease-out shadow-lg"
                style={{
                  width: `${Math.min(progress, 100)}%`
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_ease-in-out_infinite]"
              />
            </div>

            <div className="mb-6 text-center">
              <span className="text-2xl font-bold text-green-primary">
                {Math.floor(Math.min(progress, 100))}%
              </span>
            </div>

            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 border-3 border-green-primary/20 rounded-xl p-6 shadow-lg">
              <div className="space-y-3 text-sm">
                <p className="text-primary font-bold text-center text-base">
                  AIによる情報分析中（参考資料作成）
                </p>
                <p className="text-text-gray font-semibold text-center">
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
