import Head from "next/head";
import Image from "next/image";
import Card from "../components/common/Card";
import Link from "../components/common/link";
import avatar from "../public/avatar.jpg";

const Contact = () => {
  return (
    <>
      <Head>
        <title>بادانیال - BaDanial : تماس با من</title>
      </Head>
      <div className='container mt-8'>
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
              <div className='text-4xl font-bold'>دانیال نوآیین</div>
              <br />
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
      </div>
    </>
  );
};

export default Contact;
