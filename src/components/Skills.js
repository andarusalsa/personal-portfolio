import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import Marquee from 'react-marquee-line';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Consistently honing skills with a passion for learning and continuous growth.</p>
                        <table className="table-skill">
                          <thead>
                            <tr >
                              <th>Skills</th>
                              <th>Tools and Technologies</th>
                              <th>Web Development</th>
                              <th>SDLC</th>
                            </tr>
                          </thead>
                          <tbody className="body-skill">
                            <tr>
                              <td>UI/UX Design</td>
                              <td>Figma</td>
                              <td>React</td>
                              <td>Agile</td>
                            </tr>
                            <tr>
                              <td>Product Design</td>
                              <td>Miro</td>
                              <td>JavaScript</td>
                            </tr>
                            <tr>
                              <td>FrontEnd Development</td>
                              <td>Trello</td>
                              <td>HTML</td>
                            </tr>
                            <tr>
                              <td>Product Development</td>
                              <td>GitHub</td>
                              <td>CSS</td>
                            </tr>
                            <tr>
                              <td>Project Mangement</td>
                              <td>Visual Studi Code</td>
                            </tr>
                            <tr>
                              <td>Usability Testing</td>
                              <td>Google Workspace & Colab</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
