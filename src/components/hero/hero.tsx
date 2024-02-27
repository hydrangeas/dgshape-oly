import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero relative h-96 w-full">
      <Image
        src="/mountain.jpg"
        alt="Hero"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}
