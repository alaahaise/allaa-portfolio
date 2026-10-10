/* eslint-disable react/jsx-no-comment-textnodes */
import itta from '~/assets/itta-tlbo.jpg';
import ittaLarge from '~/assets/itta-tlbo-large.jpg';
import ittaPlaceholder from '~/assets/itta-tlbo-placeholder.jpg';
import jobTracking from '~/assets/job-tracking.jpg';
import jobTrackingLarge from '~/assets/job-tracking-large.jpg';
import jobTrackingPlaceholder from '~/assets/job-tracking-placeholder.jpg';
import skin from '~/assets/skin-segmentation.jpg';
import skinLarge from '~/assets/skin-segmentation-large.jpg';
import skinPlaceholder from '~/assets/skin-segmentation-placeholder.jpg';
import sarima from '~/assets/sarima.jpg';
import sarimaLarge from '~/assets/sarima-large.jpg';
import sarimaPlaceholder from '~/assets/sarima-placeholder.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { MoreProjects } from './more-projects';
import { Experience } from './experience';
import { Skills } from './skills';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';
import { Button } from '~/components/button';

// Prefetch draco decoder wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: config.title,
    description: `Portfolio of ${config.fullName}, a ${config.title.toLowerCase()} specializing in optimization, modeling, development and decision-support systems.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const moreProjects = useRef();
  const experience = useRef();
  const skills = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      //moreProjects,
      experience,
      skills,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        tag="Time-series forecasting"
        title="Pharmacy-Sales-Prediction-using-SARIMA"
        description="A time series forecasting project using SARIMA to predict pharmacy sales and compare actual sales with forecasted values."
        buttonText="View on GitHub"
        buttonLink="https://github.com/alaahaise/Pharmacy-Sales-Prediction-using-SARIMA"
        //secondaryText="Details"
        //secondaryLink="/docs/skin-cancer-segmentation.pdf"
        model={{
          type: 'laptop',
          alt: 'Segmentation results: input image, ground truth, predicted probabilities and binary mask',
          textures: [
            {
              srcSet: `${sarima} 800w, ${sarimaLarge} 1920w`,
              placeholder: sarimaPlaceholder,
            },
          ],
        }}
      />
            <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        tag="Metaheuristics · Research"
        title="A hybrid ITTA–TLBO optimization algorithm"
        description="A hybrid metaheuristic benchmarked on convergence against TTA, PSO and PSO–TLBO variants"
        buttonText="Read the details"
        buttonLink="/docs/itta-tlbo.pdf"
        model={{
          type: 'laptop',
          alt: 'Convergence comparison of metaheuristic algorithms on benchmark functions',
          textures: [
            {
              srcSet: `${itta} 800w, ${ittaLarge} 1920w`,
              placeholder: ittaPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        tag="Deep learning · Optimization"
        title="Skin cancer lesion segmentation"
        description="A U-Net model that segments skin lesions in dermoscopic images, tuned with the hybrid ITTA–TLBO optimization algorithm"
        buttonText="View on GitHub"
        buttonLink="https://github.com/alaahaise/-Skin-Cancer-Lesion-Segmentation-with-U-Net-ITTA-TLBO-Optimization/"
        secondaryText="Details"
        secondaryLink="/docs/skin-cancer-segmentation.pdf"
        model={{
          type: 'laptop',
          alt: 'Segmentation results: input image, ground truth, predicted probabilities and binary mask',
          textures: [
            {
              srcSet: `${skin} 800w, ${skinLarge} 1920w`,
              placeholder: skinPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectOne.current)}
        index={4}
        tag="Power BI · Data visualization"
        title="Job application tracking"
        description="Data preparation and a Power BI dashboard analyzing applicants, shortlists, rejections and vacancies"
        buttonText="View on GitHub"
        buttonLink="https://github.com/alaahaise/JobAppTracking"
        secondaryText="Details"
        secondaryLink="/docs/job-application-tracking.pdf"
        model={{
          type: 'laptop',
          alt: 'Job application analysis dashboard built with Power BI',
          textures: [
            {
              srcSet: `${jobTracking} 800w, ${jobTrackingLarge} 1920w`,
              placeholder: jobTrackingPlaceholder,
            },
          ],
        }}
      />

      {/* <MoreProjects
        id="more-projects"
        sectionRef={moreProjects}
        visible={visibleSections.includes(moreProjects.current)}
      />*/}  
      <Experience
        id="experience"
        sectionRef={experience}
        visible={visibleSections.includes(experience.current)}
      />
      <Skills
        id="skills"
        sectionRef={skills}
        visible={visibleSections.includes(skills.current)}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
