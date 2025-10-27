// Components
import AddPlaceBtn from "@/components/AddPlaceBtn";
import Hero from "@/components/Hero";
import PlaceShowroom from "@/components/PlaceShowroom";
import TagCarousel from "@/components/TagCarousel";

// 
export default function Home() {
  return (
    <>
      <Hero />
      <TagCarousel />
      <PlaceShowroom />
    </>
  );
}
