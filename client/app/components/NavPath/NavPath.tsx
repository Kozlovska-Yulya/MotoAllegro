// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import './NavPath.scss';

// const NavPathMap: Record<string, string> = {
//   about: 'Про нас',
//   catalog: 'Каталог',
//   delivery: 'Оплата і доставка',
//   warranty: 'Гарантія',
//   news: 'Новини',
//   partnership: 'Партнерство',
//   contacts: 'Контакти',
// };

// export default function NavPath() {
//   const pathname = usePathname();

//   const pathSegments = pathname
//     .split('/')
//     .filter((segment) => segment && !['ru', 'uk'].includes(segment));

//   return (
//     <nav className="nav-path">
//       <Link href="/" className="navpath-link">
//         Головна
//       </Link>
//       {pathSegments.map((segment, index) => {
//         const translatedName = NavPathMap[segment] || segment;
//         const href = '/' + pathSegments.slice(0, index + 1).join('/');

//         return (
//           <span key={index} className="navpath-item">
//             <span className="navpath-separator"> » </span>
//             <Link href={href} className="navpath-active">
//               {translatedName}
//             </Link>
//           </span>
//         );
//       })}
//     </nav>
//   );
// }

import React from 'react';
import Link from 'next/link';
import './NavPath.scss';

type Props = {
  path: { name: string; href: string }[];
};

const NavPath = ({ path }: Props) => {
  return (
    <nav className="nav-path">
      {path.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="navpath-separator">/</span>}
          {index < path.length - 1 ? (
            <Link href={item.href} className="navpath-link">
              {item.name}
            </Link>
          ) : (
            <span className="navpath-active">{item.name}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default NavPath;
