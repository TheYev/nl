import { Intro } from "@/components/intro/intro";
import { ShortDescription } from "@/components/short_description/short_description";
import { Different } from "@/components/different/different";
import { InfoExtension } from "@/components/info_extension/info_extension";
import { Preference } from "@/components/preference/preference";
import { CreatorSlider } from "@/components/creator_slider/creator_slider";

export default function Home() {
  return (
    <div>
      <Intro />
      <ShortDescription />
      <Different />
      <InfoExtension />
      <Preference />
      <CreatorSlider />
    </div>
  );
}
