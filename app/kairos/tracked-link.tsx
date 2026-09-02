"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName?: "cta_click" | "whatsapp_click";
  location: string;
};

export default function TrackedLink({
  children,
  eventName = "cta_click",
  location,
  onClick,
  ...props
}: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    window.gtag?.("event", eventName, {
      cta_location: location,
      link_text: event.currentTarget.textContent?.trim(),
      link_url: event.currentTarget.href,
    });

    if (eventName === "whatsapp_click") {
      window.gtag?.("event", "generate_lead", {
        method: "whatsapp",
        cta_location: location,
      });
    }

    onClick?.(event);
  }

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
