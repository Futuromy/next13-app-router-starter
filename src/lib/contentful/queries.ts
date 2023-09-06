/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Entry, type EntryCollection } from "contentful";
import { client } from "src/lib/contentful/client";
import type * as G from "src/types/generated/contentful";

export interface QueryParams {
  limit?: number;
  skip?: number;
  order?: string;
  [propName: string]: any;
}

type ContentType = G.IBlogPost | G.IKbAppCategory | G.IPortfoiloProject;

type ContentEntry<ID extends G.CONTENT_TYPE> = Pick<ContentType, "fields"> & {
  sys: {
    contentType: {
      sys: {
        id: ID;
      };
    };
  };
};

export type ContentTypeID<CT extends ContentType = ContentType> =
  CT["sys"]["contentType"]["sys"]["id"];

export type ContentEntryByID<ID extends G.CONTENT_TYPE> = Extract<
  ContentType,
  ContentEntry<ID>
>;

export const getContentTypes = async () => {
  return client.getContentTypes();
};

export const getEntries = async <
  CTID extends ContentTypeID,
  CE extends ContentEntryByID<CTID>
>(
  contentTypeID: CTID,
  queryParams?: QueryParams
): Promise<EntryCollection<CE["fields"]>> => {
  try {
    return await client.getEntries({
      content_type: contentTypeID,
      ...queryParams,
    });
  } catch (error) {
    throw error;
  }
};

export const getEntryByID = async <
  CTID extends ContentTypeID,
  CE extends ContentEntryByID<CTID>
>(
  id: string,
  queryParams?: QueryParams
): Promise<Entry<CE>> => {
  try {
    const entry = await client.getEntry<CE>(id, queryParams);
    return entry;
  } catch (error) {
    throw error;
  }
};

export const getBlogPostBySlug = async <
  CE extends ContentEntryByID<"blogPost">
>(
  slug: string,
  queryParams?: QueryParams
): Promise<EntryCollection<CE["fields"]>> => {
  try {
    return await client.getEntries({
      content_type: "blogPost",
      "fields.slug[in]": slug,
      ...queryParams,
    });
  } catch (error) {
    throw error;
  }
};

export const getFields = <CE extends ContentType>(
  entry: Entry<CE["fields"]>
): CE["fields"] => {
  return entry.fields;
};
