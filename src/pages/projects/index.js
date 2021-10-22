import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import { portfolio, project } from '../../styles/projects.module.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Projects({ data }) {

    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;
    
    return (
        <Layout>
            <div className={ portfolio }>
                <h2>My projects</h2>
                <div className={ project }>{projects.map(project => (
                    <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                        <div>
                            <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt={project.frontmatter.title} />
                            <h3>{project.frontmatter.title}</h3>
                            <p>{project.frontmatter.stack}</p>
                        </div>
                    </Link>
                ))}</div>
                <p>Like what you see? Email me at <strong>{contact}</strong></p>
            </div>
        </Layout>
    )
}

//export page query

export const query = graphql`
query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          stack
          title
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                )
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`