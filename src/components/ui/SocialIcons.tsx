import type { SVGProps, ReactNode } from "react";

/**
 * lucide-react 1.x removed all brand/logo icons (Facebook, Twitter, Instagram,
 * LinkedIn, etc.) for trademark reasons. These are small stand-in glyphs drawn
 * in the same 24x24 stroke style so the footer's social row keeps working.
 * `size` mirrors lucide's API and maps to both width and height.
 */
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

function BaseIcon({ size = 24, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </BaseIcon>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </BaseIcon>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.4a4 4 0 1 1-7.9-1.1 4 4 0 0 1 7.9 1.1z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </BaseIcon>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </BaseIcon>
  );
}
