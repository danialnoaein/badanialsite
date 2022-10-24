import Image from "next/image";
import Link from "next/link";
import classes from "./Articles.module.css";

const ArticleCard = ({ data }) => {
  return (
    <div className={`${classes.articleCard} p-2 my-3 bg-white`}>
      <div className={`${classes.articleCardThumb}  max-[600px]:hidden `}>
        <Image
          src={data.poster}
          alt={data.title}
          width={192}
          height={192}
          className='rounded'
          layout='responsive'
        />
      </div>
      <div className={`${classes.articleCardDesc}`}>
        <Link href={`/articles/${data.id}-${data.slug}`}>
          <a className={`${classes.articleCardTitle}`}>{data.title}</a>
        </Link>
        <div>{data.breif}</div>
      </div>
    </div>
  );
};

export default ArticleCard;
