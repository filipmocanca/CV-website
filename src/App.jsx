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
              <img src="/profile.jpg" alt="Filip Mocanca" />
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
            <div className="lang-level">A2 — Pre-Intermediate</div>
            <div className="lang-bar-bg"><div className="lang-bar" style={{ width: '35%' }}></div></div>
          </div>
          <div className="lang-card">
            <div className="lang-name">German</div>
            <div className="lang-level">A1 — Beginner</div>
            <div className="lang-bar-bg"><div className="lang-bar" style={{ width: '15%' }}></div></div>
          </div>
          <div className="lang-card">
            <div className="lang-name">Luxembourgish</div>
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
            <div className="cert-icon">🎓</div>
            <div>
              <div className="cert-name">Vibe Coding – Create your own web app</div>
              <div className="cert-detail">Digital Learning Hub Luxembourg</div>
            </div>
          </div>
          <div className="cert-item">
            <div className="cert-icon">🛡️</div>
            <div>
              <div className="cert-name">DevOps and Pipeline Security</div>
              <div className="cert-detail">Digital Learning Hub Luxembourg</div>
            </div>
          </div>
          <div className="cert-item">
            <div className="cert-icon">🤖</div>
            <div>
              <div className="cert-name">AI Foundations training session: Mastering the Essentials in Math and Python</div>
              <div className="cert-detail">Digital Learning Hub Luxembourg</div>
            </div>
          </div>
          <div className="cert-item">
            <div className="cert-icon">🚢</div>
            <div>
              <div className="cert-name">Orchestrate your applications with Kubernetes</div>
              <div className="cert-detail">Digital Learning Hub Luxembourg</div>
            </div>
          </div>
          <div className="cert-item">
            <div className="cert-icon">🚀</div>
            <div>
              <div className="cert-name">Pipeline deployment with Gitops</div>
              <div className="cert-detail">Digital Learning Hub Luxembourg</div>
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
