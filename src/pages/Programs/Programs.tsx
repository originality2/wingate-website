import {
  galleryImages,
  toddlerClassroomGroups,
  kindergartenClassroomGroups,
  programPage,
  toddlerSupportFocusAreas,
  kindergartenSupportFocusAreas,
} from "../../content/siteContent";
import {
  CardGrid,
  ContentGrid,
  Eyebrow,
  ImagePanel,
  Main,
  PrimaryButtonLink,
  Section,
  SoftCard,
  TextPanel,
  RoundedMedia,
} from "../../styles/pageLayout.styles";
import PageHero from "../../components/PageHero";

export default function Programs() {
  return (
    <Main>
      <PageHero title={programPage.title} intro={programPage.intro} />

      <Section id="learning-approach" data-reveal="true" data-visible="false">
        <ContentGrid>
          <TextPanel>
            <h2>Our Learning Approach</h2>
            <p>
              At Wingate Avenue Children&apos;s Co-operative, we believe
              children learn best when they feel safe, secure and connected. Our
              programs are built on strong responsive relationships, play-based
              learning and meaningful experiences that nurture every
              child&apos;s individual development.
            </p>
            <p>
              Our approach is inspired by the <b>Reggio Emilia philosophy</b>,
              which sees children as capable, confident and curious learners,
              each with the ability to construct their own knowledge through
              exploration, relationships and experience.
            </p>
          </TextPanel>
          <ImagePanel>
            <RoundedMedia
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              loading="lazy"
            />
          </ImagePanel>
        </ContentGrid>
      </Section>

      <Section
        id="expression-and-inquiry"
        data-reveal="true"
        data-visible="false"
      >
        <ContentGrid>
          <ImagePanel>
            <RoundedMedia
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              loading="lazy"
            />
          </ImagePanel>
          <TextPanel>
            <h2>Expression, Inquiry and Environment</h2>
            <p>
              We believe children have a <b>hundred languages</b> for expressing
              their ideas, thoughts and understandings. Through creativity,
              investigation, collaboration and reflection, our educators support
              children to follow their curiosities and build a deeper
              understanding of the world around them.
            </p>
            <p>
              Guided by the <b>Early Years Learning Framework (EYLF)</b>, our
              educators create environments where children are encouraged to
              question, experiment, problem-solve and share their ideas. Our
              learning spaces are always evolving in response to children&apos;s
              needs and curiosity, acting as a &quot;third teacher,&quot;
              thoughtfully designed with natural materials, open-ended resources
              and endless opportunities to explore, create and connect.
            </p>
          </TextPanel>
        </ContentGrid>
      </Section>

      <Section data-reveal="true" data-visible="false">
        <ContentGrid $stackAtTablet>
          <TextPanel
            as="section"
            id="infant-toddler"
            $virtualParity="odd"
            $flipVirtualParityResponsiveness
          >
            <h2>Infant and Toddler Curriculum</h2>
            <p>
              Our small class sizes mean educators can truly tune in, noticing
              every coo, gesture and expression, and responding with warmth and
              care. Throughout the rhythm of each day, educators create gentle
              opportunities for children to <b>build independence</b> and{" "}
              <b>confidence at their own pace</b>.
            </p>
            <p>
              <b>We believe our children can do it, so they do it</b>. Whether a
              baby is communicating through cooing sounds or a toddler through
              pointing and gesture, our educators listen closely and respond,
              nurturing each child&apos;s sense of safety and belonging through
              rich sensory play like sand, clay, play-dough, mud-kitchen and
              farm-animal adventures.
            </p>
            <p>
              We know that children who feel safe and heard are naturally
              motivated to explore, learn and discover. We see our youngest
              children as true investigators, constantly testing, tasting and
              exploring the world around them. Our educators actively listen and
              walk alongside them, supporting their curiosity every step of the
              way.
            </p>
            <CardGrid>
              {toddlerClassroomGroups.map((group) => (
                <SoftCard
                  key={group.name}
                  data-reveal="true"
                  data-visible="false"
                >
                  <Eyebrow>{group.ages}</Eyebrow>
                  <h3>{group.name}</h3>
                  <p>{group.summary}</p>
                </SoftCard>
              ))}
            </CardGrid>
          </TextPanel>

          <TextPanel
            as="section"
            id="toddler-growth"
            $virtualParity="even"
            $flipVirtualParityResponsiveness
          >
            <h2>Growth, Learning and Wellbeing</h2>
            <p>
              How does the Wingate Infant and Toddler Curriculum support your
              child&apos;s growth, learning, and wellbeing?
            </p>
            <CardGrid>
              {toddlerSupportFocusAreas.map((focus) => (
                <SoftCard
                  key={focus.title}
                  data-reveal="true"
                  data-visible="false"
                >
                  <h3>{focus.title}</h3>
                  <p>{focus.description}</p>
                </SoftCard>
              ))}
            </CardGrid>
          </TextPanel>
        </ContentGrid>
      </Section>

      <Section data-reveal="true" data-visible="false">
        <ContentGrid $stackAtTablet>
          <TextPanel as="section" id="kindergarten" $virtualParity="even">
            <h2>Kindergarten Curriculum </h2>
            <p>
              Our Kinder program gives children the skills and confidence to
              thrive, not just in their first year of primary school, but
              throughout life. We focus on building strong foundations in
              language, self-regulation, social skills, pre-literacy and
              pre-numeracy, helping every child grow into a capable, curious
              learner.
            </p>
            <p>
              We believe{" "}
              <b>
                children are naturally motivated to learn when knowledge feels
                meaningful to them
              </b>
              . Our wonderful teachers create a responsive, engaging classroom
              environment that nurtures children's curiosity while intentionally
              building valuable life skills like sustained attention,
              self-regulation and strong, respectful communication.
            </p>
            <p>
              Our teachers encourage children to think deeply and explore the
              many "languages" of expression, through art, construction, clay,
              open-ended materials and imaginative play, helping every child
              discover new ways to{" "}
              <b>understand themselves and the world around them</b>.
            </p>
            <CardGrid>
              {kindergartenClassroomGroups.map((group) => (
                <SoftCard
                  key={group.name}
                  data-reveal="true"
                  data-visible="false"
                >
                  <Eyebrow>{group.ages}</Eyebrow>
                  <h3>{group.name}</h3>
                  <p>{group.summary}</p>
                </SoftCard>
              ))}
            </CardGrid>
          </TextPanel>

          <TextPanel as="section" id="kindergarten-growth" $virtualParity="odd">
            <h2>Growth, Learning and Wellbeing</h2>
            <p>
              How does the Wingate Kindergarten Curriculum support your child's
              growth, learning, and wellbeing?
            </p>
            <CardGrid>
              {kindergartenSupportFocusAreas.map((focus) => (
                <SoftCard
                  key={focus.title}
                  data-reveal="true"
                  data-visible="false"
                >
                  <h3>{focus.title}</h3>
                  <p>{focus.description}</p>
                </SoftCard>
              ))}
            </CardGrid>
          </TextPanel>
        </ContentGrid>
      </Section>

      <Section id="meals" data-reveal="true" data-visible="false">
        <ContentGrid>
          <ImagePanel>
            <RoundedMedia
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              loading="lazy"
            />
          </ImagePanel>
          <TextPanel>
            <h2>Meals & Nutrition</h2>
            <p>
              The centre provides a breakfast program, morning tea, lunch,
              afternoon tea, and a late snack. Menus support children&apos;s
              wellbeing and dietary requirements.
            </p>
            <p>
              Wingate also supplies nappies, wipes, sunscreen, and
              children&apos;s bedding as part of the daily program.
            </p>
            <PrimaryButtonLink to="/parent-resources">
              View Sample Menu
            </PrimaryButtonLink>
          </TextPanel>
        </ContentGrid>
      </Section>
    </Main>
  );
}
