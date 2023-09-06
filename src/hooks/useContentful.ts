import { useState } from "react";
import {
  getEntries,
  getEntryByID,
  type QueryParams,
} from "src/lib/contentful/queries";

const useContentful = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const getBlogPostByID = async (id: string) => {
    try {
      setLoading(true);
      const entry = await getEntryByID(id);
      setLoading(false);
      return entry;
    } catch (err) {
      setLoading(false);
      setError(err as Error);
      return null;
    }
  };

  const getBlogPosts = async (queryParams?: QueryParams) => {
    try {
      setLoading(true);
      const entries = await getEntries("blogPost", queryParams);
      setLoading(false);
      return entries;
    } catch (err) {
      setLoading(false);
      setError(err as Error);
      return null;
    }
  };

  return {
    loading,
    error,
    getBlogPostByID,
    getBlogPosts,
  };
};

export default useContentful;
