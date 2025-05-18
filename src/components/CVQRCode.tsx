
import React from "react";
// For a quick QR, use Google Chart's QR endpoint (format: PNG)
const qrUrl = "https://chart.googleapis.com/chart?chs=90x90&cht=qr&chl=";

const CVQRCode = ({
  url,
  alt = "LinkedIn QR code",
}: {
  url: string;
  alt?: string;
}) => (
  <img
    src={qrUrl + encodeURIComponent(url)}
    alt={alt}
    className="w-14 h-14 rounded shadow-sm border border-gray-200"
    draggable={false}
    loading="lazy"
  />
);

export default CVQRCode;
