import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import { cssProps } from '~/utils/style';
import styles from './skills.module.css';

const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', icon: 'java.png' },
      { name: 'Python', icon: 'python.png' },
      { name: 'PHP', icon: 'php.png' },
      { name: 'HTML', icon: 'html.png' },
      { name: 'CSS', icon: 'css.png' },
      { name: 'JavaScript', icon: 'javascript.png' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'Oracle', icon: 'oracle.png' },
      { name: 'PostgreSQL', icon: 'postgres.png' },
      { name: 'MySQL', icon: 'mysql.png' },
      { name: 'MongoDB', icon: 'mongo.svg' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'Django', icon: 'django.png' },
      { name: 'Odoo ERP', icon: 'odoo.png' },
      { name: 'Spring Boot', icon: 'springboot.png' },
    ],
  },
  {
    title: 'Data & Software',
    items: [
      { name: 'Power BI', icon: 'powerbi.png' },
      { name: 'MATLAB', icon: 'matlab.png' },
      { name: 'Excel', icon: 'excel.png' },
      { name: 'MS Project', icon: 'msproject.png' },
      { name: 'GLPI', icon: 'glpi.png' },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'Git / GitHub', icon: 'git.png' },
      { name: 'Firebase', icon: 'firebase.png' },
      { name: 'Jira', icon: 'jira.png' },
      { name: 'Canva', icon: 'canva.svg' },
    ],
  },
];

export const Skills = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.skills}
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
              <DecoderText text="Skills & tools" start={visible} delay={300} />
            </Heading>
            <Divider className={styles.divider} collapsed={!visible} collapseDelay={600} />
            <div className={styles.groups}>
              {skillGroups.map((group, index) => (
                <div
                  key={group.title}
                  className={styles.group}
                  data-visible={visible}
                  style={cssProps({ delay: `${400 + index * 120}ms` })}
                >
                  <Text size="s" className={styles.groupTitle}>
                    {group.title}
                  </Text>
                  <ul className={styles.icons}>
                    {group.items.map(item => (
                      <li key={item.name} className={styles.icon}>
                        <span className={styles.iconBox}>
                          <img
                            src={`/skills/${item.icon}`}
                            alt=""
                            loading="lazy"
                            width="28"
                            height="28"
                          />
                        </span>
                        <Text size="s" as="span" className={styles.iconName}>
                          {item.name}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
