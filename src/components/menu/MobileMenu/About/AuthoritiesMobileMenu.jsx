import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { leaderCategories } from '../../../../stores/leadersStore';
import { fetchLeaderCategoriesAndFillStore } from '../../../../loaders/leadersLoader';

export default function AuthoritiesMobileMenu() {
  const leader_categoris = useStore(leaderCategories);
  useEffect(() => {
    fetchLeaderCategoriesAndFillStore();
  }, []);

  return (
    <>
      <ul className='submenu mm-collapse'>
        <li style={{ textAlign: 'center', color: '#890c25' }}>Authorities</li>
        {leader_categoris.map((category, index) => (
          <li key={index}>
            <a href={`/authorities/${category.slug}`}>{category.name}</a>
          </li>
        ))}
      </ul>
      <style>
        {`
            .authority_menu{
                padding-left: 0
            }
            .authority_menu li a{
                color: #262626
            }
        `}
      </style>
    </>
  );
}
