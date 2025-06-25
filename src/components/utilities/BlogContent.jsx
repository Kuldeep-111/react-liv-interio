import he from "he"; // decode escaped HTML
import parse, { domToReact } from "html-react-parser";
import Pera from "./Pera";
import Heading from "./Heading";

export const  BlogContent = ({ html }) => {
  const decodedHtml = he.decode(html || ""); 

  const options = {
    replace: (domNode) => {
      if (domNode.type === "text") return domNode.data;

      if (domNode.type === "tag") {
        const children = domToReact(domNode.children, options);

        if (domNode.name === "p") {
          return <Pera className="!text-justify mb-[20px]">{children}</Pera>;
        }

        if (["h1", "h2","h3"].includes(domNode.name)) {
          return (
            <Heading className="!text-left md:!text-[18px] my-[20px]">
              {children}
            </Heading>
          );
        }

         if (domNode.name === "ol") {
          return (
            <ol className="list-decimal list-inside my-[20px] pl-[0px]">
              {children}
            </ol>
          );
        }

        if (domNode.name === "li") {
          return <li className="text-[13px] 2xl:text-[13px] text-center md:text-left tracking-[1px] font-montserrat text-[#000] leading-[22px] mb-[20px]">{children}</li>;
        }
        if (domNode.name === "img") {
  return (
    <div className="my-[10px]">
      <img
        src={domNode.attribs?.src}
        alt={domNode.attribs?.alt || ''}
      />
    </div>
  );
}


       return undefined;
      }

      return null;
    },
  };

  return <div>{parse(decodedHtml, options)}</div>;
};
