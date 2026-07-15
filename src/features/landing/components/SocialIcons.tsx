const ICON = 22;

type IconProps = {
  size?: number;
};

export function TikTokIcon({ size = ICON }: IconProps) {
  return (
    <svg className="shrink-0" width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M39.6 16.6a12.9 12.9 0 0 1-8.7-6.9v18.1a9 9 0 1 1-8.9-9c.7 0 1.4.1 2 .2v-6.3a15.4 15.4 0 0 0-2-.1 15.2 15.2 0 1 0 15.2 15.1V17a20.8 20.8 0 0 0 8.8 2.2v-6.2c-2 0-4.4-.7-6.4-2Z"
      />
    </svg>
  );
}

export function InstagramIcon({ size = ICON }: IconProps) {
  return (
    <svg className="shrink-0" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Z"
      />
      <path stroke="currentColor" strokeWidth="1.6" d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" />
      <path fill="currentColor" d="M17.2 6.9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = ICON }: IconProps) {
  return (
    <svg className="shrink-0" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.5 3.5A11 11 0 0 0 3.8 19.2L2 22l2.9-.8A11 11 0 1 0 20.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.1 7.9c-.2-.5-.4-.4-.6-.4l-.5.1c-.2.1-.4.2-.5.5a4.2 4.2 0 0 0 .5 3.5c.6 1 1.7 2.4 3.4 3.3 2 1.1 2.4.9 2.8.8.5 0 1.4-.6 1.6-1.2.2-.6.2-1 .2-1.1 0-.1-.1-.2-.2-.3l-1-.5c-.2-.1-.3-.2-.5 0-.1.1-.5.6-.6.7-.1.1-.2.1-.4 0l-.3-.2a6.3 6.3 0 0 1-2-1.8c-.2-.2-.2-.3 0-.5l.3-.4c.1-.2.1-.3.2-.5 0-.2-.1-.4-.2-.5l-.7-1c-.2-.3-.4-.3-.6-.3Z"
        fill="currentColor"
      />
    </svg>
  );
}
