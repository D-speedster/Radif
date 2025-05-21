import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Spruha - PHP Admin Panel Dashboard Template" />
        <meta name="author" content="Spruko Technologies Private Limited" />
        <meta
          name="keywords"
          content="php dashboard, php template, admin dashboard bootstrap, bootstrap admin theme, admin, php admin panel, bootstrap admin template, admin dashboard template, admin template bootstrap, php admin dashboard, dashboard template, dashboard template bootstrap, bootstrap admin, admin panel template, dashboard"
        />

        <title>داشبورد اسپروها</title>

        <link rel="icon" href="https://php.spruko.com/spruha/spruha/assets/img/brand/favicon.ico" />

        {/* Bootstrap CSS */}
        <link id="style" href="./assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

        {/* Icons CSS */}
        <link href="./assets/plugins/web-fonts/icons.css" rel="stylesheet" />
        <link href="./assets/plugins/web-fonts/font-awesome/font-awesome.min.css" rel="stylesheet" />
        <link href="./assets/plugins/web-fonts/plugin.css" rel="stylesheet" />

        {/* Style CSS */}
        <link href="./assets/css/style.css" rel="stylesheet" />
        <link href="./assets/css/plugins.css" rel="stylesheet" />

        {/* Switcher CSS */}
        <link href="./assets/switcher/css/switcher.css" rel="stylesheet" />
        <link href="./assets/switcher/demo.css" rel="stylesheet" />
      </Head>

      {/* بقیه محتویات صفحه اینجا */}
    </>
  );
}
