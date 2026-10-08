export interface ToolItem {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  isInternal?: boolean;
}

export const toolsData: ToolItem[] = [
  {
    id: "swiftpkr-converter",
    name: "SwiftPKR USDT to PKR Converter",
    description: "Real-time USDT to PKR currency converter with live exchange rates from trusted market sources and zero conversion fee calculations.",
    url: "https://swiftpkrconverter.vercel.app/",
    category: "Finance & Crypto",
    tags: ["Crypto", "USDT", "PKR", "Currency Converter"],
    isInternal: true
  },
  {
    id: "qrcrafts-generator",
    name: "QRCrafts QR Code Generator",
    description: "Custom high-resolution QR code generator for URLs, text, contact cards, and Wi-Fi networks with customizable styling options.",
    url: "https://qrcrafts.lovable.app/",
    category: "Developer Tools",
    tags: ["QR Code", "Generator", "Utility"],
    isInternal: true
  },
  {
    id: "uacgs-aggregate-calculator",
    name: "UACGS University Aggregate Calculator",
    description: "Pakistani university merit and aggregate formula calculator for metric, FSc, and entry test scores.",
    url: "https://uacgs.vercel.app/",
    category: "Education",
    tags: ["Aggregate Calculator", "Pakistan Universities", "Merit"],
    isInternal: true
  }
];
