import { profile } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
