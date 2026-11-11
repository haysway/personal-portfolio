import profileImage from '../assets/me.jpg';
import resumeUrl from '../assets/resume.pdf';

function HomePage() {
  return (
    <section>
      <h1>Personal Portfolio</h1>
      <div className="profile-photo-wrap">
        <img src={profileImage} alt="Hayden Swain-Schmit" className="profile-picture" />
      </div>
      <p>
        I'm Hayden Swain-Schmit, a Computer Science student at Weber State University, graduating with my bachelor's degree in December 2026. I currently work part-time at Northrop Grumman, where I develop computational software supporting ballistic analysis.
        I'm interested in building software, exploring new technologies, and understanding how things work under the hood. I enjoy tackling unfamiliar problems, learning new frameworks and tools, and expanding my skill set through hands-on projects. I'm always looking for opportunities to take on new challenges and turn what I learn into something useful.
      </p>

      <div className="home-actions">
        <a
          className="home-action-link"
          href="https://github.com/haysway"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="home-action-link home-resume-link"
          href={resumeUrl}
          download="Hayden-Swain-Schmit-Resume.pdf"
        >
          Download resume
        </a>
      </div>
    </section>
  );
}

export default HomePage;