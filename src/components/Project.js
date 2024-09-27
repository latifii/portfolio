import React from "react";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { techLogoMap } from "../data/skillData";

const Project = ({ image, title, desc, demo, github, tech, development }) => {
  return (
    <Card className="portfolio__project">
      {image.length > 1 ? (
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="project-carousel"
          containerClass="carousel-container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {image.map((item, i) => {
            return (
              <img
                key={`image-${i}`}
                src={item}
                className="portfolio__project-image"
                alt="projects pic"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
              />
            );
          })}
        </Carousel>
      ) : (
        <img
          src={image[0]}
          alt="projects pic"
          className="portfolio__project-image"
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
            objectFit: "cover",
          }}
        />
      )}
      <h4>{title}</h4>
      <p>{desc}</p>
      <div className="portfolio__project-tech">
        {tech.map((techName, i) => (
          <img
            key={`tech-${i}`}
            src={techLogoMap[techName]}
            alt={`${techName} logo`}
            title={techName}
            style={{
              width: "25px",
              height: "25px",
              marginRight: "10px",
              objectFit: "fill",
            }}
          />
        ))}
      </div>
      <div className="portfolio__project-cta">
        {development ? (
          <button className="btn sm disabled" disabled>
            Under Development
          </button>
        ) : (
          <a
            href={demo}
            className="btn sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
        )}
        {github && (
          <a
            href={github}
            className="btn sm primary"
            target="_blank"
            rel="noopner noreferrer"
          >
            Github
          </a>
        )}
      </div>
    </Card>
  );
};

export default Project;
