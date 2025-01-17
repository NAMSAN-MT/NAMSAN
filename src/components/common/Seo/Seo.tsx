import { useSiteMetadata } from '@Hooks/useSiteMetadata';
import React from 'react';
import { ISeoProps } from './Seo.interface';

const SEO = (props: ISeoProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    ogTitle: defaultOgTitle,
    ogDescription: defaultOgDescription,
    ogUrl,
    keywords: defaultKeywords,
    favicon,
    siteUrl,
    ogImage,
  } = useSiteMetadata();

  const seo = {
    title: props.title ?? defaultTitle,
    description: props.description ?? defaultDescription,
    ogTitle: props.ogTitle ?? defaultOgTitle,
    ogDescription: props.ogDescription ?? defaultOgDescription,
    ogUrl: props.ogUrl ?? ogUrl,
    keywords: props.keywords ?? defaultKeywords,
    favicon: `${siteUrl}${favicon}`,
    ogImage: `${siteUrl}${ogImage}`,
    siteUrl: props.siteUrl ?? siteUrl,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge; chrome=1" />
      <meta httpEquiv="subject" content="website" />
      <meta httpEquiv="author" content="하민호, 양원석" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta
        name="naver-site-verification"
        content="b19b8002ed5eed2d099c93752e8c4e37f86ce279"
      />
      <meta
        name="google-site-verification"
        content="8dGPS1J7S4mD2LzyCAPI6GWkO9jtTu1baEseazM1n5E"
      />
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:image" content={seo.ogImage} />
      <meta property="og:url" content={seo.ogUrl} />
      <meta name="robots" content="ALL" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="al:web:url" content={seo.siteUrl} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="icon" href={seo.favicon} />
      {props.children}
    </>
  );
};

export default SEO;
