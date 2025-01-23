import React from "react";
import { Icon } from "@iconify/react";

const Skils = () => {
  return (
    <div className="mt-5">
      <div className="text-center text-[1.8em] font-bold">Skills</div>
      <div className="flex gap-1 md:gap-10 flex-col md:flex-row">
        <div className="">
          <Icon icon="vscode-icons:file-type-html" width="40" height="40" />
          HTML
        </div>
        <div className="">
          <Icon
            icon="flowbite:css-solid"
            width="40"
            height="40"
            className="text-[#1600ff]"
          />
          CSS
        </div>
        <div className="">
          <Icon
            icon="vscode-icons:file-type-js-official"
            width="40"
            height="40"
          />
          JAVASCRIPT
        </div>
        <div className="">
          <Icon icon="logos:react" width="40" height="40" />
          REACT
        </div>
        <div className="">
          <Icon icon="skill-icons:tailwindcss-dark" width="40" height="40" />
          TAILWIND CSS
        </div>
      </div>
    </div>
  );
};

export default Skils;
