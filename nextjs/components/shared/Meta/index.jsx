/**
 * Function representing a meta tags
 * @CreatedOn 14/02/2022
 * @version 1.0
 * @author [Balaji Patnam]
 * @extends Component
 */

import React from "react";
import Head from "next/head";

const Meta = props => {
  let { title, description, keywords, thumbnail } = props;

  /**
   * Construct the meta information based on the type
   * @param {String} type
   * @param {String} value
   * @returns
   */
  function getMetaData(type, value) {
    if (type === "Title") {
      return (
        value || "Next js first app"
      );
    } else if (type === "Description") {
      return (
        value ||
         "Test"
      );
    } else if (type === "Keywords") {
      return (
        value ||  "React, Angular, UI development"
      );
    } else if (type === "Thumbnail") {
      return value || "";
    } else if (type === "URL") {
      return value || "https://www.google.com";
    }
  }
  return (
    <>
      <Head>
        {/* Default Meta Tags */}
        <title>{getMetaData("Title", title)} </title>
        {/** Story Image*/}
        <meta
          name="description"
          content={getMetaData("Description", description)}
        />
        <meta name="keywords" content={getMetaData("Keywords", keywords)} />
        {/* Facebook related Meta Tags */}
        <meta property="og:url" content={getMetaData("URL", props.url)} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={getMetaData("Title", title)} />
        <meta
          property="og:description"
          content={getMetaData("Description", description)}
        />
        {/* Max 2 to 4 sentences */}
        <meta
          property="og:image"
          content={getMetaData("Thumbnail", thumbnail)}
        />
        {/* Min Size 600x315  Max Size 1200x630, Max 5MB */}
        <meta property="og:site_name" content="European Travel, Inc." />
        {/** Optional */}
        {/* Twitter related Meta Tags */}
        <meta name="twitter:title" content={getMetaData("Title", title)} />{" "}
        {/* Max 70 char */}
        <meta
          name="twitter:description"
          content={getMetaData("Description", description)}
        />
        {/* Max 200 char */}
        <meta
          name="twitter:image"
          content={getMetaData("Thumbnail", thumbnail)}
        />
        {/* Min Size 280x150  Max Size 1200x630, Max 5MB */}
        <meta name="twitter:card" content="summary_large_image" />
        {/** For now use same image */}
        <meta name="twitter:image:alt" content="Alt text for image" />
        {/** Optional */}
      </Head>
    </>
  );
};

// Meta.defaultProps = {
//   title: "Next js first app",
//   keywords:
//     "React, Angular, UI development",
//   description:
//     "Test",
//   thumbnail: "",
//   url: "https://www.google.com"
// };

export default Meta;
