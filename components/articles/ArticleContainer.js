import Card from "../common/Card";
import classes from "./Articles.module.css";

const ArticleContainer = ({ article }) => {
  return (
    <div className='container grid grid-cols-4 gap-4 mt-8'>
      <Card className='col-span-3'>
        <div
          className={`text-4xl text-center font-bold mb-4 ${classes.articleContainerTitle}`}
        >
          {article.title}
        </div>
        <div>{article.poster}</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>rate</div>
      </Card>

      <div>
        <div className='sticky top-0 p-4'>
          <ul className='list-disc'>
            <li>
              <a href='#titrone'>عنوان اول</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleContainer;
