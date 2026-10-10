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
    period: 'Jul 2026 – Present',
    role: 'Information Systems Engineer',
    company: 'CASPM – Mers El Hadjadj, Algeria',
    points: [
      'Business process modeling.',
      'Software development with Node.js and Electron.js, including attendance management (replacing ZKTeco) and stock management.',
      'Built dynamic dashboards in Power BI.',
      'Maintained company software and databases and resolved day-to-day incidents.',
    ],
  },
  {
    period: 'Apr 2026 – Jun 2026',
    role: 'Information Systems Engineer',
    company: 'Kabima Fourniture – Oran, Algeria',
    points: [
      'Installed and configured equipment, networks and systems (e.g. NAS).',
      'Developed internal tools.',
      'Managed technical purchasing: sourcing, tenders, IT and electrical equipment, quality control and delivery follow-up.',
    ],
  },
  {
    period: 'Mar 2025 – Apr 2025',
    role: 'Intern – IT Management Department',
    company: 'Giplait – La Source Dairy, Saïda, Algeria',
    points: [
      'Designed a decision-support system (DSS) for production optimization using metaheuristic algorithms, notably TLBO and TTA.',
    ],
  },
  {
    period: 'Apr 2024 – May 2024',
    role: 'Intern – IT Management Department',
    company: 'Algerian Cement Industrial Group (GICA), Saïda, Algeria',
    points: ['BPMN modeling of corrective maintenance.', 'IT asset management with GLPI.'],
  },
  {
    period: 'Jan 2024 – Feb 2024',
    role: 'Intern – IT Solutions Department',
    company: 'CHIALI SERVICES, Sidi Bel Abbès, Algeria',
    points: ['UML design and development of a server monitoring application.'],
  },
  {
    period: 'Mar 2023 – Apr 2023',
    role: 'Intern – IT Management Department',
    company: 'Algerian Cement Industrial Group (GICA), Saïda, Algeria',
    points: ['Interactive HR dashboards in Power BI (star schema).'],
  },
  {
    period: 'Dec 2022 – Jan 2023',
    role: 'Intern – IT & Management Department',
    company: 'Sonatrach (GP1Z Zone), Oran, Algeria',
    points: ['Introduction to industrial networks and Oracle database administration.'],
  },
];

const education = [
  {
    period: '2022 – 2025',
    role: "State Engineering Degree & Master's in Information Systems Engineering and Management",
    company: 'National Polytechnic School Maurice Audin, Oran, Algeria',
    href: 'https://www.enp-oran.dz/en/',
    points: [
      'Final-year thesis: Optimization of metaheuristic algorithms and applications in different domains.',
    ],
  },
  {
    period: '2020 – 2022',
    role: 'Preparatory Cycle in Science and Technology',
    company: 'Higher School of Electrical and Energy Engineering of Oran, Algeria',
    href: 'https://esgee-oran.dz/new/',
    points: ['Preparatory training for engineering studies.'],
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
