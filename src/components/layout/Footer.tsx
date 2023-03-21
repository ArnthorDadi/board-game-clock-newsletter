import React from "react";

export const Footer = () => {
  return (
    <footer className="shadow sm:px-0">
      <div className={"container mx-auto pb-4"}>
        {/*<hr className="mb-4 border-gray-200 border-gray-700" />*/}
        <span className="block text-center text-xs text-gray-400 md:px-4 md:text-left">
          ©2023{" "}
          <a href="https://arnthordadi.github.io" className="hover:underline">
            ArnthorDadi™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
