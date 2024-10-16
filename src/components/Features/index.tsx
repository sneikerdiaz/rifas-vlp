import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="acerca" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="DE QUE TRATA?"
            paragraph="Nuestra rifa en cuotas consiste en los siguientes pasos:
          "
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>

        <h4 className="py-4 center">
          
        </h4>

          <SectionTitle
            title="LA SUERTE ESTA EN INTENTARLO!"
            paragraph=""
            center
            titleColor="text-red-600"
          />

        </div>
      </section>
    </>
  );
};

export default Features;
