import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const VerticalFeatures = () => (
  <Section
    title="Who is Max Scherzer?"
    description="A right-handed starting pitcher, Scherzer is an eight-time MLB All-Star, has won three Cy Young Awards, has pitched two no-hitters, and won the World Series with the Nationals in 2019. Known for his intensity and competitiveness during play, he is nicknamed Mad Max after the fictional character of the same name."
  >
    <VerticalFeatureRow
      title="The Washington Nationals"
      description="He won his rings in national. Also, the first ring in the team history"
      image="/assets/images/max-nat wallpaper.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="LA Dodgers"
      description="In Dodgers, he got his 300 strike outs"
      image="/assets/images/max-dodger.jfif"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="NY Mets"
      description="In 2022, he will be joining the NY Mets"
      image="/assets/images/max-mets.jfif"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
