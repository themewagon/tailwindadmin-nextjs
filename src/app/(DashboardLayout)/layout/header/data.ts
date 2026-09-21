
import { IconUser, IconMail, IconListCheck, IconProps, Icon } from '@tabler/icons-react';

//  Profile Data
interface ProfileType {
  title: string;
  img: string;
  subtitle: string;
  url: string;
  icon: string
}


const profileDD: ProfileType[] = [
  {
    img: "/tailwindadmin-nextjs/images/svgs/icon-account.svg",
    title: "My Profile",
    subtitle: "Account settings",
    icon: "tabler:user",
    url: "/user-profile",
  },
  {
    img: "/tailwindadmin-nextjs/images/svgs/icon-inbox.svg",
    title: "My Notes",
    subtitle: "My Daily Notes",
    icon: "tabler:mail",
    url: "/apps/notes",
  },
  {
    img: "/tailwindadmin-nextjs/images/svgs/icon-tasks.svg",
    title: "My Blogs",
    subtitle: "Stories, insights, and updates",
    icon: "tabler:list-check",
    url: "/apps/blog/post",
  },
];

const Notifications = [
  {
    avatar: '/tailwindadmin-nextjs/images/profile/user-1.jpg',
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him',
  },
  {
    avatar: '/tailwindadmin-nextjs/images/profile/user-2.jpg',
    title: 'New message',
    subtitle: 'Salma sent you new message',
  },
  {
    avatar: '/tailwindadmin-nextjs/images/profile/user-3.jpg',
    title: 'Bianca sent payment',
    subtitle: 'Check your earnings',
  },
  {
    avatar: '/tailwindadmin-nextjs/images/profile/user-4.jpg',
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks',
  },
  {
    avatar: '/tailwindadmin-nextjs/images/profile/user-5.jpg',
    title: 'John received payment',
    subtitle: '$230 deducted from account',
  },
];

export {
  Notifications,
  profileDD,
};
