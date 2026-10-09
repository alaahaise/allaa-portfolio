import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import { cssProps } from '~/utils/style';
import styles from './more-projects.module.css';

// Add a `href` (GitHub repo, live demo...) to any project to make its card a link
const projects = [
  {
    title: 'SalesVision Dashboard',
    tag: 'Power BI dashboard',
  },
  {
    title: 'Sales Profit Analyzer',
    tag: 'Power BI dashboard',
  },
  {
    title: 'Real Estate Price Prediction',
    tag: 'Data science project',
  },
  {
    title: 'Lung Cancer Research',
    tag: 'Research project',
  },
];

export const MoreProjects = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.more}
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
            <Heading
              className={styles.title}
              data-visible={visible}
              level={3}
              id={titleId}
            >
              <DecoderText text="More projects" start={visible} delay={300} />
            </Heading>
            <Divider className={styles.divider} collapsed={!visible} collapseDelay={600} />
            <ul className={styles.grid}>
              {projects.map((project, index) => (
                <li
                  key={project.title}
                  className={styles.card}
                  data-visible={visible}
                  style={cssProps({ delay: `${400 + index * 120}ms` })}
                >
                  <div className={styles.info}>
                    <Heading level={5} as="h3" className={styles.cardTitle}>
                      {project.href ? (
                        <Link href={project.href}>{project.title}</Link>
                      ) : (
                        project.title
                      )}
                    </Heading>
                    <Text size="s" secondary>
                      {project.tag}
                    </Text>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Transition>
    </Section>
  );
};
