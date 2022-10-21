import Image from "next/image";
import Link from "next/link";
import classes from "./Articles.module.css";

const ArticleCard = (props) => {
  return (
    <div className={`${classes.articleCard} p-2 my-2`}>
      <div className={`${classes.articleCardThumb}  max-[600px]:hidden `}>
        <Image
          src={
            "https://news-cdn.varzesh3.com/pictures/2022/10/20/C/50iejyen.jpg"
          }
          alt='gg'
          width={192}
          height={192}
          className='rounded'
          layout='responsive'
        />
      </div>
      <div className={`${classes.articleCardDesc}`}>
        <Link href={"/"}>
          <a className={`${classes.articleCardTitle}`}>عنوان پست</a>
        </Link>
        <div>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
