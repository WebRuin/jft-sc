import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import PageLayout from "./components/PageLink";

const Page = () => {
  const router = useRouter();

  // Get data from API
  // const [id, setID] = useState(router.query.id);
  const [pageData, setPageData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const data = await getPageData("/api/getPageData", router.query.id);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }

      async function getPageData(url = "", data = "") {
        const res = await fetch(url, {
          method: "PUT",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json"
          },
          redirect: "follow",
          referrer: "no-referrer",
          body: data
        });

        const thePage = await res;
        setPageData(thePage);
        return await res;
      }
    }
    getData();
  }, []);

  return (
    <PageLayout>
      <h4>Title</h4>
      <div className="meta-box">
        <span className="name">Tim</span>
        <span className="date">09/01/1981</span>
      </div>
      <p>
        dfwdfsgef efdggb rvrt rtre rwerht tretertt b trehtehrt b ghrdghtrerdghtr
        rtghrteet rerteghgrte rteghtregfg rtehrterte rhtrerhte treghrye
        rterhrtete b vtrete
      </p>
    </PageLayout>
  );
};

export default Page;
