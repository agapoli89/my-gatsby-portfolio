import { Link, graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { header, btn } from '../styles/home.module.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Home({ data }) {

  console.log(data);
  

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Protfolio</h2>
          <Link className={btn} to="/projects">My portfolio projects</Link>
        </div>
        <GatsbyImage image={getImage(data.file)} alt="Banner" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`


