import Head from "next/head";
import Image from "next/image";
import Card from "../components/common/Card";
import Link from "../components/common/link";
import avatar from "../public/avatar.jpg";
import styles from "../components/layout/Layout.module.css";

const Resume = () => {
  return (
    <>
      <Head>
        <title>بادانیال - BaDanial : رزومه</title>
      </Head>
      <div
        className='container'
        style={{ direction: "ltr" }}
      >
        <Card>
          <div className='grid grid-cols-4 gap-4'>
            <div>
              <Image
                src={avatar}
                alt='Picture of the author'
                className='rounded'
              />
            </div>

            <div className='col-span-3'>
              <div className='text-4xl font-bold'>Danial Noaein</div>
              <div>Iran, Tehran</div>
              <div>
                <Link
                  href={"tel:+989023662346"}
                  title={"+989023662346"}
                  emoji={`📱`}
                />
              </div>
              <div>
                <Link
                  href={"mailto:sdnoaein@gmail.com"}
                  title={"sdnoaein@gmail.com"}
                  emoji={`📧`}
                />
              </div>

              <div className='resume-social-link'>
                <Link
                  href={"https://www.linkedin.com/in/danialnoaein/"}
                  title={"LinkedIn"}
                />
              </div>
              <div className='resume-social-link'>
                <Link
                  href={"https://stackoverflow.com/users/5309084/danial"}
                  title={"StackOverFlow"}
                />
              </div>
              <div className='resume-social-link'>
                <Link
                  href={"https://github.com/danialnoaein"}
                  title={"GitHub"}
                />
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div
            className={`text-2xl font-bold border-b border-solid border-gray-200 mb-2 uppercase`}
          >
            SUMMARY
          </div>
          <div>
            Software developer with 7+ years of experience in building FrontEnd
            web and Android applications. Experienced in building PWA with high
            compatibility with old and modern browsers. Seeking to leverage my
            technical and creative abilities to solve problems and turn them
            into practical software. My experience includes leading teams of
            five developers.
          </div>
        </Card>

        <Card>
          <div
            className={`text-2xl font-bold border-b border-solid border-gray-200 mb-2 uppercase`}
          >
            PROFESSIONAL EXPERIENCE
          </div>
          <div>
            <ul>
              <li>
                <div className='flex'>
                  <div className='flex-1 '>
                    <span className='font-bold text-xl mr-2'>Kareto</span>
                    <span className='text-gray-500'>Iran, Ahvaz</span>
                  </div>
                  <div className='text-gray-500'> Apr 2020 – Present</div>
                </div>
                <div className='ml-4'>
                  <div className='font-bold mt-1'>Technical Team Lead</div>
                  <ul className='list-disc ml-4'>
                    <li>
                      Led development team of 5 to create the app, including
                      frontend and backend
                    </li>
                    <li>
                      Worked in an agile environment with stand-ups, kept track
                      of user stories/bugs in Trello, and conducted 2 hours of
                      sprint planning and sprint retrospectives every two weeks
                    </li>
                    <li>
                      Implemented GitLab CI to allow easy production iteration
                    </li>
                  </ul>
                  <div className='font-bold mt-1'>FrontEnd Developer</div>
                  <ul className='list-disc ml-4'>
                    <li>
                      Used understanding of JavaScript & React fundamentals to
                      build the PWA for high Accessibility
                    </li>
                    <li>
                      Monitored and improved the app performance up to 40%
                      decrease of page load time
                    </li>
                    <li>
                      Troubleshooted, fixed 500+ bugs and other issues, and
                      updated throughout production lifecycle with TypeScript
                    </li>
                    <li>
                      Trained 2 less experienced FrontEnd colleagues and guided
                      them through React library (with Redux) and pair
                      programming
                    </li>
                    <li>
                      Wrote unit tests in Jest to ensure code was tested and
                      100% bug free
                    </li>
                  </ul>
                  <div className='font-bold mt-1'>Android Developer</div>
                  <ul className='list-disc ml-4'>
                    <li>
                      Built a simple Android app that has a WebView to load
                      React app
                    </li>
                  </ul>
                </div>
              </li>
              <li className='mt-4'>
                <div className='flex'>
                  <div className='flex-1'>
                    <span className='font-bold text-xl mr-2'>iPino</span>
                    <span className='text-gray-500'>Iran, Tehran</span>
                  </div>
                  <div className='text-gray-500'>Mar 2018 – Feb 2020</div>
                </div>
                <div className='ml-4'>
                  <div className='font-bold mt-1'>FrontEnd Developer</div>
                  <ul className='list-disc ml-4'>
                    <li>
                      Designed the database and used Node.js for backend with
                      +40K DAU
                    </li>
                    <li>Built an Android app for end users</li>
                    <li>
                      Developed main website frontend to online doctor
                      appointment booking for +500 doctors
                    </li>
                    <li>
                      Mentored 2 team members to achieve professional growth and
                      learning basic programming concepts and web development
                    </li>
                  </ul>
                </div>
              </li>
              <li className='mt-4'>
                <div className='flex'>
                  <div className='flex-1'>
                    <span className='font-bold text-xl mr-2'>
                      Arsalweb Startup Development CO
                    </span>
                    <span className='text-gray-500'>Iran, Ahvaz</span>
                  </div>
                  <div className='text-gray-500'>May 2016 – Mar 2018</div>
                </div>
                <div className='ml-4'>
                  <div className='font-bold mt-1'>Android Developer</div>
                  <ul className='list-disc ml-4'>
                    <li>
                      Developed an app for real estate agency that presented
                      estates to user in 3D view
                    </li>
                    <li>
                      Increased speed 30% by refactoring http request handling
                      of an Android app
                    </li>
                  </ul>
                </div>
              </li>
              <li className='mt-4'>
                <div className='flex'>
                  <div className='flex-1'>
                    <span className='font-bold text-xl mr-2'>Artman Web</span>
                    <span className='text-gray-500'>Iran, Ahvaz</span>
                  </div>
                  <div className='text-gray-500'>May 2016 – Mar 2018</div>
                </div>
                <div className='ml-4'>
                  <div className='font-bold mt-1'>Front-End Developer</div>
                  <ul className='list-disc ml-4'>
                    <li>Refactored 3 Wordpress themes to meet SEO standards</li>
                  </ul>
                </div>
              </li>
              <li className='mt-4'>
                <div className='flex'>
                  <div className='flex-1'>
                    <span className='font-bold text-xl mr-2'>KWPA</span>
                    <span className='text-gray-500'>Iran, Ahvaz</span>
                  </div>
                  <div className='text-gray-500'>Feb 2016 – Apr 2016</div>
                </div>
                <div className='ml-4'>
                  <div className='font-bold mt-1'>Intern</div>
                  <ul className='list-disc ml-4'>
                    <li>
                      Implemented +20 templates for all new website that based
                      on a custom CMS
                    </li>
                    <li>
                      Use D3.js for organization charts that have +300 employees
                    </li>
                  </ul>
                </div>
              </li>
              <li className='mt-4'>
                <div className='flex'>
                  <div className='flex-1'>
                    <span className='font-bold text-xl mr-2'>
                      Infinity Codes
                    </span>
                    <span className='text-gray-500'>Iran, Tehran</span>
                  </div>
                  <div className='text-gray-500'>Aug 2015 – Nov 2015</div>
                </div>
                <div className='ml-4'>
                  <div className='font-bold mt-1'>Intern</div>
                  <ul className='list-disc ml-4'>
                    <li>
                      Convert PSD format UIs to HTML and CSS templates for
                      building Wordpress themes
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <div
            className={`text-2xl font-bold border-b border-solid border-gray-200 mb-2 uppercase`}
          >
            HONORS & AWARDS
          </div>
          <div>
            <div className='flex'>
              <div className='flex-1 font-bold text-xl'>
                2nd place at Sharif mobile programming marathon
              </div>
              <div>Jan 2018</div>
            </div>
            <div>Issued by Sharif University of Technology</div>
            <Link
              href={`http://mpm.sharif.ir/mpm5/`}
              title={`http://mpm.sharif.ir/mpm5/`}
            />
          </div>
        </Card>

        <Card>
          <div
            className={`text-2xl font-bold border-b border-solid border-gray-200 mb-2 uppercase`}
          >
            EDUCATION
          </div>
          <div>
            <div className='flex'>
              <div className='flex-1 font-bold text-xl'>
                Lorestan University
              </div>
              <div>Aug 2016</div>
            </div>
            <div>Bachelor of Computer Software Engineering</div>
          </div>
          <div className='mt-2'>
            <div className='flex'>
              <div className='flex-1 font-bold text-xl'>Laitec</div>
              <div>Jan 2015</div>
            </div>
            <div>Web Development II</div>
            <Link
              href={`https://laitec.ir/certification-verification/show/KydRoPReQR`}
              title={`Credential ID 2015-1-3931`}
            />
          </div>
          <div className='mt-2'>
            <div className='flex'>
              <div className='flex-1 font-bold text-xl'>
                Rayzan Samaneh Gostar
              </div>
              <div>Mar 2019</div>
            </div>
            <div>Professional Scrum Master I</div>
          </div>
        </Card>

        <Card>
          <div
            className={`text-2xl font-bold border-b border-solid border-gray-200 mb-2 uppercase`}
          >
            SKILLS
          </div>
          <div>
            <ul>
              <li>
                <span className='font-bold inline-block'>
                  Programming Languages:
                </span>{" "}
                JavaScript, Typescript, Java, HTML, CSS, PHP
              </li>
              <li>
                <span className='font-bold inline-block'>Frameworks:</span>{" "}
                ReactJS, NextJS, Laravel, Lumen
              </li>
              <li>
                <span className='font-bold inline-block'>Databases:</span>{" "}
                Mysql, Redis, No-SQL Databases
              </li>
              <li>
                <span className='font-bold inline-block'>Testing:</span> Unit,
                Jest
              </li>
              <li>
                <span className='font-bold inline-block'>CI/CD Platforms:</span>{" "}
                Docker, Gitlab CI/CD,
              </li>

              <li>
                <span className='font-bold inline-block'>
                  Development Tools:
                </span>{" "}
                Linux, Git, Nginx
              </li>
              <li>
                <span className='font-bold inline-block'>Agile: </span> Scrum,
                Trello, Jira
              </li>

              <li>
                <span className='font-bold inline-block'>Languages: </span>{" "}
                English(Fluent), Persian(Native), Arabic(Beginner)
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <div
            className={`text-2xl font-bold border-b border-solid border-gray-200 mb-2 uppercase`}
          >
            Hobbies & Interests
          </div>
          <div>Playing Football, Swimming, Playing Santoor and Piano</div>
        </Card>
      </div>
    </>
  );
};

export default Resume;
