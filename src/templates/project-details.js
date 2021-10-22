import React from 'react';
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { details, featuredStyle, htmlStyle } from '../styles/project-details.module.css'
import { graphql } from 'gatsby';

export default function ProjectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack, featured } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className={details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={featuredStyle}><GatsbyImage image={getImage(featured.childImageSharp.gatsbyImageData)} alt={title} /></div>
                <div className={htmlStyle} dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProjectsDetailsPage($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
            stack
            title
            featured {
            childImageSharp {
                gatsbyImageData(
                    layout: FULL_WIDTH placeholder: BLURRED 
                    formats: [AUTO, WEBP]
                    )
                }
            }
        }
        }
    }
`
