import BackPageLayout from "@/components/backPageLayout";
import Image from "next/image";

export default function Custom404() {
  return (
    <BackPageLayout>
      <div className="prose lg:prose-xl dark:prose-invert">
        <h1>Uh oh...</h1>
        <p>I think you may be lost partner.</p>
        <Image
          src={"/404-opt.webp"}
          alt="Picture of guy in corn field saying 'You\'re Lost'"
          width={400}
          height={400}
        />
      </div>
    </BackPageLayout>
  );
}
