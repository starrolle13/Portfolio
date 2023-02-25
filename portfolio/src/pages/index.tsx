// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@app/styles/Home.module.css'

import React from "react";
import Link from "next/link";

const projects = [
  { name: "Project 1", url: "https://www.example.com/project1" },
  { name: "Project 2", url: "https://www.example.com/project2" },
  { name: "Project 3", url: "https://www.example.com/project3" },
];

const Home: React.FC = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <Link href={project.url}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;