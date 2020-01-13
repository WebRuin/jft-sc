import Link from "next/link";

const PageLink = props => (
  <Link href={`/page?id=${props.id}`}>
    <a>
      <h4>{props.title}</h4>
    </a>
  </Link>
);

export default PageLink;
