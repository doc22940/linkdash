/**
 * Demo site config.
 */

const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");

module.exports = () => {
  // Get document, or throw exception on error
  const conf = fs.readFileSync(path.resolve(__dirname, "./conf.yaml"));
  const { urls } = yaml.safeLoad(conf);

  return {
    title: "Linkdash - Link it all in one place.", // title of the page

    // a list of static urls to build the linkdash list from
    urls,

    // If using the host option, replace the urls above with the host
    // options below. You'll need to return a payload similar to this config.
    // host: "http://yourapi.com/something",

    // other options
    disableOpen: false, // disables auto-opening after a build
    output: "./public/index.html", // outputs the generated template to the specified path

    // injects raw html to the <head>
    htmlHead: `
      <title>This title will show when no title is set above.</title>
      <meta name="robots" content="noindex" />
      <link id="favicon" rel="shortcut icon" type="image/png" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAxIiBoZWlnaHQ9IjM0NCIgdmlld0JveD0iMCAwIDQwMSAzNDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM1Ni44ODEgMTQ2LjUxN0MzNDYuNTcyIDE0Mi42MTUgMzM0LjM3OSAxNDcuNTcgMzI0LjY2NyAxNTguMjA5QzMwOC44NTYgODcuMDQ4IDI1OS4yMjggMjAuMzQ4IDIwMC40NDMgMjAuMzQ4QzE0MS43MDMgMjAuMzQ4IDkyLjEwNjEgODYuOTQ3IDc2LjI1NjEgMTU4LjA0N0M2Ni41NjkxIDE0Ny41MjEgNTQuNDQ5MSAxNDIuNjM1IDQ0LjE5MjEgMTQ2LjUxN0MyOC41MTQxIDE1Mi40NTEgMTguODI2MSAxNzguMjQ4IDI3Ljg2NDEgMjAyLjEyNUMzNC44NjAxIDIyMC42MSA1Ni41NzgxIDIzMS42NjUgNzMuMzA2MSAyMzIuOTY3Qzg0LjgyODEgMjk5LjgyMyAxMzcuMzYzIDMzNC45MDkgMjAwLjQ0MyAzMzQuOTA5QzI2My41MTcgMzM0LjkwOSAzMTYuMDQ5IDI5OS44MjkgMzI3LjU3NyAyMzIuOTg0QzM0NC4zMyAyMzEuNzUxIDM2Ni4xODYgMjIwLjY3OSAzNzMuMjA5IDIwMi4xMjVDMzgyLjI0NiAxNzguMjQ4IDM3Mi41NTggMTUyLjQ1MSAzNTYuODgxIDE0Ni41MTdWMTQ2LjUxN1oiIGZpbGw9IiNGRkNCQkUiLz48cGF0aCBkPSJNMzU2Ljg4MSAxNDYuNTE3QzM0Ni41NzIgMTQyLjYxNSAzMzQuMzggMTQ3LjU2OSAzMjQuNjY5IDE1OC4yMDdDMzExLjg3OSAxMDAuNjQ4IDI3Ni45NjUgNDYuMDA4IDIzMi45NzMgMjcuMjI1QzI2Ny42NzYgNjMuNjE1IDI5MC41MjcgMTIyLjQ2NSAyOTAuNTI3IDE3Ni4wNTlDMjkwLjUyNyAyNjEuNDMyIDIzMi41NSAzMDYuNTI0IDE2MS4wMzIgMzA2LjUyNEMxMzkuNzk3IDMwNi41MjQgMTE5Ljc1NiAzMDIuNTQ5IDEwMi4wNzIgMjk0LjcyNEMxMjUuODIyIDMyMS4yNDMgMTYxLjA3OSAzMzQuOTA5IDIwMC40NDMgMzM0LjkwOUMyNjMuNTE3IDMzNC45MDkgMzE2LjA0OSAyOTkuODI5IDMyNy41NzcgMjMyLjk4NEMzNDQuMzMgMjMxLjc1MSAzNjYuMTg2IDIyMC42NzkgMzczLjIwOSAyMDIuMTI1QzM4Mi4yNDYgMTc4LjI0OCAzNzIuNTU4IDE1Mi40NTEgMzU2Ljg4MSAxNDYuNTE3VjE0Ni41MTdaIiBmaWxsPSIjRkRBRDlEIi8+PHBhdGggZD0iTTE0My45NzEgMTgzLjM4MkMxNTIuODUzIDE4My4zODIgMTYwLjA1NCAxNzYuMTgxIDE2MC4wNTQgMTY3LjI5OUMxNjAuMDU0IDE1OC40MTcgMTUyLjg1MyAxNTEuMjE2IDE0My45NzEgMTUxLjIxNkMxMzUuMDg5IDE1MS4yMTYgMTI3Ljg4OCAxNTguNDE3IDEyNy44ODggMTY3LjI5OUMxMjcuODg4IDE3Ni4xODEgMTM1LjA4OSAxODMuMzgyIDE0My45NzEgMTgzLjM4MloiIGZpbGw9IiMwQTgxRjkiLz48cGF0aCBkPSJNMjU3LjEwMyAxODMuMzgyQzI2NS45ODUgMTgzLjM4MiAyNzMuMTg2IDE3Ni4xODEgMjczLjE4NiAxNjcuMjk5QzI3My4xODYgMTU4LjQxNyAyNjUuOTg1IDE1MS4yMTYgMjU3LjEwMyAxNTEuMjE2QzI0OC4yMjEgMTUxLjIxNiAyNDEuMDIgMTU4LjQxNyAyNDEuMDIgMTY3LjI5OUMyNDEuMDIgMTc2LjE4MSAyNDguMjIxIDE4My4zODIgMjU3LjEwMyAxODMuMzgyWiIgZmlsbD0iIzBBODFGOSIvPjxwYXRoIGQ9Ik0yMDAuNTM3IDIzNS45OTlDMTg2LjI3MiAyMzUuOTk5IDE3Mi45NjggMjI4Ljk0MyAxNjQuOTQ3IDIxNy4xMjVDMTYyLjU0OSAyMTMuNTkxIDE2My40NjkgMjA4Ljc4MiAxNjcuMDA0IDIwNi4zODRDMTcwLjUzOCAyMDMuOTg3IDE3NS4zNDYgMjA0LjkwNiAxNzcuNzQ1IDIwOC40NDFDMTgyLjg4MyAyMTYuMDEzIDE5MS40MDQgMjIwLjUzNCAyMDAuNTM3IDIyMC41MzRDMjA5LjY3IDIyMC41MzQgMjE4LjE5IDIxNi4wMTMgMjIzLjMyOCAyMDguNDQxQzIyNS43MjYgMjA0LjkwOCAyMzAuNTM2IDIwMy45ODcgMjM0LjA2OSAyMDYuMzg0QzIzNy42MDMgMjA4Ljc4MiAyMzguNTI0IDIxMy41OTIgMjM2LjEyNiAyMTcuMTI1QzIyOC4xMDUgMjI4Ljk0MyAyMTQuODAxIDIzNS45OTkgMjAwLjUzNyAyMzUuOTk5WiIgZmlsbD0iI0YyNkEzNSIvPjxwYXRoIGQ9Ik0xNjEuMTEyIDE1Mi45MjVIMTI0LjUyN0MxMjAuMjU2IDE1Mi45MjUgMTE2Ljc5NCAxNDkuNDYzIDExNi43OTQgMTQ1LjE5MkMxMTYuNzk0IDE0MC45MjEgMTIwLjI1NiAxMzcuNDU5IDEyNC41MjcgMTM3LjQ1OUgxNjEuMTEyQzE2NS4zODMgMTM3LjQ1OSAxNjguODQ1IDE0MC45MjEgMTY4Ljg0NSAxNDUuMTkyQzE2OC44NDUgMTQ5LjQ2MiAxNjUuMzgzIDE1Mi45MjUgMTYxLjExMiAxNTIuOTI1WiIgZmlsbD0iI0E2OThBNiIvPjxwYXRoIGQ9Ik0yNzUuMzk1IDE1Mi45MjVIMjM4LjgxQzIzNC41MzkgMTUyLjkyNSAyMzEuMDc3IDE0OS40NjMgMjMxLjA3NyAxNDUuMTkyQzIzMS4wNzcgMTQwLjkyMSAyMzQuNTM5IDEzNy40NTkgMjM4LjgxIDEzNy40NTlIMjc1LjM5NUMyNzkuNjY2IDEzNy40NTkgMjgzLjEyOCAxNDAuOTIxIDI4My4xMjggMTQ1LjE5MkMyODMuMTI4IDE0OS40NjIgMjc5LjY2NiAxNTIuOTI1IDI3NS4zOTUgMTUyLjkyNVoiIGZpbGw9IiNBNjk4QTYiLz48cGF0aCBkPSJNMzU3LjMxNSAxMDYuMTYyQzM1Ny4xNDkgMTA2LjE1MSAzNTYuOTg0IDEwNi4xNDIgMzU2LjgxOSAxMDYuMTMzQzM0Ny4yMDIgMTA1LjYzMSAzMzkuNTQ5IDk3Ljg3OSAzMzkuNDQ0IDg4LjI0OUMzMzkuNDIyIDg2LjIwNyAzMzkuMzExIDg0LjE0NSAzMzkuMTA2IDgyLjA2N0MzMzUuNzY5IDQ4LjIyNCAzMDcuOTIgMjEuNTQ3IDI3My45NjggMTkuNjEzQzI2OC4wODEgMTkuMjc4IDI2Mi4zNDYgMTkuNjg1IDI1Ni44MzkgMjAuNzM1QzIzOS40MjMgMTMuODEgMjIwLjQzMiAxMCAyMDAuNTUgMTBDMTgwLjY2NSAxMCAxNjEuNjc0IDEzLjgxNCAxNDQuMjU3IDIwLjczOUMxMzguNzQ4IDE5LjY4NiAxMzMuMDEgMTkuMjc3IDEyNy4xMjEgMTkuNjEyQzkzLjE2MTEgMjEuNTQgNjUuMzA0MSA0OC4yMiA2MS45NjcxIDgyLjA3QzYxLjc2MjEgODQuMTQ4IDYxLjY1MTEgODYuMjA5IDYxLjYyOTEgODguMjVDNjEuNTI1MSA5Ny44OCA1My44NzIxIDEwNS42MzIgNDQuMjU0MSAxMDYuMTM0QzQ0LjA4OTEgMTA2LjE0MyA0My45MjMxIDEwNi4xNTIgNDMuNzU4MSAxMDYuMTYzQzIyLjYyNTEgMTA3LjUxNCA1Ljc3MTExIDEyNS4xNjggNS4zNTAxMSAxNDYuMzQxQzQuODg1MTEgMTY5Ljc0OSAyMy45OTQxIDE4OC44MSA0Ny40MjAxIDE4OC4yNjZDNjAuODYwMSAxODcuOTU0IDcyLjg0MzEgMTgxLjAzNCA4MC4xMzcxIDE3MC42MTlDODUuMjYxMSAxNjMuMzAzIDg3LjQxMzEgMTU0LjM4MiA4Ny4xMTIxIDE0NS40NTVDODcuMDg1MSAxNDQuNjYxIDg3LjA3MjEgMTQzLjg2NCA4Ny4wNzIxIDE0My4wNjRDODcuMDcyMSAxMDMuNTcgMTE5LjA4OCA3MS41NTQgMTU4LjU4MiA3MS41NTRDMTczLjI2MSA3MS41NTQgMTg2Ljg5OSA3NS45ODkgMTk4LjI1MSA4My41NzdDMTk4LjI1MSA4My41NzcgMTk4LjMyNiA4My42MjkgMTk4LjQ0OSA4My43MTRDMTk5LjcwNCA4NC41ODQgMjAxLjM3MSA4NC41NzQgMjAyLjYxNCA4My42ODdDMjE0LjAwMyA3Ni4wMzMgMjI3Ljc0MiA3MS41NTUgMjQyLjQ5MiA3MS41NTVDMjgxLjk4NiA3MS41NTUgMzE0LjAwMiAxMDMuNTcxIDMxNC4wMDIgMTQzLjA2NUMzMTQuMDAyIDE0My44NjUgMzEzLjk4OCAxNDQuNjYyIDMxMy45NjIgMTQ1LjQ1NkMzMTMuNjYxIDE1NC4zODMgMzE1LjgxMyAxNjMuMzA0IDMyMC45MzcgMTcwLjYyQzMyOC4yMzEgMTgxLjAzNSAzNDAuMjE1IDE4Ny45NTQgMzUzLjY1NCAxODguMjY3QzM3Ny4wOCAxODguODExIDM5Ni4xODkgMTY5Ljc1IDM5NS43MjQgMTQ2LjM0MkMzOTUuMzAyIDEyNS4xNjggMzc4LjQ0OSAxMDcuNTE0IDM1Ny4zMTUgMTA2LjE2MlYxMDYuMTYyWiIgZmlsbD0iI0UwRERFMiIvPjwvc3ZnPg==" />
    `.trim(),
  };
};