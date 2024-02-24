import Head from "next/head";

function opengraphImage(props: any){
  return(
    <Head>
      <title>장용민</title>
  
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0000ff" />
      
      <meta name="Subject" content="포트폴리오" />
      <meta name="Title" content="장용민 포트폴리오" />
      <meta name="Keywords" content="프론트엔드,개발자,포트폴리오" />
      <meta name="Description" content="장용민 포트폴리오" />
      <meta name="Author" content="장용민" />
      <meta name="Publisher" content="JangYongMin" />
      <meta name="Classification" content="포트폴리오" />
      <meta name="Location" content="Seoul Korea" />
      <meta name="Author-Date" content="2023.12.09" />
      <meta name="Copyright" content="장용민" />
      
      <link rel="icon" href="%PUBLIC_URL%/dragon.png" />
      <link rel="shortcut icon" type="image/x-icon" href="%PUBLIC_URL%/favicon.ico" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/dragon.png" />
  
      <meta property="og:image" content="%PUBLIC_URL%/dragon.png" />
      <meta property="og:title" content="장용민 포트폴리오" />
      <meta property="og:description" content="장용민 포트폴리오" />
      
      <meta name="twitter:title" content="장용민 포트폴리오" />
  
      <meta http-equiv="Content-Script-Type" content="text/javascript" />
      <meta http-equiv="Content-Style-Type" content="text/css" />
      <meta http-equiv="Title" content="장용민 포트폴리오" />
      <meta http-equiv="Subject" content="포트폴리오" />
      <meta http-equiv="Author" content="장용민" />
      <meta http-equiv="Publisher" content="JangYongMin" />
      <meta http-equiv="Copyright" content="장용민" />
      <meta http-equiv="Other Agent" content="YongMin" />
  
      <script src="https://kit.fontawesome.com/16ac9ced80.js" crossOrigin="anonymous" />
  
      <link rel="stylesheet" href="https://cdn.plyr.io/3.6.2/plyr.css" />
      <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&amp;display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Oleo+Script&amp;display=swap" rel="stylesheet" />
      
      <script src="https://unpkg.com/typeit@8.7.1/dist/index.umd.js" />
    </Head>
  )
}