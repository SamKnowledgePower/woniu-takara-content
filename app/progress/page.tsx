import type { Metadata } from "next";
import DocNav from "../components/DocNav";
import ProgressDashboard from "./ProgressDashboard";

export const metadata: Metadata = {
  title: "窩牛 × Takara｜執行進度儀表板",
  description: "窩牛 × Takara 一年期內容行銷導入暨內部能力建置每週執行進度。",
};

export default function ProgressPage() {
  return (
    <>
      <DocNav current="/progress" />
      <ProgressDashboard />
    </>
  );
}
