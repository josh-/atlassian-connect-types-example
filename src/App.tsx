import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AP.request("/rest/api/latest/thing", {
      success: function (responseText) {
        alert(responseText);
      },
    });
  });

  return <></>;
}
