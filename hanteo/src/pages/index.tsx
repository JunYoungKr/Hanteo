// pages/index.tsx
import { useEffect, useRef, useState } from "react";
import TabHeader from "@/components/TabHeader";
import { BannerSlider } from "@/components/BannerSlider";
import ContentList from "@/components/ContentList";
// import Footer from "@/components/Footer";

const initialTabs = ["차트", "Whook", "이벤트", "뉴스", "스토어", "충전소"];

const contents = [
  "세로형 콘텐츠 순위 영역",
  "컨텐츠 2",
  "컨텐츠 3",
  "컨텐츠 4",
  "컨텐츠 5",
];

const tabContents: Record<string, string[]> = {
  차트: Array.from({ length: 30 }, (_, i) => `차트 콘텐츠 ${i + 1}`),
  Whook: Array.from({ length: 20 }, (_, i) => `Whook 콘텐츠 ${i + 1}`),
  이벤트: Array.from({ length: 15 }, (_, i) => `이벤트 콘텐츠 ${i + 1}`),
  뉴스: Array.from({ length: 10 }, (_, i) => `뉴스 콘텐츠 ${i + 1}`),
  스토어: Array.from({ length: 25 }, (_, i) => `스토어 콘텐츠 ${i + 1}`),
  충전소: Array.from({ length: 12 }, (_, i) => `충전소 콘텐츠 ${i + 1}`),
};

export default function Home() {
  const [currentTab, setCurrentTab] = useState(0);
  const [tabs] = useState(initialTabs);
  const [, setVisibleCount] = useState(10);
  const loader = useRef<HTMLDivElement>(null);

  const selectedTabName = tabs[currentTab];

  // 무한 스크롤 구현
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => prev + 10);
      }
    });
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [selectedTabName]);

  return (
    <>
      <TabHeader
        tabs={initialTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div
        className="bg-gray-100"
        style={{
          // padding: "0px 16px",
          backgroundColor: "white",
          padding: "16px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <BannerSlider />
        {/* <Footer /> */}
      </div>
      <ContentList title="콘텐츠 큐레이션 제목" contents={contents} />
    </>
  );
}
