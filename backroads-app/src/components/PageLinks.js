import { pageLinks } from "../data";


export const PageLinks = ({ links, link }) => {
  return (
    <ul className={links}>
      {pageLinks.map((page) => {
        const { id, href, text } = page;
        return (
          <li key={id}>
            <a href={href} className={link}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
