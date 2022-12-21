import Image from "next/image";
import Card from "../common/Card";
import classes from "./Articles.module.css";
import parse from "html-react-parser";
import { useEffect, useState } from "react";

const ArticleContainer = ({ article }) => {
  console.log("RUN ArticleContainer", article);
  const [artcileText, setArticleText] = useState();
  const [headings, setHeadings] = useState([]);
  useEffect(() => {
    console.log("RUN USEEFFECT");
    let t = parse(article.content.html, {
      replace: (domNode) => {
        if (domNode.name === "h2") {
          console.log("RUN");
          setHeadings((prev) => [...prev, domNode.children[0].data]);
          return (
            <h2 id={domNode.children[0].data}>{domNode.children[0].data}</h2>
          );
        }
      },
    });
    setArticleText(t);
  }, [article.text]);

  return (
    <div className='container grid grid-cols-4 gap-4 mt-8'>
      <Card className='col-span-3'>
        <div
          className={`text-4xl text-center font-bold mb-4 ${classes.articleContainerTitle}`}
        >
          {article.title}
        </div>
        <div style={{ margin: "0 -16px" }}>
          <Image
            src={article.thumbnail.url}
            alt={article.title}
            width={700}
            height={475}
            sizes='100vw'
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div>{artcileText}</div>
      </Card>

      <div>
        <div className='sticky top-0 p-4'>
          <ul className='list-disc'>
            {headings.map((heading, index) => {
              return (
                <li key={index}>
                  <a href={`#${heading}`}>{heading}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleContainer;
