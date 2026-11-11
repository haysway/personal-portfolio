function AboutPage() {
    return (
        <section className="about-page">
            <h1>About me</h1>
            <h2 className="about-section-title">Education</h2>
            <p><strong>Weber State University -</strong> Graduating with a bachelors in Computer Science in December of 2026</p>
            <h3 className="about-subtitle">Relevant coursework</h3>
            <ul className="about-coursework">
                <li>Data Structures and Algorithms</li>
                <li>Operating Systems</li>
                <li>Database Systems</li>
                <li>Computer Graphics</li>
            </ul>
            <h3 className="about-subtitle">Skills</h3>
            <ul className="about-skills">
                <li>Python</li>
                <li>C++</li>
                <li>React</li>
                <li>Qt</li>
                <li>CMake</li>
                <li>Conan</li>
                <li>Conda</li>
                <li>Artifactory</li>
                <li>Git</li>
                <li>Docker</li>
                <li>Nginx</li>
                <li>MySQL</li>
            </ul>
            <h3 className="about-experience-title">Work experience</h3>
            <p className="about-role"><strong>Northrop Grumman</strong> <i>Software Engineering Intern</i></p>
            <p className="about-responsibilities"><strong className="about-date">June 2026 - Present</strong>
            <br />Designed and implemented an automated update framework for internal desktop applications, 
supporting version detection, downloads, and in-place installation.
            <br />Developed reusable C++ and Python update libraries to simplify integration across applications using 
different technology stacks.
            <br />Designed and built a working prototype of a standardized deployment and package-hosting system to 
streamline software distribution across an internal application suite.
            <br />Authored technical documentation and an implementation roadmap to support adoption of the 
update framework across additional applications and programming languages. </p>
        </section>
    );
}

export default AboutPage;