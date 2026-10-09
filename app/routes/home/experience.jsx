import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import { cssProps } from '~/utils/style';
import styles from './experience.module.css';

const experience = [
  {
    period: 'Feb 2025 – Apr 2025',
    role: 'Intern – IT Management Department',
    company: 'Giplait – La Source Dairy, Saïda, Algeria',
    points: [
      'Modeled the production cost function for milk powder.',
      'Applied a metaheuristic optimization algorithm in MATLAB.',
      'Developed a decision-support optimization system.',
    ],
  },
  {
    period: 'Apr 2024 – May 2024',
    role: 'Intern – IT Management Department',
    company: 'Algerian Cement Industrial Group, Saïda, Algeria',
    points: [
      'BPMN modeling of a process: corrective maintenance management.',
      'Management and monitoring of the IT infrastructure with GLPI.',
    ],
  },
  {
    period: 'Jan 2024 – Feb 2024',
    role: 'Intern – IT Solutions Department',
    company: 'CHIALI SERVICES, Sidi Bel Abbès, Algeria',
    points: [
      'Designed a real-time server and connectivity monitoring system using UML.',
      'Developed the associated web application.',
    ],
  },
  {
    period: 'Mar 2023 – Apr 2023',
    role: 'Intern – IT Management Department',
    company: 'Algerian Cement Industrial Group, Saïda, Algeria',
    points: [
      'Developed HR reports and dashboards in Power BI, using star schema modeling to support advanced data analysis.',
    ],
  },
  {
    period: 'Dec 2022 – Jan 2023',
    role: 'Intern – Information Systems and Management Department',
    company: 'Sonatrach, GP1Z Zone, Oran, Algeria',
    points: [
      'Gained hands-on experience in network and database architecture.',
      'Practiced database administration with Oracle DBMS.',
    ],
  },
];

const education = [
  {
    period: '2022 – 2025',
    role: 'Engineering Degree in Information Systems Engineering and Management',
    company: 'National Polytechnic School of Oran – Maurice Audin',
    href: 'https://www.enp-oran.dz/en/',
  },
  {
    period: '2020 – 2022',
    role: 'Entrance Exam for the Second Cycle of Engineering',
    company: 'Higher School of Electrical and Energy Engineering of Oran',
    href: 'https://esgee-oran.dz/new/',
  },
  {
    period: '2020',
    role: 'Baccalaureate, Mathematics',
    company: 'Directorate of Education, Saïda',
  },
];

const Item = ({ item, index, visible }) => (
  <li
    className={styles.item}
    data-visible={visible}
    style={cssProps({ delay: `${400 + index * 120}ms` })}
  >
    <span className={styles.period}>{item.period}</span>
    <Heading level={5} as="h4" className={styles.role}>
      {item.role}
    </Heading>
    <Text size="s" className={styles.company} secondary>
      {item.href ? <Link href={item.href}>{item.company}</Link> : item.company}
    </Text>
    {item.points && (
      <ul className={styles.points}>
        {item.points.map(point => (
          <li key={point}>
            <Text size="s" as="span">
              {point}
            </Text>
          </li>
        ))}
      </ul>
    )}
  </li>
);

export const Experience = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.experience}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <Heading
                className={styles.title}
                data-visible={visible}
                level={3}
                id={titleId}
              >
                <DecoderText text="Experience" start={visible} delay={300} />
              </Heading>
              <Divider
                className={styles.divider}
                collapsed={!visible}
                collapseDelay={600}
              />
              <ol className={styles.list}>
                {experience.map((item, index) => (
                  <Item key={item.period} item={item} index={index} visible={visible} />
                ))}
              </ol>
            </div>
            <div className={styles.column}>
              <Heading
                className={styles.title}
                data-visible={visible}
                level={3}
                as="h3"
              >
                <DecoderText text="Education" start={visible} delay={500} />
              </Heading>
              <Divider
                className={styles.divider}
                collapsed={!visible}
                collapseDelay={800}
              />
              <ol className={styles.list}>
                {education.map((item, index) => (
                  <Item key={item.period} item={item} index={index} visible={visible} />
                ))}
              </ol>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
