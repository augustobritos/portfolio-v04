import localFont from "next/font/local";

const NeueMontreal = localFont({
  src: [
    {
      path: "../assets/fonts/PPNeueMontreal-Thin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Italic.otf",
      weight: "450",
      style: "italic",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Medium.otf",
      weight: "530",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-SemiBolditalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Bold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
  fallback: ["system-ui", "Helvetica", "Arial"],
  display: "swap",
});

export default NeueMontreal;