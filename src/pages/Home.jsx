import FirstSection from "../ui/FirstSection";
import SecondSection from "../ui/SecondSection";
import ThirdSection from "../ui/ThirdSection";
import ButtonText from "../ui/ButtonText";
import FourthSection from "../ui/FourthSection";
import FifthSection from "../ui/FifthSection";
import SixthSection from "../ui/SixthSection";
import SeventhSection from "../ui/SeventhSection";

export default function Home() {
  return (
    <div className="relative flex flex-col">
      <FirstSection />
      <div className="relative">
        <div className="absolute mt-[-30px] flex w-full items-center justify-center space-x-10 lg:space-x-20">
          <ButtonText
            firstText="Temukan Mentor"
            secText="Mulai Belajar Bersama Mentor"
          />
          <ButtonText
            firstText="Menjadi Mentor"
            secText="Bergabung Menjadi Mentor!"
          />
        </div>
        <SecondSection />
      </div>
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </div>
  );
}
