import React from "react";

interface ContentListProps {
  title: string;
  contents: string[];
}

const ContentList = ({ title, contents }: ContentListProps) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="flex flex-col gap-3">
        {contents.map((item, index) => (
          <div key={index} className="bg-white rounded-md shadow px-4 py-3">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentList;
