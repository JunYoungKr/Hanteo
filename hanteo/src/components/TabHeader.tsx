import React from "react";

interface TabHeaderProps {
  tabs: string[];
  currentTab: number;
  setCurrentTab: (index: number) => void;
}

const TabHeader = ({ tabs, currentTab, setCurrentTab }: TabHeaderProps) => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "2px",
        height: "52px",
        backgroundColor: "#FFB1B2",
      }}
    >
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`px-3 py-2 rounded-full font-semibold text-sm ${
            index === currentTab ? " text-white" : " text-black"
          }`}
          onClick={() => setCurrentTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabHeader;
