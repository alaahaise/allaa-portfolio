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
    title: 'Development',
    items: [
      { name: 'Java', icon: 'java.png' },
      { name: 'Express.js' },
      { name: 'Electron.js' },
      { name: 'Vue.js' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
      { name: 'Git / GitHub', icon: 'git.png' },
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
    title: 'Data & BI',
    items: [
      { name: 'Python / Pandas', icon: 'python.png' },
      { name: 'Power BI', icon: 'powerbi.png' },
      { name: 'Dimensional modeling' },
    ],
  },
  {
    title: 'Data science',
    items: [{ name: 'ARIMA / SARIMA' }, { name: 'XGBoost' }, { name: 'U-Net' }],
  },
  {
    title: 'Management & IS',
    items: [
      { name: 'BPMN' },
      { name: 'UML' },
      { name: 'GLPI', icon: 'glpi.png' },
      { name: 'Odoo', icon: 'odoo.png' },
      { name: 'MS Project', icon: 'msproject.png' },
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      { name: 'Network configuration' },
      { name: 'Operating systems' },
      { name: 'IS administration' },
    ],
  },
  {
    title: 'Certifications',
    items: [{ name: 'ITIL v4' }, { name: 'CCNA 1' }, { name: 'Data Analytics' }],
  },
  {
    title: 'Languages',
    items: [
      { name: 'Arabic – native' },
      { name: 'English – advanced' },
      { name: 'French – intermediate' },
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
                        {item.icon && (
                          <span className={styles.iconBox}>
                            <img
                              src={`/skills/${item.icon}`}
                              alt=""
                              loading="lazy"
                              width="28"
                              height="28"
                            />
                          </span>
                        )}
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
