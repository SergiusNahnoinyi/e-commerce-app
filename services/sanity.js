import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "gjxfcm2s",
  dataset: "production",
  apiVersion: "2023-02-06",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});
