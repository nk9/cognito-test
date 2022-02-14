import '../styles/globals.css'
import '@aws-amplify/ui-react/styles.css';

import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: process.env.AWS_DEFAULT_REGION,
        userPoolId: process.env.COGNITO_USER_POOL_ID,
        userPoolWebClientId: process.env.COGNITO_CLIENT_ID,
    }
});


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withAuthenticator(MyApp)
