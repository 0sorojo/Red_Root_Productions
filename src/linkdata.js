import React from 'react';
import {
  FaLinkedin,
  FaGithubSquare,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaBriefcase,
  FaDollarSign,
  FaHandsHelping,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/aboutlawrence',
    text: 'about lawrence',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/aboutsite',
    text: 'about this site',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/solutions',
    text: 'solutions',
    icon: <FaBriefcase />,
  },
  {
    id: 5,
    url: '/benefits',
    text: 'benefits',
    icon: <FaDollarSign />,
  },
  {
    id: 6,
    url: '/contact',
    text: 'contact',
    icon: <FaHandsHelping />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/lo-adams/',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: 'https://github.com/0sorojo',
    icon: <FaGithubSquare />,
  },
];
