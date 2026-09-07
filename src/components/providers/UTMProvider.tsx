"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function UTMProvider() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;

    const utms = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
    let hasUTMs = false;
    
    // Check if URL has any tracking parameters
    for (const key of utms) {
      if (searchParams.has(key)) {
        hasUTMs = true;
        break;
      }
    }

    // If tracking params exist, save them to localStorage
    if (hasUTMs) {
      const trackingData: Record<string, string> = {};
      for (const key of utms) {
        const val = searchParams.get(key);
        if (val) {
          trackingData[key] = val;
        }
      }
      
      // Store timestamp as well, in case we want to expire them after 30 days
      trackingData._timestamp = Date.now().toString();
      
      localStorage.setItem("thermomatch_tracking", JSON.stringify(trackingData));
    }
  }, [searchParams]);

  return null;
}
