import { StockPrice } from '../types/stock';
import { useState, useEffect } from 'react';

interface ScrollingHistoryDataProps {
  prices: StockPrice[];
  stockName: string;
}

export default function ScrollingHistoryData({ prices, stockName }: ScrollingHistoryDataProps) {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (prices.length <= 3) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => {
        const next = prev + 1;
        return next >= prices.length - 2 ? 0 : next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [prices.length]);

  if (prices.length === 0) {
    return null;
  }

  const displayPrices = prices.length <= 3
    ? prices
    : [prices[startIndex], prices[startIndex + 1], prices[startIndex + 2]];

  const formatChange = (change: string, changePercent: string) => {
    const changeNum = parseFloat(change);
    const sign = changeNum >= 0 ? '+' : '';
    return `${sign}${change} (${sign}${changePercent}%)`;
  };

  const renderCard = (price: StockPrice) => {
    const changeNum = parseFloat(price.change);
    const isPositive = changeNum >= 0;
    const changeColor = isPositive ? 'text-red-600' : 'text-green-600';
    const borderColor = isPositive ? 'border-red-200' : 'border-green-200';

    return (
      <div
        className={`rounded-2xl border-2 ${borderColor} p-4 shadow-sm`}
        style={{ backgroundColor: '#fef9f5' }}
      >
        <div className="flex justify-center mb-3">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-md">
            株-{price.code || stockName} {price.date}
          </div>
        </div>

        <div className={`rounded-xl border-2 ${borderColor} p-3 text-center`}>
          <div className="text-sm text-gray-600">
            前日比：<span className={`font-bold ${changeColor}`}>{formatChange(price.change, price.changePercent)}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 py-2">
      <div className="max-w-lg mx-auto">
        <div className="space-y-3">
          {displayPrices.map((price, index) => (
            <div key={`${price.date}-${index}`}>
              {renderCard(price)}
            </div>
          ))}
        </div>

        <div className="mt-3 text-center">
          <p className="text-xs text-blue-900">
            データ出典: 公開市場情報 | 更新: 準リアルタイム
          </p>
          <p className="text-xs text-blue-900 mt-1">
            ※過去のデータは将来の結果を保証するものではありません
          </p>
        </div>
      </div>
    </div>
  );
}
