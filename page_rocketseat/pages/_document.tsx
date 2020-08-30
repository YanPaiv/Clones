import Document, {DocumentProps, Html, Head, NextScript, Main} from 'next/document'

class MyDocument extends Document<DocumentProps>{
   render(): JSX.Element {
      return(
         <Html>
            <Head>
               <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" ></link>
            </Head>

            <body>
               <Main />
               <NextScript/>
            </body>
         </Html>
      );
   }
}

export default MyDocument