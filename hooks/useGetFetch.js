"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const useGetFetch = (url, reload) => {
  const navigate = useRouter();
  const [data, setData] = useState(null);
  const [isloaded, setIsLoaded] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://cms.mg.com.gh${url}`,

        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        }
      )
      .then((res) => {
        setIsLoaded(true);
        setData(res.data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setErrors(err?.response);
      });
  }, [url, reload, navigate]);

  return { data, isloaded, errors, setData };
};

export default useGetFetch;
