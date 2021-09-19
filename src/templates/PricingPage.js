import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
import Popup from '../components/Popup'
import PricingPageContent from '../components/PricingPageContent'
import demo1 from '../../static/images/demo-1.png'

// Export Template for use in CMS preview
export const PricingPageTemplate = ({
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
    <PageHeader title={title} subtitle={subtitle} backgroundImage={demo1} />

    <section className="section">
      <div className="container">
        <PricingPageContent />
      </div>
    </section>
  </main>
)

const PricingPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <PricingPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default PricingPage

export const pageQuery = graphql`
  query PricingPage($id: String!) {
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
