import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
"20+ Projecten afgerond",
"3+ Jaar freelance ervaring",
"99% klanttevredenheid",
"20K+ volgers"
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
