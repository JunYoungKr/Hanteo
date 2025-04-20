import React, { useRef } from "react";

interface ContentListProps {
  title: string;
  contents: string[];
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

const ContentList = ({
  title,
  contents,
  onSwipeLeft,
  onSwipeRight,
}: ContentListProps) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const delta = touchStartX.current - touchEndX.current;
      if (Math.abs(delta) > 50) {
        if (delta > 0) {
          onSwipeLeft?.(); // 왼쪽으로 넘김 → 다음 탭
        } else {
          onSwipeRight?.(); // 오른쪽으로 넘김 → 이전 탭
        }
      }
    }
  };

  return (
    <div
      className="p-4"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h2 className="text-lg font-bold mb-4 text-black">{title}</h2>
      <div className="flex flex-col gap-3">
        {contents.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-md shadow px-4 py-3"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentList;
