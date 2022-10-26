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
        className='container mt-8'
        style={{ direction: "ltr" }}
      >
        <Card>
          <div className='grid grid-cols-4 gap-4'>
            <div className='max-[540px]:col-span-4'>
              <Image
                src={avatar}
                alt='Picture of the author'
                className='rounded '
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
            className={`text-2xl font-bold border-b border-solid border-gray-200 mb-2`}
          >
            SUMMARY
          </div>
          <div>
            Software developer with 8+ years of experience in developing Android
            and FrontEnd web applications. Experienced in building PWA with high
            compatibility with old and modern browsers. Seeking to leverage my
            technical and creative abilities to solve problems and turn them
            into practical software. My experience includes leading teams of
            five developers.
          </div>
        </Card>

        <Card>
          <div
            className={`text-2xl font-bold border-b border-solid border-gray-200 mb-2`}
          >
            PROFESSIONAL EXPERIENCE
          </div>
          <div>
            <ul>
              <li>
                <div className='flex'>
                  <div className='flex-1 '>
                    <span className='font-bold text-xl mr-4'>Kareto</span>
                    Iran, Ahvaz
                  </div>
                  <div> Apr 2020 – Present</div>
                </div>
                <div className='ml-4'>
                  <div className='font-bold'>Technical Team Lead</div>
                  <ul className='list-disc ml-4'>
                    <li>TODO 1</li>
                    <li>TODO 2</li>
                  </ul>
                  <div className='font-bold'>FrontEnd Developer</div>
                  <ul className='list-disc ml-4'>
                    <li>TODO 1</li>
                    <li>TODO 2</li>
                  </ul>
                  <div className='font-bold'>Android Developer</div>
                  <ul className='list-disc ml-4'>
                    <li>TODO 1</li>
                    <li>TODO 2</li>
                  </ul>
                </div>
              </li>
              <li>
                <div className='flex'>
                  <div className='flex-1 font-bold text-xl'>
                    iPino, Iran, Tehran
                  </div>
                  <div>Mar 2018 – Feb 2020</div>
                </div>
                <div className='ml-4'>
                  <div className='font-bold'>FrontEnd Developer</div>
                  <ul className='list-disc ml-4'>
                    <li>TODO 1</li>
                    <li>TODO 2</li>
                  </ul>
                </div>
              </li>
              <li>
                <div className='flex'>
                  <div className='flex-1 font-bold text-xl'>
                    Arsalweb Startup Development CO, Iran, Ahvaz
                  </div>
                  <div>May 2016 – Mar 2018</div>
                </div>
                <div className='ml-4'>
                  <div className='font-bold'>Android Developer</div>
                  <ul className='list-disc ml-4'>
                    <li>TODO 1</li>
                    <li>TODO 2</li>
                  </ul>
                </div>
              </li>
              <li>
                <div className='flex'>
                  <div className='flex-1 font-bold text-xl'>
                    Artman Web, Iran, Ahvaz
                  </div>
                  <div>May 2016 – Mar 2018</div>
                </div>
                <div className='ml-4'>
                  <div className='font-bold'>Front-End Developer</div>
                  <ul className='list-disc ml-4'>
                    <li>TODO 1</li>
                    <li>TODO 2</li>
                  </ul>
                </div>
              </li>
              <li>
                <div className='flex'>
                  <div className='flex-1 font-bold text-xl'>
                    Infinity Codes, Iran, Tehran
                  </div>
                  <div>Aug 2015 – Nov 2015</div>
                </div>
                <div className='ml-4'>
                  <div className='font-bold'>Intern</div>
                  <ul className='list-disc ml-4'>
                    <li>TODO 1</li>
                    <li>TODO 2</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <div
            className={`text-2xl font-bold border-b border-solid border-gray-200 mb-2`}
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
            className={`text-2xl font-bold border-b border-solid border-gray-200 mb-2`}
          >
            EDUCATION
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
            className={`text-2xl font-bold border-b border-solid border-gray-200 mb-2`}
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
                <span className='font-bold inline-block'>
                  CI/CD ‐ Platforms:
                </span>{" "}
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
            className={`text-2xl font-bold border-b border-solid border-gray-200 mb-2`}
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
