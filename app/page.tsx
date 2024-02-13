import Link from "next/link";
import { Button } from "./components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <div className="mx-auto pb-20 pt-20 sm:pb-40 sm:pt-40">
      <div className="text-center">
        <h1 className="font-serif text-4xl font-normal leading-tight text-primary sm:text-5xl sm:leading-snug">
          Óscar Córdova
        </h1>
        <p className="text-base leading-8 text-muted-foreground">
        Customer-Obsessed Product Engineer
        </p>
        <div className="mt-8 flex justify-center gap-x-4">
          <Link href="/about">
            <Button variant="ghost">
              Learn more <ArrowRight size={14} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
