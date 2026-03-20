import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";

function App() {
  return (
    <ApiReferenceReact
      configuration={{
        url: "/openapi.json",
        theme: "saturn",
        layout: "modern",
        darkMode: true,
        hideModels: false,
        defaultHttpClient: {
          targetKey: "js",
          clientKey: "axio",
        },
        metaData: {
          title: "Rclone RC API Reference",
          description:
            "Comprehensive API documentation for the Rclone Remote Control API",
        },
      }}
    />
  );
}

export default App;
