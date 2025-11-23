import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

interface NewDiagnosisModalProps {
  isOpen: boolean;
  onClose: () => void;
  analysis: string;
  stockCode: string;
  stockName: string;
  stockPrice: string;
  priceChange: string;
  isStreaming?: boolean;
  isConnecting?: boolean;
  onLineConversion?: () => void;
}

const formatAnalysisText = (text: string): JSX.Element[] => {
  const lines = text.split('\n');
  return lines.map((line, index) => {
    const isBold = line.includes('###') || line.includes('**') || line.match(/^[\d]+\./);
    const cleanLine = line.replace(/###|\*\*/g, '');

    const parts: (string | JSX.Element)[] = [];
    const regex = /(\d+\.?\d*%?|\d+円|[+-]\d+\.?\d*)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(cleanLine)) !== null) {
      if (match.index > lastIndex) {
        parts.push(cleanLine.substring(lastIndex, match.index));
      }
      parts.push(
        <span key={`${index}-${match.index}`} className="text-green-primary font-semibold text-lg">
          {match[0]}
        </span>
      );
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < cleanLine.length) {
      parts.push(cleanLine.substring(lastIndex));
    }

    if (isBold) {
      return (
        <div key={index} className="font-bold text-primary mt-4 mb-2">
          {parts}
        </div>
      );
    }

    return (
      <div key={index} className="text-primary">
        {parts}
      </div>
    );
  });
};

export default function NewDiagnosisModal({
  isOpen,
  onClose,
  analysis,
  stockCode,
  stockName,
  stockPrice,
  priceChange,
  isStreaming = false,
  isConnecting = false,
  onLineConversion,
}: NewDiagnosisModalProps) {
  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-2 sm:p-4 backdrop-blur-md"
      style={{
        background: 'linear-gradient(135deg, rgba(26, 40, 65, 0.95) 0%, rgba(45, 74, 124, 0.95) 50%, rgba(61, 90, 153, 0.95) 100%)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[95vh] z-[9999]" onClick={(e) => e.stopPropagation()}>
        <div className="relative bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border-4 border-gold-400 pt-4 sm:pt-6">
          <div className="relative sticky top-0 bg-gradient-to-r from-navy-700 to-navy-600 px-3 py-2 sm:px-5 sm:py-3 flex items-center justify-between border-b-4 border-gold-500 backdrop-blur-sm z-10 shadow-lg">
          <div className="flex-1 text-center pr-8">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-primary drop-shadow-lg">
              {stockName}（{stockCode}）AI市場分析レポート（参考資料）
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 sm:p-2 hover:bg-white/30 rounded-lg transition-colors backdrop-blur-sm hover:shadow-lg"
            aria-label="閉じる"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </button>
        </div>

        <div className="relative overflow-y-auto max-h-[calc(95vh-180px)] sm:max-h-[calc(95vh-200px)] px-3 py-3 sm:px-5 sm:py-4 space-y-3 sm:space-y-4 bg-gradient-to-br from-neutral-50 to-neutral-100">

          <div className="relative bg-white/80 backdrop-blur-xl rounded-lg sm:rounded-xl p-4 sm:p-5 border-2 border-navy-600/20 overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-navy-600/10 to-gold-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 bg-gradient-to-tr from-gold-400/10 to-navy-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative space-y-2 sm:space-y-3">
              <div className="bg-white rounded-lg p-3 sm:p-4 border-2 border-navy-600/20 backdrop-blur-sm shadow-lg">
                <div className="text-xs sm:text-sm text-primary leading-relaxed space-y-2">
                  {isConnecting ? (
                    <div className="text-center py-4">
                      <p className="text-navy-600 font-bold">市場データ分析中...</p>
                    </div>
                  ) : (
                    <>
                      <div>{formatAnalysisText(analysis)}</div>
                      {isStreaming && (
                        <span className="inline-block w-2 h-4 bg-gradient-to-r from-gold-500 to-gold-400 animate-pulse ml-1"></span>
                      )}
                    </>
                  )}
                </div>
              </div>

              {onLineConversion && (
                <>
                  <button
                    onClick={onLineConversion}
                    className="relative overflow-hidden w-full bg-gradient-to-r from-success to-emerald-600 text-primary font-bold py-4 px-6 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-card-md hover:shadow-card-lg flex items-center justify-center gap-3 text-sm mt-6 group"
                    style={{ willChange: 'transform' }}
                  >
                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)',
                        backgroundSize: '200% 100%'
                      }}
                    />

                    <ExternalLink className="relative w-6 h-6" />
                    <span className="relative">市場分析情報をLINEで受け取る（参考情報）</span>
                  </button>

                  <div className="mt-3 p-3 bg-gradient-to-r from-success/10 to-emerald-600/10 rounded-lg border border-success/30">
                    <p className="text-xs text-success leading-relaxed">
                      LINEで登録すると、参考情報として市場分析レポートをお届けします。※投資助言ではありません
                    </p>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
