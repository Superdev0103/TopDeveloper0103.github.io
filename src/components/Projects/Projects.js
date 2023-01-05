import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import micros from "../../Assets/Projects/micro-sp-new.png";
import sandbox from "../../Assets/Projects/sandbox.png";
import reSpring from "../../Assets/Projects/re-spring.png";
import vPlayer from "../../Assets/Projects/video-player.png";
import iNumber from "../../Assets/Projects/input-number.png";
import qrCode from "../../Assets/Projects/qr-code.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={micros}
              isBlog={false}
              title="Micro-Services"
              description="In this project I'm demonstrating you the most interesting features of Spring Cloud Project for building microservice-based architecture."
              ghLink="https://github.com/TopDeveloper0103/micro-spring-new"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sandbox}
              isBlog={false}
              title="Sandbox"
              description="Personal sandbox to experience the new features of the upcoming Jakarta EE 10. Example projects for previous Java EE/Jakarta EE versions."
              ghLink="https://github.com/TopDeveloper0103/sandbox-project"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reSpring}
              isBlog={false}
              title="React-SpringBoot"
              description="This is a sandbox project for demonstrating Reactive Streams support in Spring framework and Spring ecosystem. I've also maintained a series of repos related to ReativeStreams and the latest Spring 5."
              ghLink="https://github.com/TopDeveloper0103/react-spring-project"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vPlayer}
              isBlog={false}
              title="Video-Player"
              description="I built this project using antd components and typescript. In this project, you can see sample react code and use it."
              ghLink="https://github.com/TopDeveloper0103/video-player"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iNumber}
              isBlog={false}
              title="react-input-number"
              description="This project is video player project. In this project, I used Video.js player component for Vue(3) and React."
              ghLink="https://github.com/TopDeveloper0103/react-input-number"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qrCode}
              isBlog={false}
              title="QR-Code"
              description="EasyQRCodeJS is a feature-rich cross-browser pure JavaScript QRCode generation library. Support Canvas, SVG and Table drawing methods. Support Dot style, Logo, Background image, Colorful, Title etc. settings. Support Angular, Vue.js, React, Next.js, Svelte framework. Support binary(hex) data mode.(Running with DOM on client side)"
              ghLink="https://github.com/TopDeveloper0103/QRCodeJS-project"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
