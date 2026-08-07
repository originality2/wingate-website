import { enrolmentsPage } from "../../content/siteContent";
import {
  ContentGrid,
  Main,
  Section,
  TextPanel,
} from "../../styles/pageLayout.styles";
import PageHero from "../../components/PageHero";

export default function Enrolments() {
  return (
    <Main>
      <PageHero title={enrolmentsPage.title} intro={enrolmentsPage.intro} />

      <Section data-reveal="true" data-visible="false">
        <ContentGrid>
          <TextPanel>
            <h2>
              Begin Your Journey with Wingate Avenue Children&apos;s
              Co-operative
            </h2>
            <p>
              A visit gives families the opportunity to explore our learning
              environments, ask questions, learn more about our programs and
              discover what makes Wingate such a special place for children and
              families.
            </p>
            <p>
              During your visit, our team will take the time to understand your
              family&apos;s needs, learn about your child&apos;s interests and
              development, and provide information about our enrolment process.
            </p>
            <p>
              To book a tour, please contact us by phone or email. We look
              forward to welcoming you into the Wingate community and sharing
              what makes our service a place where children, families and
              community belong.
            </p>
            <p>
              When you&apos;re ready to begin the enrolment process, our team
              will be there to support you every step of the way. We&apos;ll
              provide you with all the essential details, including information
              about fees, Child Care Subsidy (CCS), required documents, and how
              we&apos;ll support your child as they transition into our service.
              We&apos;ll also help you prepare for orientation, become familiar
              with daily routines, and complete our first-day checklist to
              ensure your child feels comfortable, confident, and welcomed from
              the very beginning because every moment of your child&apos;s
              journey is important.
            </p>
          </TextPanel>
        </ContentGrid>
      </Section>

      <Section data-reveal="true" data-visible="false">
        <ContentGrid>
          <TextPanel>
            <h2>Fees</h2>
            <p>
              Fees at the Centre are set by the Committee of Management and are
              subject to change, depending on the budget, with a month&apos;s
              notice. Our aim is to keep fees to a minimum while maintaining a
              high-quality service, which means that we aim to only increase
              fees once per year, with any exceptions communicated to families
              as soon as possible.
            </p>
            <p>
              No fees are charged for the closure period over Christmas/New
              Year (usually two weeks). Full fees are payable at all other
              times, including absence for sickness, public holidays or any
              other reason.
            </p>
            <p>
              Your ongoing fee will be calculated according to your days of
              enrolment plus any casual bookings you may access. Casual
              bookings are charged at the same price as your daily fee. Any
              out-of-pocket expenses will vary depending on families&apos;
              access to Childcare subsidies, including Additional Childcare
              Subsidy.
            </p>
            <p>
              As the Centre is open 11 hours a day, families&apos; CCS hours are
              based on that number, not the number of hours your child actually
              attends per day. For more information about ACCS and who is
              eligible,{" "}
              <a
                href="https://www.servicesaustralia.gov.au/how-to-apply-for-additional-child-care-subsidy?context=41866"
                target="_blank"
                rel="noreferrer"
                style={{ color: "black", textDecoration: "underline" }}
              >
                click here
              </a>
              .
            </p>
            <p>Current fees:</p>
            <p>Daily Fee: $167.70</p>
            <p>
              During the orientation process, your first 1-hour orientation is
              not charged, but any half-day orientations are charged at 1/2 the
              daily fee.
            </p>
          </TextPanel>
        </ContentGrid>
      </Section>

      <Section data-reveal="true" data-visible="false">
        <ContentGrid>
          <TextPanel>
            <h2>Child Care Subsidy (CCS)</h2>
            <p>
              Many families may be eligible to receive assistance through the
              Australian Government&apos;s Child Care Subsidy (CCS), which can
              help reduce the cost of childcare fees. The amount of CCS a
              family receives depends on individual circumstances, including
              household income, activity levels, and the type of care being
              accessed.
            </p>
            <p>
              Families are encouraged to complete their CCS assessment through
              their myGov account before commencing care to ensure their subsidy
              is ready to be applied. Our team is available to support families
              with the enrolment process and provide guidance on accessing CCS.
            </p>
          </TextPanel>
        </ContentGrid>
      </Section>
    </Main>
  );
}
