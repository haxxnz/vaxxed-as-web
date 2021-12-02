import { graphql } from "gatsby";
import InputRoute from "../routes/InputRoute";

const InputPage = () => <InputRoute />;

export default InputPage;

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
