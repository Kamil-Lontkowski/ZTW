import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"
import "./index.css"
import TemplateWrapper from "./TemplateWrapper"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <TemplateWrapper>
      {() =>
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="article-box">
            {/* <Link
            to={node.fields.slug}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3 className="title">{node.frontmatter.title}</h3>
          </Link> */}
            <p className="author">
              Author: <i>{node.frontmatter.author}</i>
            </p>
            <p className="date">
              {node.frontmatter.date} {node.timeToRead}min read
            </p>
            <p className="excerpt">{node.excerpt}</p>
          </div>
        ))
      }
    </TemplateWrapper>
  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
            author
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
