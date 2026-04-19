import { useState, useEffect } from 'react';

const JobCard = ({ role, company, meta, details, tags }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`job-card ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="job-header">
        <div className="job-dot"></div>
        <div className="job-main">
          <div className="job-title-line">
            <span className="job-role">{role}</span>
            <span className="job-company">{company}</span>
          </div>
          <div className="job-meta">{meta}</div>
        </div>
        <div className="job-toggle">▾</div>
      </div>
      <div className="job-body">
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <div className="tech-tags">
          {tags.map((tag, index) => (
            <span className="tech-tag" key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  useEffect(() => {
    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 60);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));

    // Active nav on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    
    const handleScroll = () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav>
        <a href="#about" className="active">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#languages">Languages</a>
        <a href="#certs">Certs</a>
        <a href="#other">Other</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="hero" style={{ paddingTop: '90px' }}>
        <div className="hero-bg-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-label">Portfolio &amp; Resume</div>
            <h1>Filip<br /><span>Mocanca</span></h1>
            <div className="hero-title">Senior DevSecOps Engineer</div>
            <div className="hero-sub"><em>20 years in IT working for prestigious companies</em></div>
            <div className="hero-chips">
              <span className="chip">Linux / RHEL</span>
              <span className="chip">CI/CD Pipelines</span>
              <span className="chip">Azure Cloud</span>
              <span className="chip">Ansible</span>
              <span className="chip">Docker</span>
              <span className="chip">Kafka</span>
              <span className="chip">Monitoring</span>
              <span className="chip">Security Hardening</span>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="photo-ring">
              <img src="data:image/jpeg;base64,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" alt="Filip Mocanca" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}></div>

      <section id="about">
        <div className="section-label reveal">About Me</div>
        <h2 className="reveal">Who I <em>Am</em></h2>
        <p className="about-text reveal">
          I am a <strong>System DevSecOps Engineer</strong> with over 20 years of experience across diverse sectors — from investment banking and insurance to European institutions and satellite telecoms. I am especially keen on <strong>automation, CI/CD pipelines, and cloud infrastructure</strong>, with a track record of improving release processes and troubleshooting complex production issues using modern monitoring tools.
          <br /><br />
          Being involved in technology that is present everywhere has offered me the opportunity to work in different teams with <strong>varied organizational cultures</strong>, building resilience, adaptability, and deep technical expertise along the way.
        </p>
      </section>

      <div className="divider" style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}></div>

      <section id="experience">
        <div className="section-label reveal">Career</div>
        <h2 className="reveal">Work <em>Experience</em></h2>
        <div className="timeline reveal">
          <JobCard 
            role="Linux DevSecOps Engineer"
            company="RCUBE"
            meta="Jan 2025 – Dec 2025 · Luxembourg"
            details={[
              "Migration from Red Hat Linux 7 to version 8, ensuring application functionality post-migration.",
              "Collaborating with the Web team to re-deploy containerized applications after each new server setup.",
              "Deploying new VMs on RHEL 9 for the Web team and configuring applications per requirements.",
              "Decommissioning servers and deploying VMs for MongoDB infrastructure.",
              "Troubleshooting replication issues in Elasticsearch/Kibana cluster (on-prem).",
              "Renewing SSL certificates and migrating RabbitMQ to RHEL 8.",
              "Managing Kafka cluster deployment with 3 replication nodes per environment, working with an IT architect.",
              "Supporting Development, IT Application, and Database teams with incident and request resolution."
            ]}
            tags={["RHEL 8/9", "AWX", "GIT", "RabbitMQ", "Kafka", "Gitlab", "PRTG", "Grafana", "Docker"]}
          />
          <JobCard 
            role="Senior DevSecOps Engineer"
            company="RCUBE"
            meta="May 2024 – Dec 2024 · Luxembourg"
            details={[
              "Implemented CI/CD pipelines for integration/deployment of two Energy market applications.",
              "Coordinated delivery by liaising between a Development company, Infrastructure company, and internal Testing team.",
              "Implemented a newly adopted monitoring solution: enrolled elements, created visualisations, and collaborated with the provider."
            ]}
            tags={["TeamCity", "Github Actions", "Ansible", "Elasticsearch", "Kibana", "PostgreSQL", "MSSQL", "Linux", "Windows"]}
          />
          <JobCard 
            role="Senior DevOps System Engineer"
            company="Business & ICT"
            meta="Oct 2023 – Apr 2024 · Luxembourg"
            details={[
              "Automated Cloud infrastructure tasks and improved servers/applications configuration.",
              "Implemented SAP stop/start services using systemd.",
              "Reduced monitoring alerts and created scripts to generate infrastructure change reports.",
              "Led Linux server security hardening project."
            ]}
            tags={["RHEL", "Azure Cloud", "Azure DevOps", "ServiceNow", "CheckMK"]}
          />
          <JobCard 
            role="DevOps & System Cloud Engineer"
            company="Banking Circle"
            meta="May 2022 – Sep 2023 · Luxembourg · Banking"
            details={[
              "Managed bank cloud infrastructure, application deployments, releases, and system patching/hardening.",
              "Implemented security standards per CSSF requirements while maintaining application health.",
              "Led POC and implementation of Dynatrace monitoring infrastructure.",
              "Set up Azure pipelines for application build and deployment; configured Flyway for database deployments.",
              "Developed Ansible automation for continuous configuration persistence."
            ]}
            tags={["Azure", "Oracle Linux", "Weblogic", "Dynatrace", "Ansible", "Docker", "Terraform", "PRTG", "Flyway"]}
          />
          <JobCard 
            role="Linux & Application Engineer"
            company="European Parliament"
            meta="Mar 2021 – Apr 2022 · Luxembourg · European Institution"
            details={[
              "Supported deployment and release process of the application storing European officials' data.",
              "Upgraded and set up new flows in the Document Conversion application.",
              "Updated SSL certificates and set up systemd scripts.",
              "Led bulk data migration from legacy system to the new platform."
            ]}
            tags={["CentOS", "Oracle", "Python", "Ansible", "Apache", "Tomcat", "NGINX", "SSL"]}
          />
          <JobCard 
            role="DevOps Engineer"
            company="SES"
            meta="Feb 2020 – Feb 2021 · Luxembourg · Telecoms/Satellite"
            details={[
              "Built and supported testing and production environments for satellite applications.",
              "Configured end-to-end DevOps toolchain for deployment, testing, and monitoring.",
              "Automated database backups/restores and participated in Azure cloud migration."
            ]}
            tags={["CentOS", "Debian", "PostgreSQL", "Jenkins", "Zabbix", "Grafana", "Docker", "Azure", "Graylog"]}
          />
          <JobCard 
            role="Deployment & Application Support Engineer"
            company="Baloise"
            meta="Oct 2018 – Dec 2019 · Luxembourg · Insurance"
            details={[
              "Provided application support for a major insurance company; set up data flows with external banking partners.",
              "Implemented CI/CD pipelines for company applications.",
              "Monitored system health and improved monitoring systems."
            ]}
            tags={["PowerShell", "Jenkins", "Zabbix", "Microservices", "Tomcat", "Oracle", "MSSQL"]}
          />
          <JobCard 
            role="System Engineer (Level 3)"
            company="Computer Resources International · EU-LISA"
            meta="Apr 2017 – Sep 2018 · Strasbourg, France · IT Security"
            details={[
              "L3 support on Production systems for the Schengen system (EU-LISA).",
              "Maintained non-production environments; cooperated with Test, Dev, and Production support teams.",
              "Contributed to AFIS system project: built environment, set up monitoring, tested components.",
              "Fine-tuned ICINGA checks; prepared documentation and held end-user trainings."
            ]}
            tags={["RHEL", "Oracle", "Icinga", "RabbitMQ", "Puppet", "Weblogic", "VMware"]}
          />
          <JobCard 
            role="Integration & Validation Engineer"
            company="Gemalto"
            meta="Sep 2015 – Mar 2017 · Prague, Czechia · Digital Security"
            details={[
              "Deployed and configured application infrastructure for governmental programmes.",
              "Tested solutions for functionality, performance, and high availability.",
              "Managed Oracle 12C/MySQL, JBOSS/Tomcat, Java and .NET application deployments.",
              "Set up hardware connectivity (printers, scanners, card readers) and client/server certificates."
            ]}
            tags={["RHEL Cluster", "JBOSS EAP", "Tomcat", "Oracle 12c", "ActiveMQ", "Jenkins"]}
          />
          <JobCard 
            role="Change & Release Manager"
            company="Barclays Capital Services"
            meta="May 2013 – Aug 2015 · Prague, Czechia · Investment Banking"
            details={[
              "Managed releases for Reference Data applications; built and managed test environments.",
              "Coordinated release planning and supported Production during deployments.",
              "Cross-platform work (Windows and Linux); resolved post-release issues."
            ]}
            tags={["TeamCity", "Oracle", "MSSQL", "Weblogic", "TIBCO", "ITIL"]}
          />
          <JobCard 
            role="Unix Applications Support"
            company="Deutsche Börse Services"
            meta="Feb 2011 – Apr 2013 · Prague, Czechia"
            details={[
              "Built test environments, installed and configured web and classic applications.",
              "Settled Implementation Team in Prague; transferred activities from Luxembourg."
            ]}
            tags={["RHEL", "Solaris", "Oracle", "Weblogic", "Perl"]}
          />
          <JobCard 
            role="Application Support & Batch Management"
            company="IBM GSDC"
            meta="Jun 2006 – Jan 2011 · Brno, Czechia · IT Services"
            details={[
              "Production environment support for major French customers; incident and change management across Linux and Windows.",
              "Implemented TEC console alerts for failed Dollar Universe jobs.",
              "Led Transfer Projects both on-site and remotely, establishing processes for quality service delivery."
            ]}
            tags={["AIX", "HP-UX", "TWS", "Dollar Universe", "Oracle", "KSH"]}
          />
        </div>
      </section>

      <div className="divider" style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}></div>

      <section id="skills">
        <div className="section-label reveal">Expertise</div>
        <h2 className="reveal">Job-Related <em>Skills</em></h2>
        <div className="skills-grid reveal">
          <div className="skill-card">
            <div className="skill-card-title">Operating Systems</div>
            <div className="tag-cloud">
              <span className="stag">RHEL</span><span className="stag">CentOS</span><span className="stag">Oracle Linux</span>
              <span className="stag">Debian</span><span className="stag">Ubuntu</span><span className="stag">HP-Unix</span>
              <span className="stag">Solaris</span><span className="stag">AIX</span><span className="stag">Windows Server</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-title">Cloud Providers</div>
            <div className="tag-cloud">
              <span className="stag">Microsoft Azure</span><span className="stag">AWS</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-title">CI/CD Tools</div>
            <div className="tag-cloud">
              <span className="stag">Azure Pipelines</span><span className="stag">Jenkins</span><span className="stag">TeamCity</span>
              <span className="stag">Github Actions</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-title">Config Management</div>
            <div className="tag-cloud">
              <span className="stag">Ansible</span><span className="stag">Puppet</span><span className="stag">AWX</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-title">Monitoring</div>
            <div className="tag-cloud">
              <span className="stag">Dynatrace</span><span className="stag">PRTG</span><span className="stag">Nagios</span>
              <span className="stag">Zabbix</span><span className="stag">Grafana</span><span className="stag">CheckMK</span>
              <span className="stag">Icinga</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-title">Message Brokers</div>
            <div className="tag-cloud">
              <span className="stag">Kafka</span><span className="stag">RabbitMQ</span><span className="stag">ActiveMQ</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-title">Databases</div>
            <div className="tag-cloud">
              <span className="stag">PostgreSQL</span><span className="stag">Oracle</span>
              <span className="stag">MSSQL</span><span className="stag">MySQL</span><span className="stag">MongoDB</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-title">Containers</div>
            <div className="tag-cloud">
              <span className="stag">Docker</span><span className="stag">Docker Compose</span><span className="stag">Podman</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-title">Scripting</div>
            <div className="tag-cloud">
              <span className="stag">Bash</span><span className="stag">Python</span><span className="stag">PowerShell</span>
              <span className="stag">KSH</span><span className="stag">Perl</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-title">Versioning</div>
            <div className="tag-cloud">
              <span className="stag">GIT</span><span className="stag">GitLab</span><span className="stag">GitHub</span>
              <span className="stag">SVN</span><span className="stag">Perforce</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-title">Middleware & Webservers</div>
            <div className="tag-cloud">
              <span className="stag">Weblogic</span><span className="stag">JBOSS</span><span className="stag">Tomcat</span>
              <span className="stag">Apache</span><span className="stag">NGINX</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-title">Log Management</div>
            <div className="tag-cloud">
              <span className="stag">Graylog</span><span className="stag">rsyslog</span>
              <span className="stag">Elasticsearch</span><span className="stag">Kibana</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-title">Security</div>
            <div className="tag-cloud">
              <span className="stag">SSL/TLS</span><span className="stag">LDAP</span>
              <span className="stag">Microsoft PKI</span><span className="stag">Security Hardening</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-title">ITSM & Tracking</div>
            <div className="tag-cloud">
              <span className="stag">JIRA</span><span className="stag">ServiceNow</span>
              <span className="stag">Redmine</span><span className="stag">Agile</span><span className="stag">ITIL</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}></div>

      <section id="languages">
        <div className="section-label reveal">Communication</div>
        <h2 className="reveal">Language <em>Skills</em></h2>
        <div className="lang-grid reveal">
          <div className="lang-card">
            <div className="lang-name">Romanian</div>
            <div className="lang-level">Mother tongue</div>
            <div className="lang-bar-bg"><div className="lang-bar" style={{ width: '100%' }}></div></div>
          </div>
          <div className="lang-card">
            <div className="lang-name">English</div>
            <div className="lang-level">C1 — Advanced</div>
            <div className="lang-bar-bg"><div className="lang-bar" style={{ width: '88%' }}></div></div>
          </div>
          <div className="lang-card">
            <div className="lang-name">French</div>
            <div className="lang-level">B2 — Upper Intermediate</div>
            <div className="lang-bar-bg"><div className="lang-bar" style={{ width: '70%' }}></div></div>
          </div>
          <div className="lang-card">
            <div className="lang-name">Czech</div>
            <div className="lang-level">B1 — Intermediate</div>
            <div className="lang-bar-bg"><div className="lang-bar" style={{ width: '52%' }}></div></div>
          </div>
          <div className="lang-card">
            <div className="lang-name">German</div>
            <div className="lang-level">A1 — Beginner</div>
            <div className="lang-bar-bg"><div className="lang-bar" style={{ width: '15%' }}></div></div>
          </div>
        </div>
      </section>

      <div className="divider" style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}></div>

      <section id="certs">
        <div className="section-label reveal">Credentials</div>
        <h2 className="reveal">Trainings &amp; <em>Certifications</em></h2>
        <div className="cert-list reveal">
          <div className="cert-item">
            <div className="cert-icon">🏅</div>
            <div>
              <div className="cert-name">ITIL® Foundation Certificate in IT Service Management</div>
              <div className="cert-detail">Issued Nov 2021 · Credential ID: GR671336768FM</div>
            </div>
          </div>
          <div className="cert-item">
            <div className="cert-icon">🖥️</div>
            <div>
              <div className="cert-name">Oracle Database 11g: Administration Workshop I DBA</div>
              <div className="cert-detail">Oracle Certification</div>
            </div>
          </div>
          <div className="cert-item">
            <div className="cert-icon">🐧</div>
            <div>
              <div className="cert-name">AIX 5L System Administration & Basics</div>
              <div className="cert-detail">AU14G / AU13G — IBM Courses</div>
            </div>
          </div>
          <div className="cert-item">
            <div className="cert-icon">🔍</div>
            <div>
              <div className="cert-name">IBM Tivoli Enterprise Console & Monitoring for Operators</div>
              <div className="cert-detail">TM08G / TV28G — IBM Courses</div>
            </div>
          </div>
          <div className="cert-item">
            <div className="cert-icon">⏱️</div>
            <div>
              <div className="cert-name">Tivoli Workload Scheduler Administration & Operations</div>
              <div className="cert-detail">TX25 / TX30 — IBM Courses</div>
            </div>
          </div>
          <div className="cert-item">
            <div className="cert-icon">💻</div>
            <div>
              <div className="cert-name">AIX Korn Shell & BASH Programming</div>
              <div className="cert-detail">AU23 — IBM Course</div>
            </div>
          </div>
          <div className="cert-item">
            <div className="cert-icon">📜</div>
            <div>
              <div className="cert-name">MOC#2433 — Microsoft Visual Basic Scripting Edition & WSH Essentials</div>
              <div className="cert-detail">Microsoft Official Course</div>
            </div>
          </div>
          <div className="cert-item">
            <div className="cert-icon">🎓</div>
            <div>
              <div className="cert-name">BSc in Computer Science Applied in Management</div>
              <div className="cert-detail">Romanian-American University, Bucharest · 2002–2006</div>
            </div>
          </div>
          <div className="cert-item">
            <div className="cert-icon">🏦</div>
            <div>
              <div className="cert-name">Investment Banking Business Knowledge</div>
              <div className="cert-detail">Cash Equities · Foreign Exchange · Hedge Funds · Futures · Bonds</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}></div>

      <section id="other">
        <div className="section-label reveal">Soft Skills</div>
        <h2 className="reveal">Other <em>Skills</em></h2>
        <div className="soft-list reveal">
          <span className="soft-tag">Communication</span>
          <span className="soft-tag">Personal Development</span>
          <span className="soft-tag">Time Management</span>
          <span className="soft-tag">Positive Thinking</span>
          <span className="soft-tag">Goal-Oriented</span>
          <span className="soft-tag">Motivated</span>
          <span className="soft-tag">Cross-Team Collaboration</span>
          <span className="soft-tag">Knowledge Transfer</span>
          <span className="soft-tag">Stakeholder Management</span>
          <span className="soft-tag">Adaptability</span>
        </div>
      </section>

      <div className="divider" style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}></div>

      <section id="contact">
        <div className="section-label reveal">Get in Touch</div>
        <h2 className="reveal"><em>Contact</em> Me</h2>
        <div className="contact-grid reveal">
          <a className="contact-card" href="mailto:filip.mocanca@gmail.com">
            <div className="contact-icon">✉️</div>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value">filip.mocanca@gmail.com</div>
            </div>
          </a>
          <a className="contact-card" href="tel:+33767188797">
            <div className="contact-icon">📞</div>
            <div>
              <div className="contact-label">Phone (Mobile)</div>
              <div className="contact-value">+33 7 67 18 87 97</div>
            </div>
          </a>
          <a className="contact-card" href="https://wa.me/33767188797" target="_blank" rel="noopener noreferrer">
            <div className="contact-icon">💬</div>
            <div>
              <div className="contact-label">WhatsApp</div>
              <div className="contact-value">+33-767188797</div>
            </div>
          </a>
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <div>
              <div className="contact-label">Location</div>
              <div className="contact-value">Luxembourg, Luxembourg</div>
            </div>
          </div>
        </div>
        <div className="contact-msg reveal">
          Please contact me via all the mentioned communication channels. <strong>I am open for collaborations as employee or freelance.</strong>
        </div>
      </section>

      <footer>
        <p>© 2025 Filip Mocanca · Senior DevSecOps Engineer · Luxembourg</p>
      </footer>
    </>
  );
}

export default App;
