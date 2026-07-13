import { peoplePage, teamMembers } from '../content/siteContent';

export default function OurPeople() {
  return (
    <main className="page-shell">
      <section className="page-hero" aria-label="Our People page header">
        <div className="container">
          <p className="page-eyebrow">Wingate Childcare Co-operative</p>
          <h1>{peoplePage.title}</h1>
          <p className="page-intro">{peoplePage.intro}</p>
        </div>
      </section>

      <section id="team" className="page-section">
        <div className="container">
          <h2>Team</h2>
          <p>
            Wingate&apos;s management structure includes the Committee of Management, Centre Director,
            Administrator/Educational Leader, room leaders, and centre teams working collaboratively.
          </p>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article key={`${member.name}-${member.role}`} className="team-card">
                <img src={member.image} alt={`${member.name} at Wingate Childcare`} />
                <div className="team-card__body">
                  <h3>{member.name}</h3>
                  <p className="card-eyebrow">{member.role}</p>
                  <p>{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
