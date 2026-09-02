import {
  childSafePracticePage,
  galleryImages,
} from "../../content/siteContent";
import {
  ContentGrid,
  Main,
  Section,
  TextPanel,
  ImagePanel,
  RoundedMedia,
} from "../../styles/pageLayout.styles";
import PageHero from "../../components/PageHero";

export default function ChildSafePractice() {
  return (
    <Main>
      <PageHero
        title={childSafePracticePage.title}
        intro={childSafePracticePage.intro}
      />

      <Section id="commitment" data-reveal="true" data-visible="false">
        <ContentGrid>
          <TextPanel>
            <h2>Our Child-Safe Commitment</h2>
            <p>
              At Wingate Avenue Children's Co-operative, the safety, health, and
              wellbeing of every child is our highest priority. We are committed
              to creating and maintaining a child-safe culture where every child
              feels safe, respected, heard, and empowered.
            </p>
            <p>
              Our policies, procedures, and daily practices are guided by the
              Victorian Child Safe Standards and are designed to protect
              children while promoting their rights, participation, and
              wellbeing. We believe that every member of our community,
              including children, families, educators, volunteers, and our
              Committee of Management, shares responsibility for creating a
              safe, inclusive, and nurturing environment.
            </p>
          </TextPanel>
          <ImagePanel>
            <RoundedMedia
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              loading="lazy"
            />
          </ImagePanel>
        </ContentGrid>
      </Section>

      <Section
        id="child-safety-committee"
        data-reveal="true"
        data-visible="false"
      >
        <ContentGrid>
          <TextPanel>
            <h2>Child Safety Committee and Children's Voice</h2>
            <p>
              At Wingate, children's voices are central to our child-safe
              practices. Our Children's Child Safety Committee is made up of
              representatives from each classroom and meets monthly to discuss
              matters that are important to children and identify ways we can
              continue to strengthen safety and wellbeing across our service.
            </p>
            <p>
              These meetings provide children with genuine opportunities to
              share their ideas, express their views, and contribute to
              decisions that affect their daily experiences. At our most recent
              meeting in July, children discussed outdoor safety, with their
              ideas helping educators make meaningful improvements to our
              learning environments and daily practices.
            </p>
          </TextPanel>
        </ContentGrid>
      </Section>

      <Section
        id="child-safety-advocate"
        data-reveal="true"
        data-visible="false"
      >
        <ContentGrid>
          <ImagePanel>
            <RoundedMedia
              src={galleryImages[6].src}
              alt={galleryImages[2].alt}
              loading="lazy"
            />
          </ImagePanel>
          <TextPanel>
            <h2>Child Safety Advocate</h2>
            <p>
              One of our educators, Maus, proudly takes on the role of Child
              Safety Advocate, working alongside educators and the leadership
              team to promote children's rights and strengthen our child-safe
              culture. Through regular conversations, consultation, and
              advocacy, Maus helps ensure that children's voices remain at the
              heart of decision-making and continuous improvement across the
              service.
            </p>
          </TextPanel>
        </ContentGrid>
      </Section>

      <Section
        id="independent-consultant"
        data-reveal="true"
        data-visible="false"
      >
        <ContentGrid>
          <TextPanel>
            <h2>Independent Child Safety Consultant</h2>
            <p>
              To further strengthen our commitment to child safety, Wingate
              regularly engages an independent Child Safety Consultant, Laura
              from Mindful Mentors. Laura works alongside our team to review our
              child-safe practices, provide expert guidance, and support
              continuous improvement.
            </p>
            <p>
              Her ongoing involvement helps ensure our policies, procedures, and
              practices reflect current legislation, best practice, and the
              evolving needs of our children, families, and community.
            </p>
          </TextPanel>
        </ContentGrid>
      </Section>
    </Main>
  );
}
