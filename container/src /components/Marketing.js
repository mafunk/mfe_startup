import React, { useEffect, useRef } from "react";

import MarketingMount from "marketing/Mount";

const Marketing = () => {
  const ref = useRef(null);

  useEffect(() => {
    MarketingMount(ref);
  }, []);

  return <div ref={ref} />;
};

export default Marketing;
