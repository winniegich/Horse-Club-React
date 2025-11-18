type NavItemProps = {
  label: string;
  link: string;
};

export default function NavItem({ label, link }: NavItemProps) {
  return (
    <li className="nav-list-item">
      <a href={link} className="nav-list-item-link">
        {label}
      </a>
    </li>
  );
}

