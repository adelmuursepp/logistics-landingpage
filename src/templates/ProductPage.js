import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
import Popup from '../components/Popup'
import ProductPageContent from '../components/ProductPageContent'
import demo1 from '../../static/images/demo-1.png'

// Export Template for use in CMS preview
export const ProductPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section2,
  video,
  videoPoster,
  videoTitle,
  accordion,
  body,
  gallery
}) => (
  <main>
    <PageHeader title="" subtitle="" backgroundImage={demo1} />

    <section className="section">
      <div className="container">
        <ProductPageContent />
      </div>
    </section>
  </main>
)

const ProductPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ProductPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ProductPage

export const pageQuery = graphql`
  query ProductPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section2
        video
        videoPoster
        videoTitle
        accordion {
          title
          description
        }
      }
    }
  }
`
