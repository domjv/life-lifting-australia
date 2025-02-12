"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface ResponsiveIframeProps {
  src: string;
  title: string;
}

export function ResponsiveIframe({ src, title }: ResponsiveIframeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState("800px");
  const { theme } = useTheme();
  const [iframeUrl, setIframeUrl] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add theme parameter to URL
    const url = new URL(src);
    url.searchParams.set("theme", theme === "dark" ? "dark" : "light");
    setIframeUrl(url.toString());
  }, [theme, src]);

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        const vh = Math.max(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0
        );
        setHeight(`${vh - 200}px`);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full">
      {isLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-white dark:bg-trueGray-900"
          style={{ height }}
        >
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary "></div>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={iframeUrl}
        title={title}
        onLoad={() => setIsLoading(false)}
        className="w-full"
        style={{
          border: "none",
          height: height,
          backgroundColor: "transparent",
          minWidth: "100%",
          width: "1px",
        }}
      />
    </div>
  );
}
