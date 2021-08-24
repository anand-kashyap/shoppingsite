import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: auto 1fr 0.2fr;
  align-content: center;
  column-gap: 10%;
  box-shadow: 0px 5px 4px 0 ${props => props.theme.secondary};
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2em;
  }
  nav {
    display: flex;
    align-items: flex-end;
  }
  nav > ul {
    padding: 15px 0;
    li.active {
      font-weight: 600;
    }
  }
  .logo img {
    min-width: 186px;
  }
`;

const UserActions = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 1em;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
  }
  ul > li:first-child {
    grid-column-start: 3;
  }
  ul > li {
    font-size: small;
    font-weight: bold;
  }
`;

interface INavLink {
  label: string;
  href: string;
}

const NavLinks = ({
  links,
  activePath = '',
}: {
  links: INavLink[];
  activePath?: string;
}) => {
  if (links.length < 1) return null;

  return (
    <ul>
      {links.map((link, i) => (
        <li key={i} className={activePath === link.href ? 'active' : ''}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export { StyledHeader, UserActions, NavLinks };
