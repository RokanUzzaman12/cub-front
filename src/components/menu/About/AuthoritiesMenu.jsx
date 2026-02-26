import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { messageList } from '../../../stores/messagesStore';
import { fetchMessagesAndFillStore } from '../../../loaders/messagesLoader';
import { slugify } from '../../../lib/slugify';
import { leaderCategories } from '../../../stores/leadersStore';
import { fetchLeaderCategoriesAndFillStore } from '../../../loaders/leadersLoader';

export default function AuthoritiesMenu() {
  const leader_categoris = useStore(leaderCategories);
  useEffect(() => {
    fetchLeaderCategoriesAndFillStore();
  }, []);

  return (
    <>
      <ul className='authority_menu'>
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
