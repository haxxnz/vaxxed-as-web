import { graphql } from "gatsby";
import CameraRoute from "../routes/CameraRoute";

const IndexPage = () => <CameraRoute />;

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["translation"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
