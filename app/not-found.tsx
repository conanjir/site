import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page shell section-gap">
      <div className="page-intro">
        <p className="eyebrow">404</p>
        <h1>The page you are looking for is not in the archive.</h1>
        <Link href="/work" className="text-link">
          Return to work
        </Link>
      </div>
    </div>
  );
}
