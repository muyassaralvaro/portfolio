import Card from "./components/card";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Navbar />
      <main className="flex flex-1 w-full flex-col items-center justify-between py-16 px-8 sm:items-start">
        <Card
          title="Hello"
          description="This is a card component"
          bottom="Footer content"
          iconHead="hand"
          iconStyle={{ "--fa-rotate-angle": "45deg" } as React.CSSProperties}
        />
      </main>
    </div>
  );
}
