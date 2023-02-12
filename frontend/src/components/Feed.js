import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import { feedQuery, searchQuery } from "../utils/data";
import MasonaryLayout from "./MasonaryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);
  if (loading)
    return <Spinner message="We are adding new ideas to your feed" />;
  return <div>{pins && <MasonaryLayout pins={pins} />}</div>;
};

export default Feed;
